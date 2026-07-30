import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import './assets/index.css'
import App from './App.jsx'
// import UseEffectDemo from './assets/UseEffectDemo.jsx'
import Q1 from './assets/Q1.jsx'
import Q2 from './assets/Q2.jsx'

import { BrowserRouter } from 'react-router-dom'




createRoot(document.getElementById('root')).render(
    <BrowserRouter> 
     <App />
     </BrowserRouter>

  
)
