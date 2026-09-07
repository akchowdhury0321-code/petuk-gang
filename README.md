# 🍛 Petuk Gang — Traditional Bangladeshi Cuisine

> *"Food just not provides energy, it also provides senergy."*

An authentic, modern web application and AI assistant for **Petuk Gang**, a traditional Bangladeshi restaurant located in Patharghata, Chattogram.

---

## ✨ Features

- **🍽️ Authentic Menu with 9 Verified Categories**: Bhorta (৳60), Rice (৳30), Fish (৳100), Beef (৳180), Chicken (৳150), Dal (FREE), Vegetable Dishes (৳100), Snacks (৳150), Desserts (৳180).
- **🛒 Interactive Cart & Ordering**: Real-time item quantity counters, animated slide-out Cart Drawer, WhatsApp itemized checkout, and Foodpanda & Pathao delivery links.
- **🤖 Petuk AI (Powered by Google Gemini)**: Server-side AI food assistant providing accurate mathematical bill calculations, budget combo planning (e.g. ৳300 feast combos), dish recommendations, and location directions.
- **🌐 Bilingual Support**: Seamless one-click English and Bengali (বাংলা) language toggling.
- **📍 Location & Directions**: Built-in Google Maps navigation to Patharghata, Chattogram.
- **📱 Responsive & Fast**: Fully optimized mobile, tablet, and desktop layouts built with React, Tailwind CSS, and Motion.

---

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite, Tailwind CSS v4, Lucide Icons, Motion
- **Backend / Server**: Express 4, Node.js (bundled with esbuild)
- **AI Integration**: Google GenAI SDK (`@google/genai`) with Gemini 3 series models
- **CI / CD**: GitHub Actions workflow (`.github/workflows/ci.yml`)

---

## 🚀 Getting Started Locally

### 1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/petuk-gang.git
cd petuk-gang
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
Create a `.env` file in the root directory by copying `.env.example`:
```bash
cp .env.example .env
```
Add your Gemini API Key in `.env`:
```env
GEMINI_API_KEY=your_gemini_api_key_here
```
> Get a free API key at [Google AI Studio](https://aistudio.google.com/).

### 4. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Pushing to GitHub

### Option A: From Google AI Studio (Easiest)
1. In Google AI Studio, click the **Settings** gear icon in the top right.
2. Select **Export to GitHub**.
3. Authorize your GitHub account and choose your repository name.

### Option B: Using Git Command Line
Run the following commands in the project directory:

```bash
# Initialize git and switch to main branch
git init
git branch -M main

# Add and commit all files
git add .
git commit -m "feat: initial commit of Petuk Gang web app"

# Link to your GitHub repository (create an empty repo on github.com first)
git remote add origin https://github.com/YOUR_USERNAME/petuk-gang.git

# Push code to GitHub
git push -u origin main
```

---

## 🚢 Production Build & Deployment

### Build locally
```bash
npm run build
npm start
```

### Deploying with Docker
A production-ready `Dockerfile` is included. Build and run the container:
```bash
docker build -t petuk-gang .
docker run -p 3000:3000 -e GEMINI_API_KEY="your_api_key" petuk-gang
```

### Deploy to Cloud Platforms (Render / Railway / Cloud Run)
1. Push your code to GitHub.
2. Connect your GitHub repository to your cloud provider (e.g. [Render](https://render.com), [Railway](https://railway.app), or [Google Cloud Run](https://cloud.google.com/run)).
3. Set the build command: `npm run build`
4. Set the start command: `npm start`
5. Add the environment variable: `GEMINI_API_KEY` with your secret key.
