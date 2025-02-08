import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Appwrapper from './components/Appwrapper'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Appwrapper />
  </StrictMode>,
)
