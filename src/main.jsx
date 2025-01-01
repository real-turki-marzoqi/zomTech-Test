import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//* bootStarp
import "bootstrap/dist/css/bootstrap.min.css";

//* Router
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
