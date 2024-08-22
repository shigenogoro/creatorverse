import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import MainRouter from './MainRouter.jsx'
import App from './App.jsx'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <App />
      <MainRouter />
    </HashRouter>
  </StrictMode>,
)
