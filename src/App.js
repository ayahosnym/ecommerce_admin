import React from 'react';
import './App.css';
import './theme/globalStyles.css';
import CssBaseline from '@mui/material/CssBaseline';
import { Routes, Route } from "react-router-dom";

import Login from './components/login';
import Signup from './components/signup';
import AdminProfile from './components/adminProfile/adminProfile';
import Products from "./components/products/productsList";


function App() {
  return (
    <div className="App">
      <CssBaseline />
      <h1>Home</h1>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<Products />} />
        <Route path="/profile" element={<AdminProfile />} />
      </Routes>
    </div>
  );
}

export default App;
