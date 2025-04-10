import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { NewApp } from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NewApp />

  </StrictMode>,
)
