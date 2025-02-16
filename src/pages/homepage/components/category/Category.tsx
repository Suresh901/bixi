import CategorySlider from '../slider/CategorySlider';

const Category = () => {
  return (
    <div className='md:px-12 pt-20 relative'>
      <div className='flex justify-between'>
        <h1 className='font-bold text-3xl'>Shop By Category</h1>
        <button className='cursor-pointer text-xl'>View All</button>
      </div>
      <div className='py-10'>
        <CategorySlider />
      </div>
    </div>
  );
};

export default Category;
