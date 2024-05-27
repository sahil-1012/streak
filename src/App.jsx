import { Route, Routes, useLocation } from 'react-router-dom';
import Login from './pages/login/Login';
import UserRoutes from './routes/UserRoutes ';
import React from 'react';
import { loadingState } from './recoil/state';
import { useRecoilState } from 'recoil';
import { useSnackbar } from './hooks/useSnackbar';
import { Alert, CircularProgress, Slide, Snackbar } from '@mui/material';

const App = () => {
  const location = useLocation();

  const authToken = sessionStorage.getItem('auth-token');
  const loggedIn = location.pathname !== '/'
  const isAuthenticated = authToken && loggedIn;

  const { isSnackbarOpen, snackbarMessage, snackbarType, snackbarIcon, handleSnackbarClose, horizontal, vertical } = useSnackbar();
  const [isLoading] = useRecoilState(loadingState);

  const TransitionSnackbar = (props) => {
    const directionMap = { top: 'down', bottom: 'up', left: 'right', right: 'left' };
    const direction = directionMap[vertical] || directionMap[horizontal] || 'down';
    return <Slide {...props} direction={direction} />;
  };

  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
      {isAuthenticated && <UserRoutes />}

      {isSnackbarOpen && <Snackbar variant='soft' open={isSnackbarOpen} autoHideDuration={3000} onClose={handleSnackbarClose} anchorOrigin={{ horizontal: horizontal, vertical: vertical }}
        TransitionComponent={(props) => <TransitionSnackbar {...props} />} >
        <Alert onClose={handleSnackbarClose} severity={snackbarType} icon={snackbarIcon}>
          {snackbarMessage}
        </Alert>
      </Snackbar>}

      {isLoading && <CircularProgress color="success" />}

    </React.Fragment>
  );
};

export default App;
