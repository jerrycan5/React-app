import React, { useEffect } from 'react'; // ✅ Required for JSX
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// ✅ Import AOS library
import AOS from 'aos';
import 'aos/dist/aos.css';

// ✅ Initialize AOS here
function RootApp() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // how long the animation takes
      once: true,     // animate only once when scrolling down
      offset: 100,    // how far the element is from the viewport before triggering
      easing: 'ease-in-out', // default easing
    });
  }, []);

  return (
    <StrictMode>
      <App />
    </StrictMode>
  );
}

createRoot(document.getElementById('root')).render(
  <RootApp />
);
