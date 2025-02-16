interface Item {
  id: number;
  title: string;
  image: string;
  desc: string;
  price: number;
}

interface Props {
  item: Item;
}

const NewArrivalsCard = ({ item }: Props) => {
  return (
    <div className='cursor-pointer p-4 rounded-lg relative group z-[100] overflow-hidden '>
      <div>
        <img
          src='https://theoodie.com/cdn/shop/files/002025RR-Original_Oodies_Category_Tiles_1080_x_1489_-5.jpg?v=1738402880&width=450'
          alt=''
          className='rounded-lg'
        />
        <span className='bg-[#F7921E] p-1 text-[18px] text-white px-3 rounded-md absolute bottom-[150px] left-5'>
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
