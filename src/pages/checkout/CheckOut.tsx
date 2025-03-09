import { FaShippingFast } from 'react-icons/fa';
import { LiaWalletSolid } from 'react-icons/lia';

const CheckOut = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 justify-between px-6 md:px-12 pt-10 '>
      <div className='pb-10 w-full'>
        <h1 className='font-bold text-2xl pb-5'>Checkout</h1>
        <div>
          <h1 className=' font-bold pb-5'>Review Your Cart</h1>
          <div className=' flex flex-col gap-5'>
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
                </div>
              </div>
            </div>
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
                </div>
              </div>
            </div>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='md:px-12 flex flex-col gap-2 md:gap-5 w-full'>
        <h1 className='font-bold text-xl'>Delivery Details</h1>
        <input
          type='text'
          placeholder='Enter your address'
          className='border px-2 py-1 rounded-lg w-full'
        />
        <div className='flex flex-col lg:flex-row gap-2'>
          <input
            type='text'
            placeholder='Select a province'
            className='border px-2 py-1 rounded-lg w-full'
          />
          <input
            type='text'
            placeholder='Select a district'
            className='border px-2 py-1 rounded-lg w-full'
          />
        </div>
        <h1 className='font-bold text-xl'>Payment Method</h1>
        <div className='flex flex-col lg:flex-row gap-2'>
          <button className='flex items-center gap-2 border border-[#172554] p-2 w-full rounded-lg'>
            <FaShippingFast />
            Cash on Delivery
          </button>
          <button
            className='flex items-center gap-2 border p-2 w-full cursor-not-allowed opacity-50 rounded-lg'
            disabled={true}
          >
            <LiaWalletSolid />
            <h1>Wallet (Coming Soon)</h1>
          </button>
        </div>
        <button className='text-white bg-[#172554] p-2 w-full rounded-lg text-center font-semibold'>
          Checkout Now
        </button>
      </div>
    </div>
  );
};

export default CheckOut;
