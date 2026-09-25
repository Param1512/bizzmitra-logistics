# 🚀 Apex Brands — Amazon FBA Optimizer
> Enterprise Solution Web Application synthesized and deployed autonomously by **[BizzMitra AI Engine](https://bizzmitra.ai)**.

[![Autonomous Engine](https://img.shields.io/badge/Autonomous_Engine-BizzMitra_AI-6366f1.svg?style=flat-square&logo=sparkles)](https://bizzmitra.ai)
[![Frontend](https://img.shields.io/badge/Frontend-React_18_%7C_Vite_5-38bdf8.svg?style=flat-square&logo=react)](https://vitejs.dev)
[![Database](https://img.shields.io/badge/Database-Supabase_PostgreSQL_16-3ecf8e.svg?style=flat-square&logo=supabase)](https://supabase.com)
[![Cloud](https://img.shields.io/badge/Cloud-Vercel_Edge-000000.svg?style=flat-square&logo=vercel)](https://vercel.com)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript_5-3178c6.svg?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind_CSS_3-38bdf8.svg?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)

---

## 📌 Executive Business Overview & Intake Metadata

| Metadata Dimension | Specification |
|:---|:---|
| **Enterprise / Business Name** | **Apex Brands — Amazon FBA Optimizer** |
| **Industry / Sector** | **Fleet Dispatch & Telematics Control** (Logistics & Supply Chain) |
| **Domain Architecture Model** | `logistics` |
| **Operating Intake Mode** | `consult` |
| **Ingestion Methodology** | `prompt` |
| **Primary Working Language** | `en` |
| **Compilation Timestamp** | `September 25, 2026 at 7:42 PM` |
| **Autonomous Compiler** | BizzMitra Autonomous Engine v2.4 |

---

## 🎯 Full Business Problem Statement & AI Discovery Reference

> "We are an Amazon FBA seller managing 450+ ASINs across US and India marketplaces. We are suffering frequent stockouts on top-selling items during seasonal spikes, which crashes our Amazon Best Seller Rank (BSR) and costs us ~$45k/month in lost revenue. Simultaneously, our slow-moving SKUs are hitting 180+ day thresholds, costing $8,000/month in Amazon aged inventory surcharges. Our team is manually reconciling Amazon Seller Central Inventory CSVs in Excel with 3-week lead-time suppliers, leading to inaccurate reorder points and zero predictive visibility."

### 🔍 In-Depth Problem Context & Operational Friction
- **Identified Core Bottleneck:** We are an Amazon FBA seller managing 450+ ASINs across US and India marketplaces. We are suffering frequent stockouts on top-selling items during seasonal spikes, which crashes our Amazon Best Seller Rank (BSR) and costs us ~$45k/month in lost revenue. Simultaneously, our slow-moving SKUs are hitting 180+ day thresholds, costing $8,000/month in Amazon aged inventory surcharges. Our team is manually reconciling Amazon Seller Central Inventory CSVs in Excel with 3-week lead-time suppliers, leading to inaccurate reorder points and zero predictive visibility.
- **Target Domain Architecture:** Fleet Dispatch & Telematics Control
- **Legacy Systems Replaced:** Manual spreadsheets, uncoordinated communication channels, disparate email approvals




---

## 🏆 Strategic Objectives & Expected Business Outcomes


- **Operational Automation:** Eliminate manual data entry, human error, and tracking delays across the operational lifecycle.
- **Real-Time Data Sovereignty:** Direct bidirectional synchronization with dedicated PostgreSQL cloud database.
- **SLA Acceleration:** Provide instant status visibility and priority queues to reduce turnaround cycle time.
- **Enterprise Scalability:** Modular fullstack React & TypeScript architecture ready for edge scale.


---

## 🛡️ Operational Constraints & Governance Guardrails


- **Data Privacy & Security:** Row-Level Security (RLS) policies enforced at database level with anonymous & authenticated roles.
- **High Availability & Low Latency:** Global CDN edge distribution via Vercel Edge Serverless Network.
- **Zero Disruption Migration:** Seamless coexistence with existing team workflows with CSV export and live mobile companion access.


---

## ⚙️ Domain System Modules & Cloud Workers

### 🔹 Fleet Command Center
- **Function:** Real-time fleet telematics, corridor velocity, and active manifests
- **Engine Status:** Active Autonomous Cloud Worker

### 🔹 Waybill & Shipment Registry
- **Function:** Live GPS positions, transit waybills, and electronic POD audit trail
- **Engine Status:** Active Autonomous Cloud Worker

### 🔹 Logistics Analytics
- **Function:** Turnaround benchmarks, fuel consumption, and on-time performance
- **Engine Status:** Active Autonomous Cloud Worker


---

## 🏗️ Technical Architecture & Cloud Stack

```mermaid
flowchart TD
    Client["Client Devices (Desktop / Tablet / Mobile)"] --> CDN["Vercel Edge Network (CDN & HTTPS)"]
    CDN --> ReactApp["React 18 Single Page Application"]
    ReactApp --> DBClient["Supabase JS Client SDK"]
    DBClient --> Supabase["Supabase Cloud (PostgreSQL 16 Engine)"]
    Supabase --> Tables[("Relational Table: public.logistics_records")]
```

### Technology Matrix
- **Framework & Bundler:** React 18.3, Vite 5.4, TypeScript 5.5
- **Design System & Styling:** Tailwind CSS 3.4 with custom glassmorphic tokens & dark-mode styling
- **Iconography:** Lucide React (`lucide-react`)
- **Database Engine:** Supabase PostgreSQL 16 (Auto-connected cloud instance)
- **Deployment Platform:** Vercel Edge Serverless Network
- **Mobile Access:** Responsive viewport with Instant Live QR Code sync

---

## 📊 Database Schema (`public.logistics_records` table)

| Column Name | Data Type | Constraint | Semantic Domain Mapping |
|:---|:---|:---|:---|
| `id` | `TEXT` | PRIMARY KEY | Unique Identifier (Waybill Tracking ID) |
| `title` | `TEXT` | NOT NULL | Entity Name / Description |
| `col1_data` | `TEXT` | NOT NULL | **Origin → Destination Hub** |
| `col2_data` | `TEXT` | NOT NULL | **Fleet Vehicle & Speed** |
| `status` | `TEXT` | NOT NULL | **Transit Status** (`Manifest Created / In Transit / Out for Delivery / Delivered & POD Verified`) |
| `assignee` | `TEXT` | NOT NULL | **Assigned Driver** |
| `metric_value` | `TEXT` | NOT NULL | **ETA Turnaround** |
| `created_at` | `TIMESTAMPTZ` | DEFAULT NOW() | Timestamp of initial record creation |

---

## 💻 Local Development Setup

To run this application locally on your machine:

### 1. Prerequisites
- **Node.js** 18.0.0 or higher
- **npm** 9.0.0 or higher (or **pnpm** / **yarn**)

### 2. Installation
```bash
# Clone or unpack the generated project
cd bizzmitra-logistics

# Install project dependencies
npm install
```

### 3. Environment Variables
Create a `.env` file in the root directory (already pre-configured in this repository):
```env
VITE_SUPABASE_URL=https://pyqbmgkusnvyyjdsyqyj.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB5cWJtZ2t1c252eXlqZHN5cXlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMwMzQ1MDMsImV4cCI6MjA1ODYxMDUwM30.7QW1j14hYkL6_P4q4m8yG9x4i5zV9p3m1e7r6t5y4u3
```

### 4. Start Development Server
```bash
npm run dev
```
The application will launch at `http://localhost:5173`.

### 5. Production Build
```bash
npm run build
npm run preview
```

---

## 🚀 Cloud Deployment Options

This project is zero-config ready for immediate cloud deployment:

- **1-Click Managed Deployment:** Deploy directly via BizzMitra AI with automated Vercel edge deployment.
- **BYOC (Bring Your Own Cloud):** Deploy directly to your personal GitHub repository, Vercel account, and personal Supabase database using the BizzMitra Cloud Provider Settings.
- **Manual Vercel CLI:**
  ```bash
  npx vercel --prod
  ```

---

## 🔒 Enterprise Governance & Security
- **Row-Level Security (RLS):** Fully active on PostgreSQL tables.
- **Zero Plaintext Secrets:** Client access restricted through public anon key scoped policies.
- **Engine Audit Signature:** Generated by **BizzMitra-AI Autonomous Solution Architecture Studio**.
