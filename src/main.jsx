import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { LoginProvider } from './Components/context/loginContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <LoginProvider>
      <App/>
    </LoginProvider>  
  </BrowserRouter>,
)
