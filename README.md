# Three.js R3F Animation Project

This project demonstrates how to load a 3D character model (`Hussainberg.glb`), display it in a React Three Fiber scene, and control its animations using a custom React Context and a Tailwind CSS interface.

## 🚀 Demo

[View Live Demo](https://abda-s.github.io/threejs-intro/)

## ✨ Features

- **3D Scene**: Built with `three.js` and `@react-three/fiber`.
- **Model Loading**: Uses `useGLTF` from `@react-three/drei` to load optimized GLB models.
- **Animation System**: Custom `CharacterAnimationsContext` to manage animation states (play, crossfade, loop).
- **Responsive UI**: Tailwind CSS interface for switching animations, optimized for both desktop and mobile.
- **Shadows**: Soft shadows using `DirectionalLight` and `shadow-mapSize` configuration.
- **Production Ready**: Configured for GitHub Pages deployment with correct base path handling.

## 🛠️ Tech Stack

- **React** (v18+)
- **TypeScript**
- **Vite**
- **Three.js**
- **React Three Fiber (R3F)**
- **Drei** (Helper library for R3F)
- **Tailwind CSS**

## 📦 Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/abda-s/threejs-intro.git
    cd threejs-intro
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Start the development server:
    ```bash
    npm run dev
    ```

## 🏗️ Build & Deploy

To build for production:

```bash
npm run build
```

This project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys the `dist` folder to GitHub Pages on push to the `main` branch.

## 📂 Project Structure

- `src/components/Experience.tsx`: The main 3D scene setup (lights, floor, camera controls).
- `src/components/Hussainberg.tsx`: The character model component with animation logic.
- `src/components/Interface.tsx`: The UI overlay for animation controls.
- `src/contexts/CharacterAnimationsContext.tsx`: Context for managing animation state.
- `public/models/`: Contains the 3D model files.

## 📝 Credits

Based on the [React Three Fiber Animation Tutorial](https://github.com/wass08/threejs-r3f-tutorial-animations) by Wawa Sensei.
Adapted to TypeScript and Tailwind CSS by Abdas.
