import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Cart from './cart';
import Header from './header';
import Product from './product';
import WishList from './wish-list';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <Header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='/wishlist' element={<WishList />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Header>
    </div>
  );
};

export default App;

const Home = () => {
  return <h2>Home Pages</h2>;
};
