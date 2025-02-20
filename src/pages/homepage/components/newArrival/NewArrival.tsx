import NewArrivalSilder from '../slider/NewArrivalSilder';

const NewArrival = () => {
  return (
    <div className='md:px-12 pt-20 '>
      <div className='flex justify-between px-4'>
        <h1 className='font-bold text-xl md:text-3xl'>Shop New Arrival</h1>
        <button className='cursor-pointer text-md md:text-xl'>View All</button>
      </div>
      <div className='py-10'>
        <NewArrivalSilder />
      </div>
    </div>
  );
};

export default NewArrival;
