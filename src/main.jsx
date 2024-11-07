import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux';
import './index.css'
import { ThemeProvider } from '@material-tailwind/react'
import { store } from './store.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <ThemeProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </StrictMode>,
)
