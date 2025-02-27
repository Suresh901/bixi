import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

interface Item {
  id: number;
  image: string;
  value: string;
}

const items: Item[] = [
  {
    id: 1,
    image:
      'https://theoodie.com/cdn/shop/files/20221005_OODIE_6202.jpg?v=1720743080',
    value: 'account',
  },
  {
    id: 2,
    image:
      'https://theoodie.com/cdn/shop/files/Oddie-Day-one552_945fd540-eeb0-4a40-8373-46f600b3cc55.jpg?v=1719387763',
    value: 'password',
  },
  {
    id: 3,
    image:
      'https://portal.bixilife.com/storage/category/9510b885-1ca1-4eee-a62f-997221ca4dc81736325474.jpeg',
    value: 'new',
  },
  {
    id: 4,
    image:
      'https://theoodie.com/cdn/shop/files/20221005_OODIE_6279.jpg?v=1719387644',
    value: 'old',
  },
  {
    id: 5,
    image:
      'https://theoodie.com/cdn/shop/files/20221005_OODIE_6279.jpg?v=1719387644',
    value: 'sold',
  },
  {
    id: 6,
    image:
      'https://theoodie.com/cdn/shop/files/20221005_OODIE_6279.jpg?v=1719387644',
    value: 'a',
  },
  {
    id: 7,
    image:
      'https://theoodie.com/cdn/shop/files/20221005_OODIE_6279.jpg?v=1719387644',
    value: 'b',
  },
  {
    id: 8,
    image:
      'https://theoodie.com/cdn/shop/files/20221005_OODIE_6279.jpg?v=1719387644',
    value: 'c',
  },
  {
    id: 9,
    image:
      'https://theoodie.com/cdn/shop/files/20221005_OODIE_6279.jpg?v=1719387644',
    value: 'd',
  },
];

export default function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className='grid gap-4 xl:px-20'>
      {/* Main Image Slider */}
      <Swiper
        loop={true}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className='mySwiper2 w-full'
      >
        {items.map(item => (
          <SwiperSlide key={item.id}>
            <img src={item.image} alt={item.value} className='w-full h-auto' />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Slider */}
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className='mySwiper w-full'
      >
        {items.map(item => (
          <SwiperSlide key={item.id}>
            <img
              src={item.image}
              alt={item.value}
              className='w-full h-auto rounded-lg'
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom CSS for Active Border */}
      <style jsx>{`
        .mySwiper .swiper-slide-thumb-active {
          border: 2px solid black; /* Purple border on active thumbnail */
          border-radius: 10px; /* Optional: Add rounded corners */
        }
      `}</style>
    </div>
  );
}
