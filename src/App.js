import React from 'react';
import './App.css';
import Navbar from './Component/Navbar/navbar';
import HomeScreen from './Screen/HomeScreen/homeScreen';
import Products from './Screen/Products/products';
import Cart from './Screen/Cart/cart';
import Footer from './Component/Footer/footer';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/products' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
