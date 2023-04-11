import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/home';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import './App.scss';
const Product = React.lazy(() => import("product/App"));

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={
          <Suspense fallback={'Loading Products'}>
            <Product />
          </Suspense>} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
