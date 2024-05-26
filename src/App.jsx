import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';
import UserRoutes from './routes/UserRoutes ';

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // const isAuthenticated = localStorage.getItem('auth-token'); 
    const isAuthenticated = true;
    setIsLoggedIn(isAuthenticated);
  }, []);


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
      {isLoggedIn && <UserRoutes />}
    </Router>
  );
};

export default App;
