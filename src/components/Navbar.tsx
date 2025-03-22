import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router';
import axios from 'axios';
import { NavMenu } from './navigationmenu/NavMenu';
import { MobileMenu } from './mobilemenu/MobileMenu';
const apiUrl = import.meta.env.VITE_API_URL;

const Navbar = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if token exists in localStorage
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token); // Convert token to boolean
  }, []);

  // const handleLogin = async values => {
  //   try {
  //     const response = await axios.post(`${apiUrl}/login`, values);
  //     const token = response.data.token;
  //     localStorage.setItem('token', token);
  //     setIsAuthenticated(true);
  //     window.location.href = '/'; // Redirect to home after login
  //   } catch (error) {
  //     console.error('Login failed:', error);
  //   }
  // };

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from storage
    setIsAuthenticated(false);
    window.location.href = '/';
  };

  return (
    <div className='shadow-md bg-white'>
      <div className='flex items-center justify-between gap-x-8 px-6 md:px-12 py-4 z-20 sticky top-0 max-w-[1800px] mx-auto'>
        <div className='flex items-center gap-5'>
          <div className='md:hidden'>
            <MobileMenu />
          </div>
          <NavLink to='/'>
            <div className='flex-shrink-0'>
              <img
                src='https://bixilife.com/_app/immutable/assets/bixi%20logo.Du51TOZz.png'
                alt='Logo'
                className='w-20 md:w-24'
              />
            </div>
          </NavLink>
        </div>

        <div className='hidden md:flex items-center justify-center'>
          <NavMenu />
        </div>

        <div className='flex items-center gap-3'>
          <div className='cursor-pointer'>
            <img
              src='data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20class%3D%22lucide-icon%20lucide%20lucide-search%22%3E%3C!--%5B--%3E%3C!----%3E%3Ccircle%20cx%3D%2211%22%20cy%3D%2211%22%20r%3D%228%22%3E%3C!----%3E%3C%2Fcircle%3E%3C!----%3E%3C!----%3E%3Cpath%20d%3D%22m21%2021-4.3-4.3%22%3E%3C!----%3E%3C%2Fpath%3E%3C!----%3E%3C!--%5D--%3E%3C!----%3E%3C!----%3E%3C!----%3E%3C!----%3E%3C%2Fsvg%3E'
              alt=''
              className='w-6 h-6'
            />
          </div>

          <NavLink to='/cart'>
            <div className='cursor-pointer'>
              <img
                src='data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20class%3D%22lucide-icon%20lucide%20lucide-shopping-bag%22%3E%3C!--%5B--%3E%3C!----%3E%3Cpath%20d%3D%22M6%202%203%206v14a2%202%200%200%200%202%202h14a2%202%200%200%200%202-2V6l-3-4Z%22%3E%3C!----%3E%3C%2Fpath%3E%3C!----%3E%3C!----%3E%3Cpath%20d%3D%22M3%206h18%22%3E%3C!----%3E%3C%2Fpath%3E%3C!----%3E%3C!----%3E%3Cpath%20d%3D%22M16%2010a4%204%200%200%201-8%200%22%3E%3C!----%3E%3C%2Fpath%3E%3C!----%3E%3C!--%5D--%3E%3C!----%3E%3C!----%3E%3C!----%3E%3C!----%3E%3C%2Fsvg%3E'
                alt=''
                className='w-6 h-6'
              />
            </div>
          </NavLink>

          <div className='relative'>
            {isAuthenticated ? (
              <div className='group cursor-pointer'>
                <img
                  src='data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20class%3D%22lucide-icon%20lucide%20lucide-circle-user-round%22%3E%3C!--%5B--%3E%3C!----%3E%3Cpath%20d%3D%22M18%2020a6%206%200%200%200-12%200%22%3E%3C!----%3E%3C%2Fpath%3E%3C!----%3E%3C!----%3E%3Ccircle%20cx%3D%2212%22%20cy%3D%2210%22%20r%3D%224%22%3E%3C!----%3E%3C%2Fcircle%3E%3C!----%3E%3C!----%3E%3Ccircle%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%2210%22%3E%3C!----%3E%3C%2Fcircle%3E%3C!----%3E%3C!--%5D--%3E%3C!----%3E%3C!----%3E%3C!----%3E%3C!----%3E%3C%2Fsvg%3E'
                  alt=''
                  className='w-6 h-6'
                />
                <div className='hidden group-hover:block absolute right-0  w-32 bg-white shadow-lg rounded-md p-2'>
                  <button
                    onClick={handleLogout}
                    className='w-full text-left px-4 py-2 hover:bg-gray-100'
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <div
                onClick={() => navigate('/login')}
                className='cursor-pointer'
              >
                <img
                  src='data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20class%3D%22lucide-icon%20lucide%20lucide-circle-user-round%22%3E%3C!--%5B--%3E%3C!----%3E%3Cpath%20d%3D%22M18%2020a6%206%200%200%200-12%200%22%3E%3C!----%3E%3C%2Fpath%3E%3C!----%3E%3C!----%3E%3Ccircle%20cx%3D%2212%22%20cy%3D%2210%22%20r%3D%224%22%3E%3C!----%3E%3C%2Fcircle%3E%3C!----%3E%3C!----%3E%3Ccircle%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%2210%22%3E%3C!----%3E%3C%2Fcircle%3E%3C!----%3E%3C!--%5D--%3E%3C!----%3E%3C!----%3E%3C!----%3E%3C!----%3E%3C%2Fsvg%3E'
                  alt=''
                  className='w-6 h-6'
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
