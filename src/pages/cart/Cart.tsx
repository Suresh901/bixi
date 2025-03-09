import { MdOutlineDeleteOutline } from 'react-icons/md';
import { NavLink } from 'react-router';

const Cart = () => {
  return (
    <div className='grid lg:grid-cols-12 gap-5 py-10 md:px-12 px-4 '>
      <div className='border rounded-lg lg:col-span-9 p-5 order-2 lg:order-1'>
        <h1 className='font-bold text-xl'>Your Cart</h1>
        <div className='flex flex-col gap-5'>
          <div className='bg-[#f9fafb] rounded-lg p-2 flex justify-between gap-5 pb-5'>
            <div className='flex items-center gap-5'>
              <div className='border rounded-lg w-24 h-24 '>
                <img
                  src='https://portal.bixilife.com/storage/category/9510b885-1ca1-4eee-a62f-997221ca4dc81736325474.jpeg'
                  alt='img'
                  className='rounded-lg object-contain w-full h-full'
                />
              </div>
              <div className='flex flex-col gap-5'>
                <div>
                  <h1 className='font-bold'>Bag</h1>
                  <h2 className='text-[#aab0ba]'>Quantity: 1</h2>
                </div>

                <div>
                  <h1 className='text-[#3b5399] font-bold'>NPR XXXXX</h1>
                  <del className='text-[#aab0ba]'>NPR XXXXX</del>
                </div>
              </div>
            </div>
            <div>
              <div className='bg-[#fef2f2] rounded-lg p-2'>
                <MdOutlineDeleteOutline
                  size={24}
                  className='text-[#f47878] cursor-pointer'
                />
              </div>
            </div>
          </div>
          <div className='bg-[#f9fafb] rounded-lg p-2 flex justify-between gap-5 pb-5'>
            <div className='flex items-center gap-5'>
              <div className='border rounded-lg w-24 h-24 '>
                <img
                  src='https://portal.bixilife.com/storage/category/9510b885-1ca1-4eee-a62f-997221ca4dc81736325474.jpeg'
                  alt='img'
                  className='rounded-lg object-contain w-full h-full'
                />
              </div>
              <div className='flex flex-col gap-5'>
                <div>
                  <h1 className='font-bold'>Bag</h1>
                  <h2 className='text-[#aab0ba]'>Quantity: 1</h2>
                </div>

                <div>
                  <h1 className='text-[#3b5399] font-bold'>NPR XXXXX</h1>
                  <del className='text-[#aab0ba]'>NPR XXXXX</del>
                </div>
              </div>
            </div>
            <div>
              <div className='bg-[#fef2f2] rounded-lg p-2'>
                <MdOutlineDeleteOutline
                  size={24}
                  className='text-[#f47878] cursor-pointer'
                />
              </div>
            </div>
          </div>
          <div className='bg-[#f9fafb] rounded-lg p-2 flex justify-between gap-5 pb-5'>
            <div className='flex items-center gap-5'>
              <div className='border rounded-lg w-24 h-24 '>
                <img
                  src='https://portal.bixilife.com/storage/category/9510b885-1ca1-4eee-a62f-997221ca4dc81736325474.jpeg'
                  alt='img'
                  className='rounded-lg object-contain w-full h-full'
                />
              </div>
              <div className='flex flex-col gap-5'>
                <div>
                  <h1 className='font-bold'>Bag</h1>
                  <h2 className='text-[#aab0ba]'>Quantity: 1</h2>
                </div>

                <div>
                  <h1 className='text-[#3b5399] font-bold'>NPR XXXXX</h1>
                  <del className='text-[#aab0ba]'>NPR XXXXX</del>
                </div>
              </div>
            </div>
            <div>
              <div className='bg-[#fef2f2] rounded-lg p-2'>
                <MdOutlineDeleteOutline
                  size={24}
                  className='text-[#f47878] cursor-pointer'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='lg:col-span-3 border rounded-lg p-5 h-fit order-1 lg:order-2'>
        <div className='flex flex-col gap-5'>
          <h1 className='border-b pb-2 text-[#82828a] font-bold'>
            Order Summary
          </h1>
          <div className='border-b pb-2 flex justify-between'>
            <h1>Sub Total: </h1>
            <h1>NRP XXXXXX </h1>
          </div>
          <NavLink to='/checkout'>
            <button className='bg-[#1e3a8a] text-white p-2 rounded-lg w-full cursor-pointer'>
              Proceed to checkout
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Cart;
