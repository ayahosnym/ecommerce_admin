import React, { useContext, createContext, useState }  from 'react';
import './App.css';
import './theme/globalStyles.css';
import CssBaseline from '@mui/material/CssBaseline';
import { Routes } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

import Login from './components/login';
import Signup from './components/signup';
import AdminProfile from './components/adminProfile/adminProfile';
import Products from "./components/products/productsList";


function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<Products />} />
        <Route path="/profile" element={<AdminProfile />} />
      </Routes>
    </div>
  );
}

export default App;
