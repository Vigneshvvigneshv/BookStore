import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from 'styled-components'
import { lightTheme,darkTheme } from './styles/theme.jsx'
import { BrowserRouter } from 'react-router-dom'

import store from './store/store.js'
import AppProvider from './providers/AppProvider.jsx'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
    <Provider store={store}>
     <AppProvider> 
        <App></App>
      </AppProvider>
       </Provider>
   </BrowserRouter>
  </StrictMode>,
)
