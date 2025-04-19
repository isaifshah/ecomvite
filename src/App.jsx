import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx'; // Import Header
// import ProductList from './pages/ProductList.jsx'; // Remove this
// import ProductDetail from './pages/ProductDetail.jsx'; // Remove this
// import Cart from './pages/Cart.jsx'; // Remove this
import NotFound from './components/NotFound.jsx'; // Import NotFound
import Loader from './components/Loader.jsx';

// Use lazy loading for the main pages
const ProductList = lazy(() => import('./pages/ProductList.jsx'));
const ProductDetail = lazy(() => import('./pages/ProductDetail.jsx'));
const Cart = lazy(() => import('./pages/Cart.jsx'));
const Checkout = lazy(()=> import('./pages/Checkout.jsx'));

const App = () => {
  return (
    <div className="app">
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
