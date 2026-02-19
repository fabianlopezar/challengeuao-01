# 📞 Challenge UAO 01 - App de Contactos PWA

Aplicación web progresiva (PWA) para gestión de contactos, desarrollada con React + TypeScript + Vite.

## 🌐 Enlace en vivo

**[https://tiny-moonbeam-275b37.netlify.app/](https://curious-gingersnap-b13b6b.netlify.app/)**

## 📲 Cómo instalar la aplicación en el celular

Esta app es una **PWA (Progressive Web App)** y puede instalarse en la pantalla de inicio de tu móvil para usarla como una app nativa.

### En Android (Chrome)
1. Abre el enlace de Netlify en Chrome: [https://tiny-moonbeam-275b37.netlify.app/]([https://tiny-moonbeam-275b37.netlify.app/](https://curious-gingersnap-b13b6b.netlify.app/))
2. Toca el menú de tres puntos (⋮) en la esquina superior derecha
3. Selecciona **"Instalar app"** o **"Agregar a la pantalla de inicio"**
4. Confirma con **"Instalar"**
5. Verás el ícono de la app en tu pantalla de inicio

### En iPhone/iPad (Safari)
1. Abre el enlace en Safari: [https://tiny-moonbeam-275b37.netlify.app/](https://tiny-moonbeam-275b37.netlify.app/)
2. Toca el botón **Compartir** (cuadrado con flecha hacia arriba)
3. Desplázate y selecciona **"Agregar a pantalla de inicio"**
4. Personaliza el nombre si lo deseas y toca **"Agregar"**
5. El ícono aparecerá en tu pantalla de inicio

---

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
