import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button, IconButton, InputAdornment, TextField } from '@mui/material'
import { AccountCircle, Visibility, VisibilityOff } from '@mui/icons-material'
import { useSnackbar } from '../../hooks/useSnackbar'

import useFormOperations from '../../hooks/useFormOperations'
import { useRecoilState } from 'recoil'
import { loadingState } from '../../recoil/state'

const Login = () => {
  const { handleSnackbarOpen } = useSnackbar();
  const [loading, setLoading] = useRecoilState(loadingState);

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);


  // const { usePostData } = usePostData();
  
  const navigate = useNavigate();
  const onSubmit = async (formData) => {

    setLoading(true)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // ~ Will implement When API is available
    await new Promise(resolve => setTimeout(resolve, 1000));
    // const { data, success } = await postData('/api/login', formData)
    setLoading(false)

    // ~ Will implement When API is available
    // if (!success)
    //   return handleSnackbarOpen('Invalid Credentials', 'error', null, 'bottom', 'left');
    // const { token } = data;
    const token = 'abc@123'
    sessionStorage.setItem('auth-token', token);

    navigate('/user/dashboard');
    handleSnackbarOpen('Login successful', 'success', null, 'bottom', 'left');
  };

  const { formData, handleSubmit, handleChange } = useFormOperations({}, onSubmit);

  return (
    <main className='flex justify-center items-center bg-secondary p-5 sm:px-10 xl:px-20 py-3 min-h-screen'>
      <div className='grid lg:grid-cols-2 max-w-8xl w-full'>
        <div className='flex flex-col gap-10 p-3 sm:p-8 xl:px-5 py-8 bg-tertiary w-full h-full'>
          <header className=''>
            <div className='flex flex-col items-center gap-5'>
              <div className='flex flex-col items-center justify-center select-none'>
                <img draggable={false} className='w-16' src="/logo/company-logo.png" alt="STREAK_Logo" />
                <span className='text-primary text-3xl font-semibold  '>STREAK</span>
              </div>
              <p className='text-secondary text-xs sm:text-sm font-medium text-center max-w-xl w-full'>Streamline college operations & empower users with our all-in-one management platform for admissions, courses, grades & communication.</p>
            </div>
          </header>

          <div className='flex justify-center'>
            <div className='flex flex-col gap-5 max-w-md w-full' >
              <button className='flex p-3 gap-5 justify-center items-center bg-purple-100 shadow-sm rounded-md w-full select-none' onClick={onSubmit}>
                <div className='h-fit w-fit flex p-1 bg-white rounded-full'>
                  <img draggable={false} src='/logo/google.svg' className='h-5 w-5' alt="googleImage" />
                </div>
                <h5 className='text-p font-semibold'>Sign in with Google</h5>
              </button>

              <p className='text-primary italic text-center'>or</p>

              <div className='flex flex-col items-center'>
                <form className='flex flex-col gap-6 w-full justify-center items-center' onSubmit={handleSubmit}>
                  <TextField
                    label="User ID"
                    name="username"
                    value={formData.username}
                    className='bg-primary border-gray-200 white-text-field'
                    placeholder='Enter any Email ID'
                    fullWidth
                    InputLabelProps={{ style: { color: 'white' } }}
                    InputProps={{
                      style: { color: 'white' },
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle className='text-purple-100' />
                        </InputAdornment>
                      ),
                    }}
                    onChange={handleChange}
                  />
                  <TextField
                    label="Password"
                    name="password"
                    className='bg-primary border-gray-200 white-text-field'
                    value={formData.password}
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Use `Test@123` as dummy password !'
                    fullWidth
                    onChange={handleChange}
                    InputLabelProps={{ style: { color: 'white' } }}
                    InputProps={{
                      style: { color: 'white' },
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff className='text-zinc-500' /> : <Visibility className='text-zinc-300' />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}

                  />
                  <div className='flex justify-center items-center w-full'>
                    <Button color='primary' variant='contained' size='large' type='submit' fullWidth >
                      login
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-[#EFF9F8] lg:flex items-center justify-center hidden select-none'>
          <img draggable={false} className='h-full w-fit opacity-95 bg-black shadow-inner' src="/images/login-container.webp" alt="logIn" />
        </div>
      </div>
    </main>
  )
}

export default Login;