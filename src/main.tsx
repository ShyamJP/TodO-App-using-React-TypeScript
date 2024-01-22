import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { TodosProvider } from './store/Todos.tsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* here i wrap APP with context api todoprovider so it provides data to hoole app */}
    <BrowserRouter>
    <TodosProvider> 
      <App/>
    </TodosProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
