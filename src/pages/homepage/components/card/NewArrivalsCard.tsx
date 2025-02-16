import { useState } from 'react';

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

const NewArrivalsCard = ({ item }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className='cursor-pointer p-4 rounded-lg relative group z-[100] overflow-hidden  '>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className='overflow-hidden rounded-lg'
      >
        <img
          src={isHovered ? item.image2 : item.image}
          alt=''
          className='rounded-lg transition-transform duration-300 transform hover:scale-110'
        />
        <span className='bg-[#F7921E] p-1 text-[18px] text-white px-3 rounded-md absolute top-[20px] right-5'>
          New Arrival
        </span>
      </div>
      <div className='p-4 text-[#6e7174]'>
        <h1 className='font-bold text-2xl'>{item.title}</h1>
        <h1 className='text-lg'>{item.desc}</h1>
        <h1 className='font-bold text-xl'>${item.price}</h1>
      </div>
    </div>
  );
};

export default NewArrivalsCard;
