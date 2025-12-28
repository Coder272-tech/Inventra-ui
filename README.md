# Inventra UI

**Inventra** is a modern inventory management system designed for small to mid-sized businesses with real operational pain around stockouts, waste, shrinkage, and compliance.

This repository contains the **frontend UI** for Inventra, built with **SvelteKit**.

---

## 🧠 Project Overview

Inventra targets businesses across multiple tiers, including:

- Independent retail stores (e.g. smoke/vape shops)
- Restaurants and cafés
- Auto repair shops
- Dental and medical practices
- Trade contractors (HVAC, electrical, plumbing)

The UI is designed to be:
- Role-aware (manager, staff, owner, auditor)
- Workflow-driven (receive, count, reorder, comply)
- Fast and uncluttered
- Extensible across verticals

---

## 🧱 Tech Stack

- **Framework:** SvelteKit
- **Language:** TypeScript
- **Styling:** Plain CSS (intentionally simple; Tailwind may be added later)
- **API:** Rust (Axum) backend
- **Auth:** Cookie-based session auth (HTTP-only cookies)
- **Database:** PostgreSQL (backend responsibility)

---

## 📁 Project Structure (High Level)

Inventra-ui/  
├── src/  
│ ├── routes/  
│ │ ├── login/ \# /login  
│ │ ├── dashboard/ \# /dashboard (role-aware landing page)  
│ │ └── ...  
│ ├── lib/  
│ │ ├── components/ \# Reusable UI components  
│ │ ├── api/ \# API helpers  
│ │ └── stores/ \# Client-side state  
│ └── app.html  
├── static/  
├── package.json  
├── svelte.config.js  
└── README.md


---

## 🔐 Authentication Model

- Users authenticate via `/login`
- Backend sets an **HTTP-only session cookie**
- UI fetches `/api/me` to determine:
  - Authentication state
  - User role
  - Business type
- Unauthorized users are redirected to `/login`

No tokens are stored in localStorage.

---

## 🧭 Core Routes

| Route | Description |
|-----|------------|
| `/login` | User login form |
| `/dashboard` | Role-specific landing page |
| `/inventory` | Inventory browsing & actions (planned) |
| `/receiving` | Receive shipments (planned) |
| `/reports` | Reports & compliance exports (planned) |

---

## 👥 User Roles (UI-Aware)

The UI adapts based on role, including:

- **Store Manager**
- **Office Manager**
- **Staff**
- **Owner**
- **Auditor / Accountant**

Each role sees:
- Different dashboard cards
- Different actions
- Different validation strictness

---

## 🎯 Design Philosophy

- **Action-first dashboards**  
  Show what needs attention *now*, not charts for their own sake.

- **Minimal configuration**  
  Defaults over knobs.

- **Audit-friendly**  
  No silent deletes, no hidden corrections.

- **Vertical extensibility**  
  Same core UI patterns, different rules per business type.

---

## 🚀 Getting Started

```bash
npm install
npm run dev

The app will start at:

http://localhost:5173

Note: The UI assumes the backend API is available at /api/*.

---

## **🧪 Development Notes**

* UI currently mocks most dashboard data

* Backend integration is expected via:

  * `/api/login`

  * `/api/me`

  * Inventory and reporting endpoints

* Feature flags will be used to enable vertical-specific functionality

---

## **📌 Roadmap (UI)**

* Role-based navigation

* Inventory list & search

* Receiving workflows

* Reorder flows

* Expiration & compliance views

* Audit history views

* Responsive/mobile optimizations

---

## **📄 License**

TBD

---

## **✍️ Author**

Inventra  
 Inventory that actually works in the real world.

