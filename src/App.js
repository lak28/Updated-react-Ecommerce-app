import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import {Routes, Route } from 'react-router-dom';
import Products from './component/Products';
import Product from './component/Product';
import Cart from './component/Cart';
import About from './component/About';
import Contact from './component/Contact';
import Checkout from './component/Checkout';
import Success from './component/Success';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/products" element={<Products />} />
      <Route exact path="/products/:id" element={<Product />} />
      <Route exact path="/cart" element={<Cart />} />
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/contact" element={<Contact/>}/>
      <Route exact path="/checkout" element={<Checkout/>}/>
      <Route exact path="/success" element={<Success/>}/>
      <Route exact path="/newproduct" element={<NewProduct/>}/>
      </Routes>
    </>
  );
}

export default App;