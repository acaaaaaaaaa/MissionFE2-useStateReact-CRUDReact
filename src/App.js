import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import MyList from './pages/MyList';
import ResetPassword from './pages/ResetPass';
import GoogleRegister from './pages/GoogleRegist';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/my-list" element={<MyList />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/register-google" element={<GoogleRegister />} />
      </Routes>
    </Router>
  );
}

export default App;
