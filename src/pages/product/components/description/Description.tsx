import StarRating from '../../../products/components/starRating/StarRating';
import { ProductAccordion } from '../accordion/ProductAccordion';
import Counter from '../counter/Counter';

const Description = () => {
  return (
    <div className='flex flex-col gap-5'>
      <div className='flex flex-col gap-5'>
        <div className='flex flex-col gap-2'>
          <h1 className='font-bold text-2xl md:text-3xl pt-5'>Dress</h1>
          <h2 className='text-lg md:text-xl'>This is product</h2>
          <StarRating />
        </div>
        <h1 className='font-bold text-xl md:text-2xl'>$65</h1>
      </div>
      <div>
        <Counter />
      </div>
      <button className='bg-[#f87c56] text-white text-lg md:text-xl rounded-full p-2 w-full'>
        Add To Cart
      </button>
      <div className='py-10'>
        <ProductAccordion />
      </div>
    </div>
  );
};

export default Description;
