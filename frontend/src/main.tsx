import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App.tsx'
import { store } from './app/store/store.ts'
import { Provider } from 'react-redux'
import { GlobalStyles } from './app/styles/GlobalStyles.ts'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <StrictMode>
          <GlobalStyles />
      <App />
    </StrictMode>,
  </Provider>
 
)
