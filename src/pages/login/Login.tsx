import { useFormik } from 'formik';
import { NavLink } from 'react-router';
import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL;

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async values => {
      try {
        const response = await axios.post(`${apiUrl}/login`, values);
        // console.log(response.data);
        const token = response.data.token;
        localStorage.setItem('token', token);
        // console.log('login successful');
        window.location.href = '/';
      } catch {
        console.log('Error');
      }
    },
  });

  return (
    <div className='flex items-center justify-center h-screen p-5'>
      <div className='border p-5 rounded-lg flex flex-col gap-4 text-sm max-w-100'>
        <h1 className='text-center font-bold text-lg'>Login to BIXI</h1>
        <form onSubmit={formik.handleSubmit} className='flex flex-col gap-5'>
          <input
            id='email'
            name='email'
            type='email'
            onChange={formik.handleChange}
            value={formik.values.email}
            className='border rounded-lg px-4 py-2'
            placeholder='Email Address'
          />

          <input
            id='password'
            name='password'
            type='password'
            onChange={formik.handleChange}
            value={formik.values.password}
            className='border rounded-lg px-4 py-2'
            placeholder='Password'
          />

          <NavLink
            to='/forgetPassword'
            className='text-[#2b4591] text-end font-semibold cursor-pointer hover:underline'
          >
            Forget Password?
          </NavLink>

          <button
            type='submit'
            className='bg-[#172554] text-white p-2 rounded-lg w-full cursor-pointer'
          >
            Submit
          </button>

          <h1 className='border-b'>
            By signing in, you agree to our Terms and Conditions and our Privacy
            Policy.
          </h1>
          <h1 className='text-center font-semibold'>
            Don't have an account?
            <NavLink to='/register'>
              <span className='text-[#4a66bf] cursor-pointer'>
                {' '}
                Create an account
              </span>
            </NavLink>
          </h1>
        </form>
      </div>
    </div>
  );
};

export default Login;
