import { MdKeyboardArrowDown } from 'react-icons/md';
import { RxHamburgerMenu } from 'react-icons/rx';
import { NavLink } from 'react-router';

const Navbar = () => {
  return (
    <div className=' shadow-md bg-white'>
      <div className='flex items-center justify-between gap-x-8 px-6 md:px-12  py-4 z-20 sticky top-0 max-w-[1800px] mx-auto '>
        <div className=' flex items-center gap-5'>
          <div className='md:hidden'>
            <RxHamburgerMenu />
          </div>
          <NavLink to='/'>
            <img
              src='https://bixilife.com/_app/immutable/assets/biti%20logo.DMhA3Suo.png'
              alt=''
              className='w-16 md:w-20'
            />
          </NavLink>
        </div>

        <div className='hidden md:flex items-center justify-center'>
          <ul className='flex gap-5 text-md '>
            <li className='cursor-pointer'>New</li>
            <li className='cursor-pointer'>Best Seller</li>
            <div className='flex items-center gap-2'>
              <li className='cursor-pointer'>Kids</li>
              <MdKeyboardArrowDown />
            </div>
            <div className='flex items-center gap-2'>
              <li className='cursor-pointer'>Adult</li>
              <MdKeyboardArrowDown />
            </div>
            <div className='flex items-center gap-2'>
              <li className='cursor-pointer'>Accessories</li>
              <MdKeyboardArrowDown />
            </div>
          </ul>
        </div>
        <div className='flex gap-5'>
          {/* <div className="hidden xl:flex items-center justify-center bg-[#f8f8fa] px-4 py-1 rounded-full">
                <input type="text" placeholder="Search for Product" className="border-none bg-transparent outline-none "/>
                <button className="bg-white rounded-full p-2 cursor-pointer">
                    <img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20class%3D%22lucide-icon%20lucide%20lucide-search%22%3E%3C!--%5B--%3E%3C!----%3E%3Ccircle%20cx%3D%2211%22%20cy%3D%2211%22%20r%3D%228%22%3E%3C!----%3E%3C%2Fcircle%3E%3C!----%3E%3C!----%3E%3Cpath%20d%3D%22m21%2021-4.3-4.3%22%3E%3C!----%3E%3C%2Fpath%3E%3C!----%3E%3C!--%5D--%3E%3C!----%3E%3C!----%3E%3C!----%3E%3C!----%3E%3C%2Fsvg%3E" alt="" />
                </button>
            </div> */}

          <div className=' flex flex-col items-center justify-center cursor-pointer'>
            <img
              src='data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20class%3D%22lucide-icon%20lucide%20lucide-search%22%3E%3C!--%5B--%3E%3C!----%3E%3Ccircle%20cx%3D%2211%22%20cy%3D%2211%22%20r%3D%228%22%3E%3C!----%3E%3C%2Fcircle%3E%3C!----%3E%3C!----%3E%3Cpath%20d%3D%22m21%2021-4.3-4.3%22%3E%3C!----%3E%3C%2Fpath%3E%3C!----%3E%3C!--%5D--%3E%3C!----%3E%3C!----%3E%3C!----%3E%3C!----%3E%3C%2Fsvg%3E'
              alt=''
            />

            {/* <h1>Search</h1> */}
          </div>

          <div className='flex flex-col items-center justify-center cursor-pointer'>
            <img
              src='data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20class%3D%22lucide-icon%20lucide%20lucide-shopping-bag%22%3E%3C!--%5B--%3E%3C!----%3E%3Cpath%20d%3D%22M6%202%203%206v14a2%202%200%200%200%202%202h14a2%202%200%200%200%202-2V6l-3-4Z%22%3E%3C!----%3E%3C%2Fpath%3E%3C!----%3E%3C!----%3E%3Cpath%20d%3D%22M3%206h18%22%3E%3C!----%3E%3C%2Fpath%3E%3C!----%3E%3C!----%3E%3Cpath%20d%3D%22M16%2010a4%204%200%200%201-8%200%22%3E%3C!----%3E%3C%2Fpath%3E%3C!----%3E%3C!--%5D--%3E%3C!----%3E%3C!----%3E%3C!----%3E%3C!----%3E%3C%2Fsvg%3E'
              alt=''
            />
            {/* <h1>Cart</h1> */}
          </div>
          <div className='flex flex-col items-center justify-center cursor-pointer'>
            <img
              src='data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20class%3D%22lucide-icon%20lucide%20lucide-circle-user-round%22%3E%3C!--%5B--%3E%3C!----%3E%3Cpath%20d%3D%22M18%2020a6%206%200%200%200-12%200%22%3E%3C!----%3E%3C%2Fpath%3E%3C!----%3E%3C!----%3E%3Ccircle%20cx%3D%2212%22%20cy%3D%2210%22%20r%3D%224%22%3E%3C!----%3E%3C%2Fcircle%3E%3C!----%3E%3C!----%3E%3Ccircle%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%2210%22%3E%3C!----%3E%3C%2Fcircle%3E%3C!----%3E%3C!--%5D--%3E%3C!----%3E%3C!----%3E%3C!----%3E%3C!----%3E%3C%2Fsvg%3E'
              alt=''
            />
            {/* <h1>Profile</h1> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
