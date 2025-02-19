import ProductsCard from '../products/components/productsCard/ProductsCard';
import Description from './components/description/Description';
import ProductTab from './components/tab/ProductTab';

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

const Product = () => {
  return (
    <div className='px-12'>
      <div className='flex  my-10'>
        <div className=''>
          <ProductTab />
        </div>
        <div className='px-12 w-1/2'>
          <Description />
        </div>
      </div>
      <div>
        <h1 className='font-bold text-2xl text-center py-4'>
          Recommended Product
        </h1>
        <div className='grid grid-cols-4 py-5'>
          {sliderObj.map(item => {
            return <ProductsCard item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Product;
