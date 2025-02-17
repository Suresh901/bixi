import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import NewArrivalsCard from '../card/NewArrivalsCard';

interface SliderItem {
  id: number;
  title: string;
  image: string;
  image2: string;
  desc: string;
  price: number;
}

const sliderObj: SliderItem[] = [
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

const NewArrivalSilder: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);
  const [hovered, setHovered] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: false, // Disable default dots
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    speed: 1000,
    pauseOnHover: true,
    nextArrow: <></>,
    prevArrow: <></>,
    beforeChange: (oldIndex: number, newIndex: number) =>
      setActiveIndex(newIndex), // Track active slide
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handlePrevClick = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current?.slickNext();
  };

  // Handle dot click navigation
  const goToSlide = (index: number) => {
    sliderRef.current?.slickGoTo(index);
  };

  return (
    <div
      className='relative'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Slider ref={sliderRef} {...settings}>
        {sliderObj.map(item => (
          <NewArrivalsCard item={item} />
        ))}
      </Slider>

      {/* Custom Dots */}
      <div className='flex justify-center mt-4 '>
        {sliderObj.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-16 mx-1 my-1 rounded-full transition-all duration-300 ${
              index === activeIndex ? 'bg-[#f87c56]' : 'bg-gray-500'
            } cursor-pointer`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>

      {/* Custom Navigation Arrows */}
      <div
        className={`flex justify-end transition-opacity duration-300 ${
          hovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <FaAngleLeft
          className='h-8 w-8 cursor-pointer absolute top-[15rem] left-0 drop-shadow-xl bg-white rounded-md'
          onClick={handlePrevClick}
        />
        <FaAngleRight
          className='h-8 w-8 cursor-pointer absolute top-[15rem] right-0 shadow-xl bg-white rounded-md'
          onClick={handleNextClick}
        />
      </div>
    </div>
  );
};

export default NewArrivalSilder;
