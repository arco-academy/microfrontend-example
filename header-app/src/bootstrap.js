import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

import './index.css'

const element = document.getElementById('root')

createRoot(element).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
