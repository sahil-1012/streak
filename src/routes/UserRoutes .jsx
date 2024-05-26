import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Dashboard from '../pages/dashboard/Dashboard';
import Navbar from '../components/navbars/Navbar';

const UserRoutes = () => {
    const location = useLocation();
    // const AuthToken = sessionStorage.getItem('auth-token');
    const authToken = true;
    const loggedIn = location.pathname !== '/'
    const isAuthorized = authToken && loggedIn;
    const userData = {
        _id: '824703q08dcs890',
        name: 'sahil Jaiswal',
    }
    return (
        <React.Fragment>
            {isAuthorized &&
                <div className="flex w-full">
                    <div className='duration-300 ease-in-out transition-transform w-fit'>
                        <Navbar />
                    </div>
                    <div className='flex flex-col'>
                        <Header />

                        <div className='flex w-full min-h-screen transition'>
                            <Routes>
                                <Route path="user/dashboard" element={<Dashboard />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            }
        </React.Fragment>
    );
};

export default UserRoutes;
