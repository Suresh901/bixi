import { Outlet } from 'react-router';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const SharedLayout = () => {
  return (
    <div>
      <Navbar />
      <div className='max-w-[1800px] mx-auto '>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default SharedLayout;
