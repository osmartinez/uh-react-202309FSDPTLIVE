import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { SessionProvider } from './contexts/SessionContext.jsx'
import { CookiesProvider } from 'react-cookie';
import { CookieAcceptProvider } from './contexts/CookieAcceptContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CookiesProvider defaultSetOptions={{ path: '/' }}>
      <CookieAcceptProvider>
        <SessionProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </SessionProvider>
      </CookieAcceptProvider>
    </CookiesProvider>

  </React.StrictMode>,
)
