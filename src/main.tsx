import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Force dark mode for premium aesthetic
document.documentElement.classList.add('dark');
document.documentElement.style.colorScheme = 'dark';
localStorage.setItem('theme', 'dark');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
