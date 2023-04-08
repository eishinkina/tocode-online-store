import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// store
import Store from './Store'

// uimini connect
// docs: https://uimini.github.io/docs/docs/
import 'uimini'

// app connect
import App from './App'

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Store>
        <App />
      </Store>
    </BrowserRouter>
  </React.StrictMode>
)
