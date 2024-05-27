import { Route, Routes, useLocation } from 'react-router-dom';
import Login from './pages/login/Login';
import UserRoutes from './routes/UserRoutes ';
import React from 'react';

const App = () => {
  const location = useLocation();

  // const authToken = sessionStorage.getItem('auth-token');
  const authToken = true;
  const loggedIn = location.pathname !== '/'
  const isAuthenticated = authToken && loggedIn;

  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
      {isAuthenticated && <UserRoutes />}
    </React.Fragment>
  );
};

export default App;
