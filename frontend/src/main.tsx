import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App.tsx'

// Ensure a default theme on initial load
const rootEl = document.documentElement
const saved = localStorage.getItem('theme') as 'aurora' | 'solar' | null
const initialTheme = saved || 'aurora'
rootEl.setAttribute('data-theme', initialTheme)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
