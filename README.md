# 3D Portfolio - Manpreet Singh Arora

A modern, fully responsive 3D portfolio website built with React.js, TypeScript, and Three.js. This portfolio showcases my work experience, projects, and skills with an interactive 3D interface.


## 🌐 Live Demo

Explore the live demonstration:
[Portfolio Website](https://manpreet-singh-xi.vercel.app/)

## 📝 Description

**3D Portfolio** is a well-designed and fully functional portfolio website that is built with
React.js, TypeScript, and Three.js. It features:

- **Interactive 3D Elements**: 3D computer model and rotating Earth using Three.js
- **Modern UI/UX**: Smooth animations with Framer Motion
- **Responsive Design**: Works seamlessly on all devices
- **Project Showcase**: Display of projects with Uniquest and DockerX
- **Work Experience**: Timeline of professional experience
- **Contact Form**: Integrated EmailJS for client-side email sending

<details><summary><b>Folder Structure</b></summary>

```bash
portfolio/
├── src/
│   ├── App.tsx
│   ├── globals.css
│   ├── main.tsx
│   ├── vite-env.d.ts
│   ├── components/
│   │   ├── atoms/
│   │   │   └── Header.tsx
│   │   ├── canvas/
│   │   │   ├── Ball.tsx
│   │   │   ├── Computers.tsx
│   │   │   ├── Earth.tsx
│   │   │   ├── Stars.tsx
│   │   │   └── index.ts
│   │   ├── layout/
│   │   │   ├── Loader.tsx
│   │   │   └── Navbar.tsx
│   │   ├── sections/
│   │   │   ├── About.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Feedbacks.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Tech.tsx
│   │   │   └── Works.tsx
│   │   └── index.ts
│   ├── constants/
│   │   ├── config.ts
│   │   ├── styles.ts
│   │   └── index.ts
│   ├── hoc/
│   │   ├── SectionWrapper.tsx
│   │   └── index.ts
│   ├── utils/
│   │   └── motion.ts
│   ├── types/
│   │   └── index.d.ts
│   └── assets/
│       ├── company/
│       │   ├── Josys.png
│       │   ├── Kalvium .png
│       │   └── Medable .png
│       ├── tech/
│       │   └── [[...]].{png,svg}
│       ├── Uniquest.png
│       ├── Docker X.png
│       └── index.ts
├── public/
│   ├── desktop_pc/
│   │   ├── textures/
│   │   ├── scene.bin
│   │   └── scene.gltf
│   └── planet/
│       ├── textures/
│       ├── scene.bin
│       └── scene.gltf
├── index.html
├── README.md
├── package.json
├── postcss.config.cjs
├── tailwind.config.cjs
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.js
```

</details>

## 📖 Table of Contents

<details><summary>Table of Contents</summary>

- [Live Demo](#-live-demo)
- [Description](#-description)
- [Technologies Used](#-technologies-used)
- [Get Started](#-get-started)
  - [Prerequisites](#-prerequisites)
  - [Installation and Run Locally](#-installation-and-run-locally)
  - [Scripts](#-scripts)
- [Environment Variables](#-environment-variables)
- [Deployment](#-deployment)
  - [Deploy to production (manual)](#-deploy-to-production-manual)
  - [Deploy on Vercel (recommended)](#-deploy-on-vercel-recommended)
  - [Deploy on Netlify](#-deploy-on-netlify)
- [Customization](#-customization)
- [Acknowledgements](#-acknowledgements)
- [Contact](#-contact)

</details>

## ✨ Technologies Used

<details><summary><b>3D Portfolio</b> is built using the following technologies:</summary>

- [TypeScript](https://www.typescriptlang.org/): TypeScript is a typed superset of JavaScript that
  compiles to plain JavaScript.
- [Vite](https://vitejs.dev/): Vite is a build tool that aims to provide a faster and leaner
  development experience for modern web projects.
- [React.js](https://reactjs.org/): React is a free and open-source front-end JavaScript library for
  building user interfaces or UI components.
- [Three.js](https://threejs.org/): Three.js is a cross-browser JavaScript library and application
  programming interface used to create and display animated 3D computer graphics in a web browser
  using WebGL.
- [Framer Motion](https://www.framer.com/motion/): Framer Motion is a production-ready motion
  library for React.
- [Tailwind CSS](https://tailwindcss.com/): Tailwind CSS is a utility-first CSS framework for
  rapidly building custom user interfaces.
- [ESLint](https://eslint.org/): ESLint is a static code analysis tool for identifying problematic
  patterns found in JavaScript code.
- [Prettier](https://prettier.io/): Prettier is an opinionated code formatter.
- [Vercel](https://vercel.com/): Vercel is a cloud platform for frontend developers, providing the
  frameworks, workflows, and infrastructure to build a faster, more personalized Web.

</details><br/>

[![Technologies Used](https://skillicons.dev/icons?i=ts,vite,react,threejs,tailwind,vercel)](https://skillicons.dev)

## 🧰 Get Started

To get this project up and running in your development environment, follow these step-by-step
instructions.

### 📋 Prerequisites

In order to install and run this project locally, you would need to have the following installed on
your local machine.

- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/get-npm)
- [Git](https://git-scm.com/downloads)

### ⚙️ Installation and Run Locally

**Step 0:**

Note :bangbang: the application uses EmailJS in order to send emails using client-side, therefore,
you need to create EmailJS account [here](https://emailjs.com/) and sets the
`VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and `VITE_EMAILJS_ACCESS_TOKEN` environment
variables in `.env` file.

**Step 1:**

Download or clone this repo by using the link below:

```bash
git clone <your-repo-url>
```

**Step 2:**

Execute the following command in the root directory of the downloaded repo in order to install
dependencies:

```bash
npm install
```

**Step 3:**

Execute the following command in order to run the development server locally:

```bash
npm run dev
```

**Step 4:**

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

### 📜 Scripts

All scripts are defined in the `package.json` file. Here is a list of all scripts:

| Script             | Action                                      |
| :----------------- | :------------------------------------------ |
| `npm install`      | Installs dependencies                       |
| `npm run dev`      | Starts local dev server at `localhost:5173`  |
| `npm run build`    | Build your production site to `./dist/`    |
| `npm run preview`  | Boot up a local static web server          |
| `npm run lint`     | Run ESLint                                  |
| `npm run ts:check` | Perform type-checking                       |

## 🔒 Environment Variables

Environment variables[^3] can be used for configuration. They must be set before running the app.

> [Environment variables](https://en.wikipedia.org/wiki/Environment_variable) are variables that are
> set in the operating system or shell, typically used to configure programs.

This portfolio uses [EmailJS](https://www.emailjs.com/) as an external service for the contact form. You need
to create an account and get the required credentials to run the app.

Create a `.env` file in the root directory of the project and add the following environment
variables:

```env
VITE_EMAILJS_SERVICE_ID=<your-service-id>
VITE_EMAILJS_TEMPLATE_ID=<your-template-id>
VITE_EMAILJS_ACCESS_TOKEN=<your-access-token>
```

## 🚀 Deployment

#### Deploy to production (manual)

You can create an optimized production build with the following command:

```bash
npm run build
```

#### Deploy on Vercel (recommended)

The easiest way to deploy this React app is to use the
[Vercel Platform](https://vercel.com/).

1. Push your code to GitHub
2. Import your repository on Vercel
3. Add your environment variables in Vercel dashboard
4. Deploy!

#### Deploy on Netlify

You can also deploy this React app with [Netlify](https://www.netlify.com/).

1. Build command: `npm run build`
2. Publish directory: `dist`
3. Add environment variables in Netlify dashboard

## 🔧 Customization

To customize this portfolio for your own use:

1. **Update Personal Information**: Edit `src/constants/config.ts` with your details
2. **Update Projects**: Modify the `projects` array in `src/constants/index.ts`
3. **Update Work Experience**: Modify the `experiences` array in `src/constants/index.ts`
4. **Update Testimonials**: Modify the `testimonials` array in `src/constants/index.ts`
5. **Replace Assets**: Replace images in `src/assets/` with your own
6. **Update 3D Models**: Replace 3D models in `public/` if desired

## 💎 Acknowledgements

This project was built using the following amazing technologies and libraries:

- [React.js](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Vite](https://vitejs.dev/) - Build tool
- [Three.js](https://threejs.org/) - 3D graphics
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [React Vertical Timeline Component](https://www.npmjs.com/package/react-vertical-timeline-component) - Timeline UI
- [React Parallax Tilt](https://www.npmjs.com/package/react-parallax-tilt) - 3D tilt effects
- [EmailJS](https://www.emailjs.com/) - Email service

## 📞 Contact

**Manpreet Singh Arora**

- Email: ms2404mk@gmail.com
- LinkedIn: [Connect with me on LinkedIn](https://www.linkedin.com/in/manpreetsingharora)

