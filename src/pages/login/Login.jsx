import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button, IconButton } from '@mui/material'
import { AccountCircle, Visibility, VisibilityOff } from '@mui/icons-material'
import { useSnackbar } from '../../hooks/useSnackbar'

import useFormOperations from '../../hooks/useFormOperations'

const Login = () => {
  const { handleSnackbarOpen } = useSnackbar();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);


  const [loading, setLoading] = useState(false);
  // ~ Will implement Recoil state
  // const [loading, setLoading] = useRecoilState(loadingState);
  // const { usePostData } = usePostData();

  const navigate = useNavigate();
  const onSubmit = async (formData) => {

    setLoading(true)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // const { data, success } = await postData('/api/login', formData)
    setLoading(false)

    // if (!success)
    //   return handleSnackbarOpen('Invalid Credentials', 'error', null, 'bottom', 'left');
    // const { token } = data;
    const token = 'abc@123'
    sessionStorage.setItem('auth_token', token);

    navigate('/user/dashboard');
    handleSnackbarOpen('Login successful', 'success', null, 'bottom', 'left');
  };

  const { formData, handleSubmit, handleChange } = useFormOperations({}, onSubmit);

  return (
    <main className='flex justify-center items-center bg-tertiary p-5 sm:px-10 xl:px-20 py-3 min-h-screen'>
      <div className='grid lg:grid-cols-2 max-w-8xl w-full'>
        <div className='flex flex-col gap-10 p-3 sm:p-8 xl:px-5 py-8 bg-white w-full h-full'>
          <header className=''>
            <div className='flex justify-center items-center select-none'>
              <img draggable={false} className='h-20 w-20 sm:h-24 sm:w-24' src="/logo/collegeLogoMini.webp" alt="College Logo" />
            </div>
            <div className='flex flex-col items-center gap-5'>
              <div className='flex justify-center select-none'>
                <img draggable={false} className='w-48 sm:w-60 h-20' src="/logo/campus.svg" alt="CAMPUS_Logo" />
              </div>
              <p className='text-light text-xs sm:text-sm font-medium text-center max-w-xl w-full'>Streamline college operations & empower users with our all-in-one management platform for admissions, courses, grades & communication.</p>
            </div>
          </header>

          <div className='flex justify-center'>
            <div className='flex flex-col gap-5 max-w-md w-full' >
              <button className='flex p-3 gap-5 justify-center items-center bg-tertiary shadow-sm rounded-md w-full select-none' onClick={() => { }}>
                <div className='h-fit w-fit flex p-1 bg-white rounded-full'>
                  <img draggable={false} src={google} className='h-5 w-5' alt="googleImage" />
                </div>
                <h5 className='text-p font-semibold'>Sign in with Google</h5>
              </button>

              <p className='text-s text-center'>or</p>

              <div className='flex flex-col items-center'>
                <form className='flex flex-col gap-6 w-full justify-center items-center' onSubmit={handleSubmit}>
                  <CustomTextField
                    label="User ID"
                    name="username"
                    value={formData.username}
                    placeholder='Enter your official User ID'
                    fullWidth
                    startIcon={<AccountCircle />}
                    onChange={handleChange}
                  />
                  <CustomTextField
                    label="Password"
                    name="password"
                    value={formData.password}
                    type={showPassword ? 'text' : 'password'}
                    fullWidth
                    endIcon={
                      <IconButton aria-label="toggle password visibility"
                        onClick={handleClickShowPassword} edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    } onChange={handleChange}
                  />
                  <div className='flex justify-center items-center w-full'>
                    <Button type='submit' fullWidth >
                      login
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-[#EFF9F8] lg:flex items-center justify-center hidden select-none'>
          <img draggable={false} className='h-[500px] w-fit' src="/images/loginLogo.png" alt="logIn" />
        </div>
      </div>
    </main>
  )
}

export default Login;