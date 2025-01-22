import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.tsx'

//import radix ui 
import "@radix-ui/themes/styles.css";
import "@radix-ui/themes/layout.css";

// Import radix Theme
import { Theme } from "@radix-ui/themes";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme accentColor="pink" radius="large" scaling="105%">
      <App />
    </Theme>


  </StrictMode>,
);