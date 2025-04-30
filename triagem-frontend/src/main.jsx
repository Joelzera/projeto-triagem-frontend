import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import AppSearch from './AppSearch.jsx'
import AppDirect from './AppDirect.jsx';
import AppIssue from './AppIssue.jsx';

createRoot(document.getElementById('root')).render(
  <MemoryRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/pesquisar" element={<AppSearch />} />
      <Route path='/direcionar' element={<AppDirect />} />
      <Route path='/emitir' element={<AppIssue />} />
    </Routes>
  </MemoryRouter>
)
