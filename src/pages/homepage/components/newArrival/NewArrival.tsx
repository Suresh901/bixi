import NewArrivalSilder from '../slider/NewArrivalSilder';

const NewArrival = () => {
  return (
    <div className='md:px-12 pt-20 '>
      <div className='flex justify-between'>
        <h1 className='font-bold text-3xl'>Shop New Arrival</h1>
        <button className='cursor-pointer text-xl'>View All</button>
      </div>
      <div className='py-10'>
        <NewArrivalSilder />
      </div>
    </div>
  );
};

export default NewArrival;
