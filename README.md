# 🎬 CoderFlix

A high-performance, dark-themed video streaming platform built to mirror the seamless interface of modern streaming apps. 

## 📌 Table of Contents
* [Features](#-features)
* [Tech Stack](#-tech-stack)
* [Getting Started](#-getting-started)
* [Project Structure](#-project-structure)
* [Configuration](#-configuration)

## ✨ Features
**Dynamic Routing:** Built utilizing highly optimized dynamic parameters for fast video rendering.
**Type Safety:** Full integration with TypeScript to minimize runtime exceptions.
**Component-Driven Design:** Highly reusable, modular UI components utilizing Tailwind CSS.



## 🛠️ Tech Stack
**Frontend:** React, Next.js (App Router), Tailwind CSS
**Backend & DB:** Node.js, MongoDB (or Sanity CMS)
**Package Manager:** pnpm / npm


## 🚀 Getting Started

### Prerequisites
* Node.js v18.0.0 or higher
* npm or pnpm installed globally

### Installation & Local Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/yourusername/coderflix.git](https://github.com/yourusername/coderflix.git)
   cd coderflix


### 7. Project Folder Structure
Providing a visual folder layout tree helps other contributors instantly find where global components, local assets, styles, and configurations are hidden.
```markdown
## 📂 Project Structure

```text
├── app/                  # Routing, layouts, and pages
│   ├── video/[title]/    # Dynamic video detail route
│   └── globals.css       # Global design specifications
├── components/           # Reusable core UI components
│   ├── VideoCard.tsx     # Dynamic media layout
│   └── Header.tsx        # Application global header
├── public/               # Local static assets and icons
└── videos.json           # Mock local database storage



### 6. Configuration (Environment Variables)
Never commit your actual private keys or secrets to GitHub, but do provide an explicit blueprint showing exactly what environment variables are expected by the codebase.
```markdown
## ⚙️ Configuration

Your `.env.local` file should look like this:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
SANITY_API_TOKEN=your_secret_token
