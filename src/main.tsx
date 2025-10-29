import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Remove Bolt watermark
const removeBoltBadge = () => {
  // Remove any div with the extreme z-index (Bolt watermark)
  const watermarks = document.querySelectorAll('div[style*="z-index: 2147483647"]');
  watermarks.forEach(el => el.remove());
  
  // Also check for any links to bolt.new
  const boltLinks = document.querySelectorAll('a[href*="bolt.new"]');
  boltLinks.forEach(link => {
    const parent = link.closest('div[style*="position: fixed"]');
    if (parent) parent.remove();
  });
};

// Run immediately
removeBoltBadge();

// Watch for dynamically added watermarks
const observer = new MutationObserver(() => {
  removeBoltBadge();
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});

// Also run after a short delay to catch late-loading badges
setTimeout(removeBoltBadge, 100);
setTimeout(removeBoltBadge, 500);
setTimeout(removeBoltBadge, 1000);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
