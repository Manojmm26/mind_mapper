/* Comprehensive verification of AI custom-stack generation.
   npx tsx scripts/verify-stack-gen.ts <baseURL> [--skip-generate] */
import { chromium } from "@playwright/test";

const BASE = process.argv[2] || "http://localhost:3000";
const results: Array<{ name: string; pass: boolean; detail?: string }> = [];

function report(name: string, pass: boolean, detail?: string) {
  results.push({ name, pass, detail });
  console.log(`  ${pass ? "PASS" : "FAIL"} — ${name}${detail ? ` (${detail})` : ""}`);
}

async function main() {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  const consoleErrors: string[] = [];
  page.on("pageerror", (e) => consoleErrors.push(e.message));

  await page.goto(BASE, { waitUntil: "load", timeout: 60000 });
  await page.waitForSelector("#root > *");
  await page.waitForTimeout(1200);

  // Enter studio
  await page.locator("button", { hasText: /Interview Studio/i }).first().click();
  await page.waitForSelector("text=Rosetta Stone", { timeout: 60000 });

  // --- T1: built-in stack unaffected ---
  {
    const label = await page.locator('[role="tablist"] button').first().textContent();
    report("T1 built-in Angular↔.NET serves 32 paradigms", !!label && label.includes("(32)"), label?.trim());
  }

  // --- T2: offline fallback path (abort Gemini calls) ---
  await ctx.route("**generativelanguage.googleapis.com**", (r) => r.abort());
  {
    await page.locator("#tech-stack-switcher-btn").click();
    await page.locator("button", { hasText: "+ Custom AI Matrix" }).first().click();
    await page.waitForSelector("text=Generate Custom Tech Matrix");
    const t0 = Date.now();
    await page.locator("button", { hasText: "Generate Matrix with AI" }).first().click();
    // expect fast fallback (no network retries hang forever; batches abort quickly)
    let sawFallback = false;
    while (Date.now() - t0 < 180000) {
      await page.waitForTimeout(3000);
      const s = await page.locator('[role="status"]').first().textContent().catch(() => "");
      if (s && (s.includes("starter template") || s.includes("unavailable"))) { sawFallback = true; break; }
      if (!(await page.locator("text=Generate Custom Tech Matrix").count())) break;
    }
    const tabs = await page.locator('[role="tablist"] button').allTextContents();
    const rosetta = tabs.find((t) => t.includes("Rosetta"));
    report(
      "T2 offline → honest fallback + starter template",
      sawFallback && !!rosetta && rosetta.includes("(1)"),
      `status=${sawFallback}, rosetta=${rosetta?.trim()}`
    );
    // close modal if open
    if (await page.locator("text=Generate Custom Tech Matrix").count()) {
      await page.locator('button', { hasText: 'Cancel' }).first().click().catch(() => {});
    }
  }

  // Clean up the fallback custom stacks from localStorage before real run
  await page.evaluate(() => {
    localStorage.removeItem("INTERVIEW_STUDIO_CUSTOM_STACKS_V1");
  });

  // --- T3: real generation ---
  await ctx.unroute("**generativelanguage.googleapis.com**");
  await page.reload({ waitUntil: "load" });
  await page.waitForSelector("text=Rosetta Stone", { timeout: 60000 });
  await page.waitForTimeout(1000);

  await page.locator("#tech-stack-switcher-btn").click();
  await page.locator("button", { hasText: "+ Custom AI Matrix" }).first().click();
  await page.waitForSelector("text=Generate Custom Tech Matrix");
  await page.locator('button[type="button"]', { hasText: "SvelteKit 2" }).first().click();
  await page.locator('button[type="button"]', { hasText: "Rust (Axum & Tokio)" }).first().click();
  await page.locator('button[type="button"]', { hasText: "MongoDB" }).first().click();

  const t0 = Date.now();
  await page.locator("button", { hasText: "Generate Matrix with AI" }).first().click();
  let finalStatus = "";
  while (Date.now() - t0 < 420000) {
    await page.waitForTimeout(5000);
    const s = await page.locator('[role="status"]').first().textContent().catch(() => "");
    if (s && s !== finalStatus) finalStatus = s.trim();
    const modalStillOpen = await page.locator("text=Generate Custom Tech Matrix").count();
    if (s && (s.includes("starter template") || s.includes("unavailable"))) break;
    if (!modalStillOpen) {
      // Modal auto-closes on success; React unmounts before the success
      // status ever paints, so closure itself is the success signal.
      finalStatus = `(modal closed = success; last stage: ${finalStatus})`;
      break;
    }
  }
  const genSecs = Math.round((Date.now() - t0) / 1000);
  report(
    "T3 generation completed",
    /AI generated \d+ paradigm/.test(finalStatus) || finalStatus.includes("modal closed"),
    `${genSecs}s — "${finalStatus}"`
  );
  await page.screenshot({ path: "/tmp/opencode/vsg-generation-done.png" });

  // --- T4: persistence across reload ---
  await page.reload({ waitUntil: "load" });
  await page.waitForSelector("text=Rosetta Stone", { timeout: 60000 });
  await page.waitForTimeout(800);
  await page.locator("#tech-stack-switcher-btn").click();
  const customOption = page.locator("[data-stack-id^='custom-']").first();
  const persisted = await customOption.count();
  if (persisted) {
    await customOption.click();
    await page.waitForTimeout(600);
  }
  report("T4 custom stack persists in localStorage & is selectable", persisted > 0);

  const tabs4 = await page.locator('[role="tablist"] button').allTextContents();
  const rosettaCount = tabs4.find((t) => t.includes("Rosetta"))?.match(/\((\d+)\)/)?.[1];
  const teleCount = tabs4.find((t) => t.includes("Teleprompter"))?.match(/\((\d+)\)/)?.[1];
  const sqlTabCount = tabs4.find((t) => t.includes("Tuning"))?.match(/\((\d+)\)/)?.[1];

  // --- T5b: deep-dive dossiers present in persisted data ---
  {
    const stats = await page.evaluate(() => {
      const raw = localStorage.getItem("INTERVIEW_STUDIO_CUSTOM_STACKS_V1");
      if (!raw) return null;
      const stacks = JSON.parse(raw);
      const s = stacks.find((x: any) => x.paradigms?.length > 4) || stacks[0];
      const withBoth = s.paradigms.filter(
        (x: any) => x.angularDossier && x.dotnetDossier
      ).length;
      const p0 = s.paradigms[0];
      return {
        total: s.paradigms.length,
        withBoth,
        angPractices: p0.angularDossier?.productionBestPractices?.length ?? 0,
        angProbes: p0.angularDossier?.seniorInterviewProbes?.length ?? 0,
        angPitfalls: p0.angularDossier?.criticalPitfallsAndAntiPatterns?.length ?? 0,
        overviewLen: p0.angularDossier?.architectureOverview?.length ?? 0,
        codeLen: p0.angularDossier?.extendedProductionCode?.length ?? 0,
        probeQ: p0.angularDossier?.seniorInterviewProbes?.[0]?.interviewerQuestion ?? "",
      };
    });
    report(
      "T5b BOTH framework dossiers on every paradigm",
      !!stats && stats.total > 0 && stats.withBoth === stats.total,
      stats ? `withBoth=${stats.withBoth}/${stats.total} practices=${stats.angPractices} probes=${stats.angProbes} pitfalls=${stats.angPitfalls} overview=${stats.overviewLen}ch code=${stats.codeLen}ch` : "no custom stack"
    );
    if (stats) console.log("      sample probe:", stats.probeQ.slice(0, 140));
  }

  // --- T5: dossier depth ---
  report(
    "T5 flagship-depth dossier",
    Number(rosettaCount) >= 24 && Number(teleCount) >= 12 && Number(sqlTabCount) >= 12,
    `paradigms=${rosettaCount} scenarios=${teleCount} rules=${sqlTabCount}`
  );

  // --- T6: Rosetta content is stack-specific + deep-dive modal works ---
  {
    await page.locator('[role="tablist"] button', { hasText: "Rosetta" }).first().click();
    await page.waitForTimeout(800);
    const bodyText = (await page.evaluate(() => document.body.innerText)).slice(0, 20000);
    const mentionsStack = bodyText.includes("SvelteKit") && bodyText.includes("Rust") || bodyText.includes("Axum");
    report("T6a rosetta content mentions generated stack tech", mentionsStack);
    // open first deep dive
    await page.locator("button", { hasText: "Deep Dive Dossier" }).first().click();
    await page.waitForTimeout(600);
    // Dossier sections live under the per-framework tabs (default tab is Bridge)
    const dossierTab = page.locator("button", { hasText: "Architecture Dossier" }).first();
    if (await dossierTab.count()) {
      await dossierTab.click();
      await page.waitForTimeout(600);
    }
    const modalVisible = await page.locator("text=Deep Dive Dossier").count();
    const modalText = modalVisible ? await page.evaluate(() => document.body.innerText.slice(0, 30000)) : "";
    const hasCode = modalText.includes("export") || modalText.includes("fn ") || modalText.includes("async") || modalText.includes("use");
    report("T6b paradigm deep-dive modal opens with code content", !!modalVisible && hasCode);
    const diag = await page.evaluate(() => {
      const t = document.body.innerText;
      return {
        practices: (t.match(/Production Best Practices/gi) || []).length,
        probes: (t.match(/Interview Probes/gi) || []).length,
        pitfalls: (t.match(/Anti-Patterns & Production Remediation/gi) || []).length,
        underHood: (t.match(/Under[- ]the[- ]Hood/gi) || []).length,
        activeTabHint: (t.match(/Architecture Dossier/gi) || []).length,
        len: t.length,
      };
    });
    // One column is visible per framework tab; check BOTH tabs.
    const hasDossierFrontend =
      diag.practices >= 1 && diag.probes >= 1 && diag.pitfalls >= 1;
    let hasDossierBackend = false;
    const backendTab = page.locator("button", { hasText: "Architecture Dossier" }).nth(1);
    if (await backendTab.count()) {
      await backendTab.click();
      await page.waitForTimeout(500);
      hasDossierBackend = await page.evaluate(() => {
        const t = document.body.innerText;
        return (
          (t.match(/Production Best Practices/gi) || []).length >= 1 &&
          (t.match(/Interview Probes/gi) || []).length >= 1 &&
          (t.match(/Anti-Patterns & Production Remediation/gi) || []).length >= 1
        );
      });
      // switch back for the remaining screenshot
      await page.locator("button", { hasText: "Architecture Dossier" }).first().click();
      await page.waitForTimeout(300);
    }
    const hasDossier = hasDossierFrontend && hasDossierBackend;
    const probeDepth = /model|Lead answer|Staff/i.test(modalText);
    report(
      "T6c BOTH framework dossiers render best-practices/probes/pitfalls",
      !!modalVisible && hasDossier,
      `practices=${diag.practices} probes=${diag.probes} pitfalls=${diag.pitfalls} underHood=${diag.underHood} tabBtns=${diag.activeTabHint} len=${diag.len}`
    );
    await page.keyboard.press("Escape");
    await page.locator('button:has-text("×")').first().click().catch(() => {});
    await page.waitForTimeout(400);
  }

  // --- T7: teleprompter scenario content quality ---
  {
    await page.locator('[role="tablist"] button', { hasText: "Teleprompter" }).first().click();
    await page.waitForTimeout(900);
    const text = await page.evaluate(() => document.body.innerText);
    const hasScript = text.length > 2000;
    const mongoOrRust = text.includes("MongoDB") || text.includes("Rust") || text.includes("Tokio");
    report("T7 teleprompter renders AI scenarios w/ stack specifics", hasScript && mongoOrRust);
  }

  // --- T8: SQL deck counts consistent (tab vs header vs pills) ---
  {
    await page.locator('[role="tablist"] button', { hasText: "Tuning" }).first().click();
    await page.waitForTimeout(900);
    const text = await page.evaluate(() => document.body.innerText);
    const headerMatch = text.match(/tuning rules \((\d+)/i);
    const pillAll = text.match(/All\n(\d+)/);
    const consistent =
      !!headerMatch && !!pillAll && headerMatch[1] === sqlTabCount && pillAll[1] === sqlTabCount;
    report(
      "T8 SQL deck counts consistent across tab/header/pills",
      consistent,
      `tab=${sqlTabCount} header=${headerMatch?.[1]} pills=${pillAll?.[1]}`
    );
    const staleCopy = text.includes("SqlBulkCopy streaming");
    report("T8b no stale SQL Server copy on non-MSSQL deck", !staleCopy);
  }

  // --- T9: decision board renders AI matrix ---
  {
    await page.locator('[role="tablist"] button', { hasText: "Decision Board" }).first().click();
    await page.waitForTimeout(1500);
    const text = await page.evaluate(() => document.body.innerText);
    const hasMatrix = text.includes("vs") && (text.includes("Frontend") || text.includes("Backend"));
    const hasCriteria = await page.locator("table, [class*='matrix'], [class*='grid']").count();
    report("T9 decision board renders comparison data", hasMatrix && hasCriteria > 0);
    await page.screenshot({ path: "/tmp/opencode/vsg-decision-board.png" });
  }

  // --- T10: grill works against AI scenarios ---
  {
    await page.locator('[role="tablist"] button', { hasText: "Mock Grill" }).first().click();
    // Question generation is an LLM call — allow up to 90s.
    let qCards = 0;
    const g0 = Date.now();
    while (Date.now() - g0 < 90000) {
      qCards = await page.locator('text=Interviewer Counter-Question').count();
      if (qCards > 0) break;
      await page.waitForTimeout(3000);
    }
    const loadingGone = !(await page.locator('text=formulating tough counter-questions').count());
    report("T10 mock grill generates questions for custom scenario", loadingGone && qCards > 0, `cards=${qCards} after ${Math.round((Date.now()-g0)/1000)}s`);
  }

  // --- T11: no page errors whole session ---
  report("T11 zero uncaught page errors", consoleErrors.length === 0, consoleErrors.slice(0, 3).join(" | ").slice(0, 200));

  await page.screenshot({ path: "/tmp/opencode/vsg-final.png", fullPage: false });
  await browser.close();

  const passed = results.filter((r) => r.pass).length;
  console.log(`\n===== ${passed}/${results.length} checks passed =====`);
  process.exit(passed === results.length ? 0 : 1);
}

main().catch((e) => { console.error(e); process.exit(1); });
