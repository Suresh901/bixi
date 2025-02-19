import { FaStar } from 'react-icons/fa';

const StarRating = () => {
  return (
    <div className='flex sm:gap-1'>
      {[...Array(5)].map(index => (
        <FaStar key={index} className='text-[#ffcc1d]' />
      ))}
    </div>
  );
};

export default StarRating;
