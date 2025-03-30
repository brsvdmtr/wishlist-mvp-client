import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Wishlist from './components/Wishlist';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/wishlist/:id" element={<Wishlist />} />
    </Routes>
  </BrowserRouter>
)