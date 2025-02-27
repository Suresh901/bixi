import { SortDropDown } from './components/dropdown/SortDropDown';
import Filter from './components/filter/Filter';
import ProductsCard from './components/productsCard/ProductsCard';

const sliderObj = [
  {
    id: 1,
    title: 'Dress',
    desc: 'This is a nice dress',
    price: 50,
    image:
      'https://theoodie.com/cdn/shop/files/002025RR-Original_Oodies_Category_Tiles_1080_x_1489_-5.jpg?v=1738402880&width=450',
    image2:
      'https://theoodie.com/cdn/shop/files/002025RR-Robes_Category_Tiles_1080_x_1489_-2.jpg?v=1737090504&width=450',
  },
  {
    id: 2,
    title: 'Shop Originals',
    desc: 'This is a nice original product',
    price: 60,
    image:
      'https://theoodie.com/cdn/shop/files/002025RR-Original_Oodies_Category_Tiles_1080_x_1489_-5.jpg?v=1738402880&width=450',
    image2:
      'https://theoodie.com/cdn/shop/files/002025RR-Robes_Category_Tiles_1080_x_1489_-2.jpg?v=1737090504&width=450',
  },
  {
    id: 3,
    title: 'Shop Originals',
    desc: 'Another original product',
    price: 70,
    image:
      'https://theoodie.com/cdn/shop/files/002025RR-Original_Oodies_Category_Tiles_1080_x_1489_-5.jpg?v=1738402880&width=450',
    image2:
      'https://theoodie.com/cdn/shop/files/002025RR-Robes_Category_Tiles_1080_x_1489_-2.jpg?v=1737090504&width=450',
  },
  {
    id: 4,
    title: 'Shop Originals',
    desc: 'Yet another original product',
    price: 80,
    image:
      'https://theoodie.com/cdn/shop/files/002025RR-Original_Oodies_Category_Tiles_1080_x_1489_-5.jpg?v=1738402880&width=450',
    image2:
      'https://theoodie.com/cdn/shop/files/002025RR-Robes_Category_Tiles_1080_x_1489_-2.jpg?v=1737090504&width=450',
  },
];

const Products = () => {
  return (
    <div className='py-20 md:px-12 '>
      <div className='text-center font-bold text-3xl pb-5'>
        <h1>Products</h1>
      </div>
      <div className='flex justify-between md:p-12  '>
        <div className='w-1/3 hidden lg:flex'>
          <Filter />
        </div>

        <div className=' flex flex-col gap-5'>
          <div className='flex gap-5 items-center md:justify-end px-6'>
            <h1 className='font-bold '>Sort By: </h1>
            <div className='border border-gray-400 p-1 rounded-lg'>
              <SortDropDown />
            </div>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3  '>
            {sliderObj.map(item => (
              <ProductsCard item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
