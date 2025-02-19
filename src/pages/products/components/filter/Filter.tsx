const Filter = () => {
  return (
    <div className=' w-full'>
      <h1 className='font-bold text-xl'>Filter </h1>
      <div className='pt-2 flex flex-col gap-1'>
        <div className='flex gap-5'>
          <input type='checkbox' className='w-4 ' />
          <h1>cotton</h1>
        </div>
        <div className='flex gap-5'>
          <input type='checkbox' className='w-4' />
          <h1>cotton</h1>
        </div>
        <div className='flex gap-5'>
          <input type='checkbox' className='w-4' />
          <h1>cotton</h1>
        </div>
        <div className='flex flex-col gap-5 mt-10'>
          <h1 className='font-bold'>Price</h1>
          <input type='range' className='w-[80%]' />
        </div>
      </div>
    </div>
  );
};

export default Filter;
