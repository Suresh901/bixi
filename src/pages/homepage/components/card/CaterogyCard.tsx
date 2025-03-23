interface Item {
  id: number;
  title: string;
  image: string;
}

interface Props {
  item: Item;
}

const CaterogyCard = ({ item }: Props) => {
  return (
    <div className='p-2'>
      <div className='flex flex-col items-center pb-5'>
        <div className=' w-full px-6 py-5 z-40'>
          <img src={item.image} alt='' className='h-86 w-full object-cover' />
        </div>
        <div className='drop-shadow-lg w-full bg-white mt-[-6rem] flex flex-col items-center justify-end h-[160px] pb-8 rounded-md'>
          <h1 className='font-bold'> {item.title}</h1>
        </div>
      </div>
    </div>
  );
};

export default CaterogyCard;
