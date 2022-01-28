import React, {useState} from 'react';
import './App.css';
import './theme/globalStyles.css';
import CssBaseline from '@mui/material/CssBaseline';
import { Routes, Route, Navigate } from "react-router-dom";

import Login from './components/login';
import Signup from './components/signup';
import AdminProfile from './components/adminProfile/adminProfile';
import Products from "./components/products/productsList";
import Categories from './components/categories/categoriesList';
import Header from './components/common/header';
import Footer from './components/common/footer';


function App() {

  const [user, setUser] = useState(null);

  return (
    <div className="App">

      <CssBaseline />

      {/* START COMMON COMPONENT */}
      {user && (
        <Header logout={ () => setUser(false) }/>
      )}
      {/* END COMMON COMPONENT */}



      {/* START ROUTES */}
      <Routes>

        {!user && (
          <>
            <Route path="/login" element={<Login autenticate={() => setUser(true)}/>} />
            <Route path="/signup" element={<Signup />} />
           </>
        )}
        {user && (
          <>
            <Route path="/category" element={<Categories />} />
            <Route path="/products" element={<Products/>} />
            <Route path="/profile" element={<AdminProfile />} />
          </>
        )}
        <Route path="*" element={<Navigate to={ user? "/products" : "/login"} />}/>

      </Routes>
       {/* END ROUTES */}



        {/* START COMMON COMPONENT */}
      {user && (
        <Footer/>
      )}
      {/* END COMMON COMPONENT */}
    </div>
  );
}

export default App;