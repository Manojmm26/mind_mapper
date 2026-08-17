import { ComparisonWorkspaceData } from "../../services/llmService";

export const SCHEMA_MIGRATIONS_COMPARISON_EXAMPLE: ComparisonWorkspaceData = {
  "topic": "Database Schema Migration Tools: Prisma Migrations vs Drizzle Kit vs Liquibase vs Flyway",
  "domainType": "tools",
  "overview": "A database engineering comparison evaluating declarative schema migrations, SQL file generation, zero-downtime blue/green schema updates, and multi-language ORM integration.",
  "recommendedApproach": "Use Drizzle Kit for lightweight TypeScript SQL-first migrations; use Prisma Migrations for declarative schema modeling; use Flyway or Liquibase for enterprise multi-language Java/SQL pipelines.",
  "criteria": [
    {
      "id": "c1",
      "label": "Declarative Schema vs SQL Script Generation",
      "type": "text",
      "description": "Defining schemas in DSL/TypeScript vs raw SQL migration scripts."
    },
    {
      "id": "c2",
      "label": "TypeScript Type Safety & ORM Integration",
      "type": "text",
      "description": "Generating strongly-typed TypeScript types directly from database schemas."
    },
    {
      "id": "c3",
      "label": "Zero-Downtime & Backward Compatible Migrations",
      "type": "text",
      "description": "Handling non-blocking ALTER TABLE operations safely in production."
    },
    {
      "id": "c4",
      "label": "Multi-Database & Multi-Language Support",
      "type": "text",
      "description": "Supporting Postgres, MySQL, SQLite, Oracle, SQL Server across Java, Python, and Node."
    },
    {
      "id": "c5",
      "label": "CI/CD Pipeline Execution & CLI Speed",
      "type": "text",
      "description": "CLI migration execution speed during deployment builds."
    },
    {
      "id": "c6",
      "label": "Open Source Licensing & Community",
      "type": "text",
      "description": "Open-source software vs commercial enterprise tiers."
    }
  ],
  "options": [
    {
      "id": "drizzle-kit",
      "name": "Drizzle Kit",
      "summary": "Lightweight, ultra-fast TypeScript-first database migration companion for Drizzle ORM.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "TypeScript Schema -> SQL",
          "note": "Generates clean, human-readable SQL migration files directly from TypeScript schema definitions."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "100% Type Safe",
          "note": "Infers exact TypeScript types from Drizzle schema definitions automatically."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "SQL File Control",
          "note": "Generates standard .sql files that developers can inspect and customize prior to running."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Postgres, MySQL, SQLite",
          "note": "Supports PostgreSQL, MySQL, SQLite, and Cloudflare D1."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Instant CLI",
          "note": "Blazing fast CLI written in TypeScript; lightweight zero-overhead execution."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Apache 2.0",
          "note": "100% open-source."
        }
      },
      "tags": [
        "Drizzle Kit",
        "TypeScript",
        "SQL-First",
        "Lightweight",
        "Open-Source"
      ]
    },
    {
      "id": "prisma-migrations",
      "name": "Prisma Migrations",
      "summary": "Declarative database schema migration tool integrated into the Prisma ORM ecosystem.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Prisma Schema DSL",
          "note": "Define models in schema.prisma DSL; Prisma diffs state to generate migrations."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Prisma Client Codegen",
          "note": "Generates Prisma Client TypeScript types automatically."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "Prisma Migrate Diff",
          "note": "'prisma migrate diff' previews SQL changes; requires careful review for destructive ALTERs."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Postgres, MySQL, SQLite, Mongo",
          "note": "Supports relational databases and MongoDB."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "Rust Engine CLI",
          "note": "Powered by native Rust CLI engine for fast schema diffing."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Apache 2.0",
          "note": "Open-source core."
        }
      },
      "tags": [
        "Prisma",
        "DSL",
        "Declarative",
        "TypeScript",
        "Rust Engine"
      ]
    },
    {
      "id": "flyway",
      "name": "Flyway (Redgate)",
      "summary": "The enterprise standard for version-controlled database migrations using raw SQL scripts.",
      "scores": {
        "c1": {
          "criterionId": "c1",
          "displayValue": "Versioned SQL Scripts",
          "note": "Uses explicit versioned SQL files (e.g. V1__create_tables.sql)."
        },
        "c2": {
          "criterionId": "c2",
          "displayValue": "Language Agnostic",
          "note": "Language-agnostic SQL files; works with any application backend."
        },
        "c3": {
          "criterionId": "c3",
          "displayValue": "High (Manual Control)",
          "note": "Developers write exact non-blocking SQL statements."
        },
        "c4": {
          "criterionId": "c4",
          "displayValue": "Universal DB Support",
          "note": "Supports over 50 relational databases including Oracle, DB2, and Snowflake."
        },
        "c5": {
          "criterionId": "c5",
          "displayValue": "CLI & Java API",
          "note": "Executes via CLI, Maven, Gradle, or Java API."
        },
        "c6": {
          "criterionId": "c6",
          "displayValue": "Open Core / Enterprise",
          "note": "Community edition plus commercial enterprise tiers."
        }
      },
      "tags": [
        "Flyway",
        "SQL Scripts",
        "Universal",
        "Enterprise",
        "Java"
      ]
    }
  ],
  "suggestedNextSteps": [
    "Adopt Drizzle Kit for TypeScript full-stack web apps wanting clean SQL migration files and 100% type safety.",
    "Adopt Prisma Migrations if modeling data schemas in declarative schema.prisma DSL.",
    "Use Flyway or Liquibase for enterprise multi-database environments requiring explicit SQL script control."
  ],
  "map": {
    "nodes": [
      {
        "id": "root",
        "label": "Schema Migration Selection",
        "description": "Choosing the database migration tool."
      },
      {
        "id": "p1",
        "label": "TypeScript Schema & Human-Readable SQL",
        "description": "Need 100% type-safe TypeScript schema definitions generating clean SQL migration files."
      },
      {
        "id": "p2",
        "label": "Declarative Modeling DSL & Auto-Diffing",
        "description": "Need declarative schema DSL diffing automatically via Prisma Engine."
      },
      {
        "id": "p3",
        "label": "Universal Versioned SQL Script Migration",
        "description": "Need language-agnostic versioned SQL files (V1__init.sql) supporting 50+ enterprise databases."
      },
      {
        "id": "e1",
        "label": "Drizzle Kit",
        "description": "TypeScript SQL-first migration tool."
      },
      {
        "id": "e2",
        "label": "Prisma Migrations",
        "description": "Declarative DSL schema migration engine."
      },
      {
        "id": "e3",
        "label": "Flyway",
        "description": "Universal versioned SQL script migration engine."
      }
    ],
    "edges": [
      {
        "source": "root",
        "target": "p1"
      },
      {
        "source": "root",
        "target": "p2"
      },
      {
        "source": "root",
        "target": "p3"
      },
      {
        "source": "p1",
        "target": "e1"
      },
      {
        "source": "p2",
        "target": "e2"
      },
      {
        "source": "p3",
        "target": "e3"
      }
    ]
  }
};
