import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.tsx';
import { initAnalytics } from './lib/analytics';
import './index.css';

initAnalytics();

const root = document.getElementById('root')!;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);
// Prerendered routes ship real HTML in #root: hydrate it. Unknown paths get the bare 404.html shell (vercel.json rewrite): render.
if (root.hasChildNodes()) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
