import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/dashboard/Dashboard';
import Navbar from '../components/navbars/Navbar';
import Header from '../components/header/Header';
import React from 'react';

const UserRoutes = () => {

    const userData = {
        _id: '824703q08dcs890',
        firstName: 'John',
        lastName: 'Doe',
    }

    return (
        <React.Fragment>
            <div className="flex w-full">
                <div className='duration-300 ease-in-out transition-transform w-fit overflow-y-auto'>
                    <Navbar />
                </div>
                
                <div className='flex flex-col gap-10 w-full bg-primary pl-20 pr-10 lg:pl-28 lg:pr-16 py-8'>
                    <Header userData={userData} />
                    <hr className='border-gray-800' />

                    <div className='flex w-full min-h-screen transition'>
                        <Routes>
                            <Route path="user/dashboard" element={<Dashboard />} />
                        </Routes>
                    </div>
                </div>

            </div>
        </React.Fragment>
    );
};

export default UserRoutes;
