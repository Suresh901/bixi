import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef, useState } from 'react';
// import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import CaterogyCard from '../card/CaterogyCard';
import { NavLink } from 'react-router';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

interface SliderItem {
  id: number;
  title: string;
  image: string;
}

const CategorySlider = ({ category }: { category: SliderItem[] }) => {
  const sliderRef = useRef<Slider | null>(null);
  const [hovered, setHovered] = useState<boolean>(false);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    pauseOnHover: true,
    nextArrow: <></>,
    prevArrow: <></>,
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

  return (
    <div
      className='relative'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <NavLink to='/products'>
        <Slider ref={sliderRef} {...settings}>
          {category.map((item: SliderItem) => (
            <CaterogyCard key={item.id} item={item} />
          ))}
        </Slider>
      </NavLink>

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

export default CategorySlider;
