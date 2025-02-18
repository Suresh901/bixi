import { useState } from 'react';
import StarRating from '../starRating/StarRating';
interface Item {
  id: number;
  title: string;
  image: string;
  image2: string;
  desc: string;
  price: number;
}

interface Props {
  item: Item;
}
const ProductsCard = ({ item }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className='cursor-pointer p-4 rounded-lg relative'>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className='overflow-hidden rounded-lg'
      >
        <img
          src={isHovered ? item.image2 : item.image}
          alt=''
          className='rounded-lg transition-transform duration-300 transform hover:scale-110 '
        />
      </div>

      {/* Cart button */}
      <button className='group bg-white p-2 rounded-full absolute bottom-7 right-4 hover:w-36 flex gap-2 transition-all duration-300 ease-in-out'>
        <img
          src='data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20class%3D%22lucide-icon%20lucide%20lucide-shopping-bag%22%3E%3C!--%5B--%3E%3C!----%3E%3Cpath%20d%3D%22M6%202%203%206v14a2%202%200%200%200%202%202h14a2%202%200%200%200%202-2V6l-3-4Z%22%3E%3C!----%3E%3C%2Fpath%3E%3C!----%3E%3C!----%3E%3Cpath%20d%3D%22M3%206h18%22%3E%3C!----%3E%3C%2Fpath%3E%3C!----%3E%3C!----%3E%3Cpath%20d%3D%22M16%2010a4%204%200%200%201-8%200%22%3E%3C!----%3E%3C%2Fpath%3E%3C!----%3E%3C!--%5D--%3E%3C!----%3E%3C!----%3E%3C!----%3E%3C!----%3E%3C%2Fsvg%3E'
          alt=''
        />
        <span className='hidden group-hover:block'>Add to cart</span>
      </button>

      <div className='p-4 text-[#6e7174] flex flex-col gap-2'>
        <h1 className='font-bold text-2xl'>{item.title}</h1>
        <h1 className='text-lg'>{item.desc}</h1>
        <div className='flex items-center gap-2'>
          <StarRating />
          <span>(122)</span>
        </div>
        <h1 className='font-bold text-xl'>${item.price}</h1>
      </div>
    </div>
  );
};

export default ProductsCard;
