import { BrowserRouter, Route, Routes } from 'react-router';
import Homepage from './pages/homepage/Homepage';
import Products from './pages/products/Products';
import Product from './pages/product/Product';
import SharedLayout from './layout/SharedLayout/SharedLayout';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import ForgetPassword from './pages/forgetPassword/ForgetPassword';
import Cart from './pages/cart/Cart';
import CheckOut from './pages/checkout/CheckOut';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route path='/' element={<Homepage />} />
          <Route path='/products' element={<Products />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<CheckOut />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forgetPassword' element={<ForgetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
