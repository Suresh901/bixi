import { useState } from 'react';
const Counter = () => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count > 1 ? count - 1 : 1);
  return (
    <div className='flex flex-col gap-5'>
      <h1 className='text-xl font-bold'>Quantity</h1>
      <div className='flex items-center gap-4'>
        <button
          className='border px-2 rounded-md text-xl'
          onClick={handleDecrement}
        >
          {' '}
          -{' '}
        </button>
        <div className='text-xl'>{count}</div>
        <button
          className='border px-2 rounded-md text-xl'
          onClick={handleIncrement}
        >
          {' '}
          +{' '}
        </button>
      </div>
    </div>
  );
};

export default Counter;
