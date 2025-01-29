import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Navbar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import CheckoutForm from "./components/CheckoutForm";
import NotFound from './components/NotFound';
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/skins/:categoryId" element={<ItemListContainer />} /> 
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;