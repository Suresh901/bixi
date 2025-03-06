import { useFormik } from 'formik';
import { NavLink } from 'react-router';

const ForgetPassword = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className='flex items-center justify-center h-screen p-5'>
      <div className='border p-5 rounded-lg flex flex-col gap-4 text-sm max-w-100 w-full'>
        <h1 className='text-center font-bold'>Forget password</h1>
        <form onSubmit={formik.handleSubmit} className='flex flex-col gap-5 '>
          <input
            id='email'
            name='email'
            type='email'
            onChange={formik.handleChange}
            value={formik.values.email}
            className='border rounded-lg px-4 py-2 '
            placeholder='Enter your email'
          />

          <button
            type='submit'
            className='bg-[#172554] text-white p-2 rounded-lg w-full'
          >
            Submit
          </button>
          <NavLink to='/login' className='text-center underline'>
            Cancel
          </NavLink>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
