import { chromium } from "@playwright/test";
async function main(): Promise<void> {
  const browser = await chromium.launch();
const page = await (await browser.newContext()).newPage();
await page.goto("http://localhost:3000", { waitUntil: "load" });
const data = await page.evaluate(() => {
  const raw = localStorage.getItem("INTERVIEW_STUDIO_CUSTOM_STACKS_V1");
  if (!raw) return null;
  const stacks = JSON.parse(raw);
  const s = stacks[0];
  const p = s.paradigms[0];
  return {
    stackTitle: s.title,
    paradigms: s.paradigms.length,
    firstParadigm: {
      name: p.name,
      hasAngularDossier: !!p.angularDossier,
      hasDotnetDossier: !!p.dotnetDossier,
      angOverviewLen: p.angularDossier?.architectureOverview?.length,
      angCodeLen: p.angularDossier?.extendedProductionCode?.length,
      angPractices: p.angularDossier?.productionBestPractices?.length,
      angProbes: p.angularDossier?.seniorInterviewProbes?.length,
      angPitfalls: p.angularDossier?.criticalPitfallsAndAntiPatterns?.length,
      netProbes: p.dotnetDossier?.seniorInterviewProbes?.length,
    },
    allParadigmsHaveBothDossiers: s.paradigms.every((x: any) => x.angularDossier && x.dotnetDossier),
    probeSample: p.angularDossier?.seniorInterviewProbes?.[0]?.interviewerQuestion,
  };
});
console.log(JSON.stringify(data, null, 1));
await browser.close();
}
main();
