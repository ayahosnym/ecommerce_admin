import React, { useContext } from 'react';
import './App.css';
import './theme/globalStyles.css';
import CssBaseline from '@mui/material/CssBaseline';
import { Routes, Route, Navigate } from "react-router-dom";
import Login from './components/auth/login';
import Signup from './components/auth/signup';
import AdminProfile from './components/adminProfile/adminProfile';
import Products from "./components/products/productsList";
import Categories from './components/categories/categoriesList';
import Header from './components/common/header';
import Footer from './components/common/footer';

import { UserProvider } from './context/UserContext';
import { AuthContext } from './context/AuthContext';
function App() {


  const { auth } = useContext(AuthContext);
  return (
    <>
      <UserProvider>

        <div className="App">

          <CssBaseline />

          {/* START COMMON COMPONENT */}
          {auth && (
            <Header />
          )}
          {/* END COMMON COMPONENT */}



          {/* START ROUTES */}
          <Routes>

            {!auth && (
              <>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
              </>
            )}
            {auth && (
              <>
                <Route path="/category" element={<Categories />} />
                <Route path="/products" element={<Products />} />
                <Route path="/profile" element={<AdminProfile />} />
              </>
            )}
            <Route path="*" element={<Navigate to={auth ? "/products" : "/login"} />} />

          </Routes>
          {/* END ROUTES */}



          {/* START COMMON COMPONENT */}
          {auth && (
            <Footer />
          )}
          {/* END COMMON COMPONENT */}
        </div>

      </UserProvider>
    </>
  );
}

export default App;