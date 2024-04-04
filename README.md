
  <h1 align="center"><img src="./frontend/src/assets/myemojii/SmilingFace.png" alt="Smiling" height=35 weight=35 /> CRUD MERN Stack Application</h1>

   <div align="center">
     Build this project step by step with our detailed tutorial on <a href="#"><b>Speedy.Dev</b></a> YouTube.
    </div>
</div>

## 📋 <a name="table">Table of Contents</a>



   <img src="./frontend/src/assets/myemojii/Exploding.png" alt="Exploding" height=25 weight=25 /> [Introduction](#introduction)

   ⚙ [Step 1 : Setting up the MERN App](#introduction)
   
   🔗 [Step 2 : Connecting the Backend to the Database](#introduction)
   
   📁 [Step 3 : Creating Models](#introduction)
   
   📝 [Step 5 : Creating Schema ](#introduction)
   
   🧩 [Step 6 : Creating CRUD Routers - SAVE, GET, UPDATE, DELETE ](#introduction)

   ⛔ [Step 7 : CORS POLICY ](#introduction)

   💫 [Step 8 : AXIOS FOR CRUD REQUEST METHODS FOR CLIENT [reusable components, beutiful nitification, ...]](#introduction)

   ✅ [Step 9 : READY TO DEPLOY ON VERCEL](#introduction)


## 🚨 Tutorial

This repository contains the code corresponding to an in-depth tutorial available on my YouTube channel, <a href="#" target="_blank"><b>Speedy.Dev</b></a>.

If you prefer visual learning, this is the perfect resource for you. Follow our tutorial to learn how to build projects like these step-by-step in a beginner-friendly manner!



## <a name="introduction">🤖 Introduction</a>

CRUD MERN Stack Application, developed using <a href="#">MongoDB</a>, <a href="#">Express </a>, <a href="#">Node</a> and <a href="#">React.js</a>.
This project will help you how exactly flex your knowledge about MERN even if you are a completly beginner 😀

And for the greatest UX/UI design using <a href="#">Tailwind</a> CSS and <a href="#">FramerMotion</a>.
This is a greate chance for you if you would like to be a least a GOOD developper FULL-STACK ⚡

## <a name="tech-stack">⚙️ Tech Stack</a>

- React.js
- Tailwind CSS
- MongoDB
- Express
- Node
- FramerMotion
- and so more ...

## <a name="easy-step">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/FitiavanaLancelot7/mern-stack-book.git
cd mern-stack
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Running the Client Locally**

```bash
npm run dev
```
**Running the Server Locally**

```bash
npm start
```

Open [https://vercel.com](https://vercel.com) in your browser to view the project on vercel <img src="./frontend/src/assets/myemojii/Beaming.png" alt="Beaming" height=20 weight=20 />

## <a name="snippets">✅ Dependencies</a>

<details>
<summary><code>BACKEND : package.json</code></summary>

```json
{
  "name": "fullserver",
  "version": "1.0.0",
  "description": "For all require by Lancelot",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon index.js"
  },
  "author": "Lancelot",
  "license": "ISC",
  "type":"module",
  "dependencies": {
    "axios": "^1.6.8",
    "body-parser": "^1.20.2",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "ejs": "^3.1.9",
    "express": "^4.18.2",
    "jsonwebtoken": "^9.0.2",
    "mongodb": "^6.3.0",
    "mongoose": "^8.1.2",
    "morgan": "^1.10.0",
    "mysql": "^2.18.1",
    "node-fetch": "^3.3.2",
    "nodemon": "^3.0.1",
    "xml2js": "^0.6.2"
  }
}
```

</details>
<details>
<summary><code>FRONTEND : package.json</code></summary>

```json
{
  "name": "v4",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "@gsap/react": "^2.1.0",
    "@tailwindcss/vite": "^4.0.0-alpha.7",
    "axios": "^1.6.7",
    "framer-motion": "^11.0.8",
    "gsap": "^3.12.5",
    "notistack": "^3.0.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^5.0.1",
    "react-just-parallax": "^3.1.16",
    "react-router-dom": "^6.22.1",
    "scroll-lock": "^2.1.5",
    "tailwindcss": "^4.0.0-alpha.7"
  },
  "devDependencies": {
    "@types/react": "^18.2.56",
    "@types/react-dom": "^18.2.19",
    "@vitejs/plugin-react": "^4.2.1",
    "eslint": "^8.56.0",
    "eslint-plugin-react": "^7.33.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.5",
    "vite": "^5.1.4"
  }
}

```

</details>

<details>
<summary><code>index.css</code></summary>

```css
@import "tailwindcss";

@font-face {
  font-family: "Pixel";
  src: url("../src/assets/fonts/MinecraftTen-VGORe.ttf");
}
:root{
  background: #020617;
}
body{
  overflow-x: hidden;
}
```

</details>

