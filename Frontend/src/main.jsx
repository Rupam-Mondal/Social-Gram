import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import App from './App.jsx'
import './index.css'
const queryclient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryclient}>
    <StrictMode>
      <App />
    </StrictMode>,
  </QueryClientProvider>
)
