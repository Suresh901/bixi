import { BrowserRouter, Route, Routes } from 'react-router';
import Homepage from './pages/homepage/Homepage';
import Products from './pages/products/Products';
import Product from './pages/product/Product';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path='/products' element={<Products />} />
        <Route path='/product/:id' element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
