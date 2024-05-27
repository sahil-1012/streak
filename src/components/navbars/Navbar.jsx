import React from 'react';
import { AssessmentOutlined, BookmarkBorderOutlined, DashboardOutlined, LogoutOutlined, QueryStatsOutlined, SettingsOutlined } from '@mui/icons-material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Tabs, Tab, Tooltip } from '@mui/material';

const Navbar = () => {
  const location = useLocation();
  const urlParts = location.pathname.split('/');
  const activeTab = urlParts[2] || 'dashboard';

  const tabs = [
    { icon: <DashboardOutlined />, label: 'Dashboard', value: 'dashboard' },
    { icon: <QueryStatsOutlined />, label: 'Search', value: 'search' },
    { icon: <AssessmentOutlined />, label: 'Reports', value: 'reports' },
    { icon: <BookmarkBorderOutlined />, label: 'Bookmarks', value: 'bookmarks' },
    { icon: <SettingsOutlined />, label: 'Settings', value: 'settings' },
  ];

  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.clear('auth-token');
    navigate('/')
  };


  return (
    <div className='flex flex-col transition-all duration-300 bg-black min-h-screen fixed'>
      <Link to='user/dashboard' className='flex content-center p-3 pt-5'>
        <img className='w-6 h-6' src="/logo/company-logo.png" alt="" />
      </Link>

      <div className="flex mt-36 items-center justify-center">
        <Tabs
          orientation="vertical" variant="scrollable" scrollButtons={false}
          value={activeTab}
          aria-label="Navigation tabs"
          TabIndicatorProps={{ style: { backgroundColor: '#3b82f6' } }}
        >
          {tabs.map(({ icon, label, value }, index) => (
            <Tooltip key={index} title={label} placement="right">
              <Tab
                key={index} component={Link} to={'/user/' + value} value={value}
                icon={React.cloneElement(icon, { className: `${activeTab === value ? 'text-blue-500' : 'text-white'} transition-colors duration-300` })}
                sx={{ minWidth: '30px', marginY: 1 }} disableRipple
              />
            </Tooltip>
          ))}

          <Tooltip title="Logout" placement="right">
            <Tab
              onClick={handleLogout} sx={{ minWidth: '30px', marginY: 1 }} disableRipple
              icon={<LogoutOutlined className='text-white' />}
            />
          </Tooltip>
        </Tabs>
      </div>

    </div>
  );
};

export default Navbar;
