import { useFormik } from 'formik';
import { NavLink } from 'react-router';

const Register = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: '',
      address: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className='flex items-center justify-center h-screen p-4'>
      <div className='border p-5 rounded-lg flex flex-col gap-5 text-sm max-w-110'>
        <h1 className='text-center font-bold text-lg'>
          Create an account with Bixi
        </h1>
        <form onSubmit={formik.handleSubmit} className='flex flex-col gap-4 '>
          <div className='flex gap-2 w-full'>
            <input
              id='firstName'
              name='firstName'
              type='firstName'
              onChange={formik.handleChange}
              // value={formik.values.email}
              className='border rounded-lg px-4 py-2 w-full'
              placeholder='First Name'
            />
            <input
              id='lastName'
              name='lastName'
              type='lastName'
              onChange={formik.handleChange}
              // value={formik.values.email}
              className='border rounded-lg px-4 py-2 w-full'
              placeholder='Last Name'
            />
          </div>
          <input
            id='email'
            name='email'
            type='email'
            onChange={formik.handleChange}
            value={formik.values.email}
            className='border rounded-lg px-4 py-2 '
            placeholder='Email Address'
          />
          <input
            id='phone'
            name='phone'
            type='phone'
            onChange={formik.handleChange}
            value={formik.values.phone}
            className='border rounded-lg px-4 py-2 '
            placeholder='Phone'
          />
          <input
            id='address'
            name='address'
            type='address'
            onChange={formik.handleChange}
            value={formik.values.address}
            className='border rounded-lg px-4 py-2 '
            placeholder='Address'
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
          <input
            id='confirmPassword'
            name='confirmPassword'
            type='confirmPassword'
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
            className='border rounded-lg px-4 py-2'
            placeholder='Confirm Password'
          />

          <button
            type='submit'
            className='bg-[#172554] text-white p-2 rounded-lg w-full font-bold'
          >
            Create Account
          </button>

          <h1 className='border-b'>
            By signing in, you agree to our Terms and Conditions and our Privacy
            Policy.
          </h1>
          <h1 className='text-center font-semibold'>
            Already have account?{' '}
            <NavLink to='/login'>
              <span className='text-[#4a66bf] cursor-pointer'> Log In</span>
            </NavLink>
          </h1>
        </form>
      </div>
    </div>
  );
};

export default Register;
