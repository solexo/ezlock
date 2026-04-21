import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Force light mode for clean aesthetic
document.documentElement.classList.remove('dark');
document.documentElement.style.colorScheme = 'light';
localStorage.setItem('theme', 'light');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
