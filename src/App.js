
import './App.css';
import { Routes, Route } from "react-router-dom";
import AdminProfile from './components/adminProfile/adminProfile';

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={< />} /> */}
        <Route path="/admin" element={<AdminProfile />} />
      </Routes>
    </>
  );
}

export default App;
