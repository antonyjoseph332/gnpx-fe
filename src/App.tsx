import { RouterProvider } from 'react-router-dom'
import { router } from './routers/seoLayout'
import './App.css'
import { ThemeProvider, createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      main: '#2e7d32', // Material UI's green[800]
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
