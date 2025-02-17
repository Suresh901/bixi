import { BrowserRouter, Route, Routes } from 'react-router';
import Homepage from './pages/homepage/Homepage';
import Products from './pages/products/Products';
import Product from './pages/product/Product';
import SharedLayout from './layout/SharedLayout/SharedLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route path='/' element={<Homepage />} />
          <Route path='/products' element={<Products />} />
          <Route path='/product/:id' element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
