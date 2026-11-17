# HMAC Security Assessment Quiz Website

A professional, modern, responsive interactive web application built with **React**, **Vite**, **HTML5**, **CSS3**, and **JavaScript** to test and reinforce knowledge of **Hash-based Message Authentication Codes (HMAC)** based on **RFC 2104**.

---

## 🛡️ Features

- **Modern Cybersecurity Theme**: Sleek navy blue (`#070d1e`), deep slate cards, glowing teal accents (`#14b8a6`), and high-contrast typography.
- **Single-Question View**: Displays one question at a time with smooth transitions and progress indicators.
- **Multiple Choice Options**: 4 clean options (A, B, C, D) per question with single-select mechanics.
- **Guarded Submission**: Answer submission is locked until an option is selected; prevents accidental double submissions.
- **Instant Visual Feedback**:
  - Highlights correct answer in **GREEN** (`#10b981`)
  - Highlights incorrect user selections in **RED** (`#f43f5e`)
  - Status banner clearly stating **CORRECT** or **INCORRECT**
  - Side-by-side comparison of **Your Answer** vs **Correct Answer**
  - Deep-dive **Cryptographic Explanation** explaining *why* the answer is correct
- **Paced Navigation**: Explanations remain visible until the user explicitly clicks "Next Question" (no auto-advancement).
- **Live Progress Tracking**:
  - Dynamic progress bar
  - Question counter (`Question X of 10`)
  - Visual status dots tracking answered questions
- **Comprehensive Scoreboard**:
  - Final score and percentage calculation
  - Correct and incorrect answer metrics
  - Cryptographic proficiency tier badges
- **Answer Review Section**:
  - Filterable by *All*, *Correct*, or *Incorrect*
  - Shows all 10 questions, selected answers, correct answers, and full explanations
- **Restart Quiz**: One-click reset to re-attempt the quiz with freshly initialized states.
- **Render Ready**: Includes `render.yaml` and `public/_redirects` for single-page app (SPA) fallback rewrites.

---

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Modern CSS3 with CSS variables, Flexbox, CSS Grid, and custom SVG icons
- **Deployment Platform**: Render (Static Site)

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (v18 or later recommended)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <your-repository-url>
cd <repository-folder>

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be running locally at `http://localhost:3000` (or `http://localhost:5173`).

### Production Build
```bash
# Build production bundle
npm run build

# Preview build locally
npm run preview
```

The compiled output will be generated inside the `dist` directory.

---

## ☁️ Deployment on Render (Static Site)

### Option 1: Using Render Blueprint (`render.yaml`)
1. Push this repository to your GitHub account.
2. Log in to [Render Dashboard](https://dashboard.render.com).
3. Click **New +** > **Blueprint**.
4. Connect your GitHub repository.
5. Render will automatically detect `render.yaml` and configure:
   - **Environment**: Static Site
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
   - **Route Rewrite**: `/*` to `/index.html` (200)
6. Click **Apply**.

### Option 2: Manual Setup on Render
1. Go to the [Render Dashboard](https://dashboard.render.com).
2. Click **New +** and select **Static Site**.
3. Connect your GitHub repository.
4. Fill in the configuration:
   - **Name**: `hmac-quiz-website`
   - **Branch**: `main`
   - **Root Directory**: leave blank (or project root)
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
5. Under **Redirects / Rewrites**:
   - **Type**: `Rewrite`
   - **Source**: `/*`
   - **Destination**: `/index.html`
   - *(Note: `public/_redirects` is also included automatically)*
6. Click **Create Static Site**.
7. Once deployed, Render will provide your live URL (e.g., `https://hmac-quiz-website.onrender.com`).

---

## 📚 Curriculum Covered

1. Main purpose of Message Authentication Codes (MAC)
2. Symmetric key sharing principles in HMAC
3. Cryptographic XOR operator ($\oplus$)
4. Concatenation operator ($||$)
5. Key normalization to hash block size
6. Integrity tampering detection
7. Inner pad (`ipad`) and outer pad (`opad`) separation
8. Non-repudiation vs symmetric authentication
9. Constant-time comparisons to mitigate timing side channels
10. Industry API request and webhook signing
