import { SlLocationPin } from 'react-icons/sl';
import { BsTelephone } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoWhatsapp } from 'react-icons/io5';
import { NavLink } from 'react-router';

const Footer = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row lg:justify-between px-12 bg-[#f8fafc] py-10 gap-10'>
        <div className='flex flex-col gap-5'>
          <div>
            <NavLink to='/'>
              <img
                src='https://bixilife.com/_app/immutable/assets/biti%20logo.DMhA3Suo.png'
                alt=''
                className='w-24 h-10'
              />
            </NavLink>
          </div>
          <h1>Welcome to our world of comfort.</h1>
          <div className='flex flex-col gap-3'>
            <div className='flex items-center gap-5'>
              <SlLocationPin />
              <h1>Kathmandu,Nepal</h1>
            </div>
            <div className='flex items-center gap-5'>
              <BsTelephone />
              <h1>980000000200</h1>
            </div>
            <div className='flex items-center gap-5'>
              <MdOutlineEmail />
              <h1>xyz@gmail.com</h1>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-5'>
          <h1 className='font-bold text-2xl'>Discover</h1>
          <ul className='flex flex-col gap-2'>
            <li>New Arrivals</li>
            <li>About Us</li>
            <li>Best Sellers</li>
            <li>Terms & Condition</li>
            <li>Help & Contact</li>
            <li>Returns</li>
            <li>Affilate</li>
          </ul>
        </div>

        <div className='flex flex-col gap-5'>
          <h1 className='font-bold text-2xl'>Support</h1>
          <ul className='flex flex-col gap-2'>
            <li>Contact Us</li>
            <li>Frequently Asked Questions</li>
            <li>Delivery & Returns</li>
            <li>Size Guide</li>
            <li>Partnerships</li>
            <li>Media Enquiries</li>
            <li>Customer Care Policy</li>
          </ul>
        </div>

        <div className='flex flex-col gap-5 lg:w-1/4'>
          <h1 className='font-bold text-2xl'>Join Us On</h1>
          <h1>
            Discover all things comfort & be the first to hear about exciting
            new products!
          </h1>
          <div className='p-2 bg-white rounded-full border flex items-center justify-center'>
            <input
              type='text'
              placeholder='Enter Your Email'
              className='p-2 w-full outline-none'
            />
            <div className='lg:px-6 px-2'>
              <AiOutlineArrowRight size={24} />
            </div>
          </div>
          <div className='flex items-center gap-10 '>
            <div className='p-2 bg-white border rounded-full'>
              <FaFacebookF />
            </div>
            <div className='p-2 bg-white border rounded-full'>
              <FiInstagram />
            </div>
            <div className='p-2 bg-white border rounded-full'>
              <IoLogoWhatsapp />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
