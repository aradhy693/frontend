'use client';
import { IconCircleCheck, IconLoader } from '@tabler/icons-react';
import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Password is required'),
});

const Login = () => {

  const loginForm = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (values, { resetForm, setSubmitting }) => {
      setTimeout(() => {
        console.log(values);
        resetForm();
      }, 3000)
    },
    validationSchema: LoginSchema
  });

  return (
    <div className='flex justify-center items-center h-screen' >
      <div className="w-full max-w-md mx-auto">
        <div className='rounded-lg border-2 shadow p-8'>

          <h1 className='uppercase font-bold my-6 text-3xl text-center text-gray-600'>Login Form</h1>
          <form onSubmit={loginForm.handleSubmit} >
            <label htmlFor="email">Email Address</label>
            <span className='text-sm ml-4 text-red-500'>{loginForm.touched.email && loginForm.errors.email}</span>
            <input id='email' onChange={loginForm.handleChange} value={loginForm.values.email} type="email"
              className={'border rounded w-full px-3 py-2 mb-4 ' +
                ((loginForm.touched.email && loginForm.errors.email) ? 'border-red-500' : '')}
            />

            <label htmlFor="password">Password</label>
            <span className='text-sm ml-4 text-red-500'>{loginForm.touched.password && loginForm.errors.password}</span>
            <input id='password' onChange={loginForm.handleChange} value={loginForm.values.password} type="password"
              className={'border rounded w-full px-3 py-2 mb-4 ' +
                ((loginForm.touched.password && loginForm.errors.password) ? 'border-red-500' : '')}
            />

            <div className='flex justify-end mb-4'>
              <a href="/forgot-password" className='text-blue-500 text-sm'>Forgot Password?</a>
            </div>

            <button type='submit' disabled={loginForm.isSubmitting}
              className='flex justify-center items-center bg-blue-500 text-white px-3 py-2 rounded w-full mt-8 disabled:opacity-50'
            >
              {loginForm.isSubmitting ? <IconLoader className='animate-spin' size={20} /> : <IconCircleCheck />}
              <span>{loginForm.isSubmitting ? 'Please wait' : 'Login'}</span>
            </button>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;
