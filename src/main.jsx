import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './assets/index.css'
// import App from './App.jsx'
import UseEffectDemo from './assets/UseEffectDemo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UseEffectDemo />
    
  </StrictMode>
)

