import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { AuthProvider } from './context/AuthContext'
import { MoviesProvider } from './context/MoviesContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <MoviesProvider>
        <App />
      </MoviesProvider>
    </AuthProvider>
  </React.StrictMode>,
)
