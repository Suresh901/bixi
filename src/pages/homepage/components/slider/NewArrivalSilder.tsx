import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import NewArrivalsCard from '../card/NewArrivalsCard';

interface Products {
  id: number;
  title: string;
  slug: string;
  sku: string;
  image: string;
  short_description: string;
  price: number;
  discount: number;
}

const NewArrivalSilder = ({ newArrival }: { newArrival: Products[] }) => {
  const sliderRef = useRef<Slider | null>(null);
  const [hovered, setHovered] = useState<boolean>(false);
  // const [activeIndex, setActiveIndex] = useState(0);

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
  // const goToSlide = (index: number) => {
  //   sliderRef.current?.slickGoTo(index);
  // };

  return (
    <div
      className='relative'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Slider ref={sliderRef} {...settings}>
        {newArrival.map(item => (
          <NewArrivalsCard item={item} />
        ))}
      </Slider>

      {/* Custom Dots */}
      {/* <div className='flex justify-center mt-4 '>
        {Array.from({ length: Math.ceil(newArrival.length / 3) }).map(
          (_, pageIndex) => (
            <button
              key={pageIndex}
              className={`h-1 w-10 md:w-16 mx-1 my-1 rounded-full transition-all duration-300 ${
                pageIndex === Math.floor(activeIndex / 4)
                  ? 'bg-[#f87c56]'
                  : 'bg-gray-500'
              } cursor-pointer`}
              onClick={() => goToSlide(pageIndex * 4)}
            ></button>
          ),
        )}
      </div> */}

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
