import { createTheme, ThemeProvider } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import "aos/dist/aos.css"

const theme = createTheme({
  typography: {
    fontFamily: "Exo 2, Inter, system-ui, Avenir, Helvetica, Arial, sans-serif"
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
)
