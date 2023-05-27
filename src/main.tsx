import React from 'react'
import ReactDOM from 'react-dom/client'
//DOM Document Object Model -> representação do HTML através do JavaScript
import { App } from './App.js'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
