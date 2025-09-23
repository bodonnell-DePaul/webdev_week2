import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import MultiApp from './components/multiComponentPage.tsx'

createRoot(document.getElementById('root')!).render(
    <>
    <MultiApp></MultiApp>
    </>
)
