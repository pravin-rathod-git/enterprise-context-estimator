# Enterprise Context & Cost Estimator

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

A high-performance, strictly client-side developer utility designed to validate Large Language Model (LLM) deployments. This tool allows engineers to analyze token limits, forecast API costs, visualize RAG (Retrieval-Augmented Generation) document chunking, and aggregate multi-agent workflow pipelines in real-time.

*Built as a functional trial task for Digital Heroes.*

---

## 🚀 Live Demo
**[View Live Application on Vercel]** *(Insert your Vercel URL here)*

## 🧠 Core Utilities

### 1. System Prompt Payload
A dedicated input engine for pasting dense corporate documents, JSON arrays, or RAG contexts. Acts as the single source of truth driving the real-time calculations across the dashboard.

### 2. Token & Cost Engine
Instantaneously calculates character counts, word counts, and estimated tokens using the standard industry heuristic (1 token ≈ 4 characters). Provides real-time fractional cost breakdowns for leading enterprise models:
* GPT-4o
* Claude 3.5 Sonnet
* Gemini 1.5 Pro

### 3. RAG Chunking Visualizer
Designed for preparing data for Vector Databases. Developers can set custom `Chunk Size` and `Overlap Size` parameters to visually determine how massive payloads will be split for embeddings, ensuring optimized context windows.

### 4. Multi-Agent Cost Aggregator
A dynamic workflow builder for complex AI systems. Allows developers to stack multiple LLM agents (e.g., Extractor Agents, Reviewer Agents), assign different models to each step, and aggregate the total financial cost of a single, multi-step pipeline run.

---

## 🛠️ Technical Stack & Architecture

This application was engineered with strict operational constraints: **Zero backend dependencies, 100% client-side execution, and zero-cost deployment.**

* **Frontend Framework:** React.js
* **Build Tool:** Vite (for rapid HMR and optimized production bundling)
* **Styling:** Tailwind CSS (Custom dark-mode UI with glassmorphism and ambient glow effects)
* **State Management:** React Hooks (`useState`) with modular, prop-drilled components.
* **Deployment:** Vercel (Hobby Tier)

---

## 💻 Local Installation & Setup

To run this project locally, ensure you have Node.js installed, then execute the following commands:

```bash
# Clone the repository
git clone [https://github.com/pravin-rathod-git/enterprise-context-estimator.git](https://github.com/pravin-rathod-git/enterprise-context-estimator.git)

# Navigate into the directory
cd enterprise-context-estimator

# Install dependencies
npm install

# Start the local development server
npm run dev
