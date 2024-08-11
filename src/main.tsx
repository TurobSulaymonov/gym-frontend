import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app.tsx'
import './styles/index.css'
import { ThemeProvider } from './components/providers/theme-provider.tsx'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './components/providers/auth-provider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeProvider defaultTheme='dark'>
      <AuthProvider>
      <App />
      </AuthProvider>
     </ThemeProvider>
    </BrowserRouter>
     </React.StrictMode>,
)
