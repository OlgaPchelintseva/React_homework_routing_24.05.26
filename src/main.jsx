import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import ShopLayout from './Layout/ShopLayout';
import Showroom from './Pages/Showroom';
import NotFound from './Pages/NotFound';
import Services from './Pages/Services';
import About from './Pages/About';
import ArticlePage from './Pages/ArticlePage';

createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path='/' element={<Navigate to='/shop' replace />} />
      <Route path='/' element={<ShopLayout />}>
        <Route path='shop' element={<Showroom />} />
        <Route path='about' element={<About />} />
        <Route path='services' element={<Services />} />
        <Route path='services/:serviceid' element={<ArticlePage />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  </Router>
);
