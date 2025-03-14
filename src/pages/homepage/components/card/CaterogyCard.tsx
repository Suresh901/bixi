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
    <div>
      <div
        key={item.id}
        className='h-[Hug (382.94px)] cursor-pointer p-2 rounded-lg relative group z-[100] overflow-hidden'
      >
        <div className='absolute -bottom-20 left-0 right-0 flex flex-col items-center justify-center group-hover:bottom-20 duration-500'>
          <div className='text-center z-[10]'>
            <h1 className='font-semibold text-white'>{item.title}</h1>
          </div>
        </div>
        <div>
          <img
            src={item.image}
            alt='image'
            className='rounded-md group-hover:brightness-50 w-100 h-100 object-cover'
          />
        </div>
      </div>
    </div>
  );
};

export default CaterogyCard;
