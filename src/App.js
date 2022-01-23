
import React from 'react';
import './App.css';
import './theme/globalStyles.css';
import CssBaseline from '@mui/material/CssBaseline';
import Products from "./components/products/productsList";


function App() {
  return (
    <div className="App">
      <CssBaseline />
      {/* <h1>Ecommerce Admin</h1> */}
      <Products/>
    </div>
  );
}

export default App;
