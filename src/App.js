import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import AdminProfile from './components/adminProfile/adminProfile';

function App() {
  return (
    <>
    {/* <AdminProfile /> */}
      <Routes>
        {/* <Route path="/" element={< />} />  */}
        <Route path="/admin" element={<AdminProfile />} />
      </Routes>
    </>
  );
}

export default App;
