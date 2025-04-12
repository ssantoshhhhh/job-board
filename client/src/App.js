import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar'; // Adjust the path as needed
import Home from './pages/Home';
import JobList from './pages/JobList';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/joblist" element={<JobList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
