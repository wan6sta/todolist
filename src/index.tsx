import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from 'app/App'
import { StoreProvider } from 'app/providers/StoreProvider'
import 'app/styles/index.css'
import 'react-toastify/dist/ReactToastify.min.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StoreProvider>
    <App />
  </StoreProvider>
)
