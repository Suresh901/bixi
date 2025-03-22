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
      <div
        key={item.id}
        className='cursor-pointer p-4 rounded-lg shadow-lg bg-white'
      >
        <div className='p-2'>
          <img
            src={item.image}
            alt={item.title}
            className='rounded-md w-full h-64 object-cover'
          />
        </div>
        <div className='flex flex-col items-center justify-center duration-500'>
          <div className='text-center'>
            <h1 className='font-semibold text-lg'>{item.title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaterogyCard;
