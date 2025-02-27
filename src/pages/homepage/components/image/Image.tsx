const Image = () => {
  return (
    <div className=' px-6 md:px-12'>
      <img
        src='https://theoodie.com/cdn/shop/files/MANCHESTER_CITY_Home_Page_Banner_3840x1400px.jpg?v=1738402887&width=1920'
        alt=''
        className='rounded-xl object-contain md:flex hidden'
      />
      <img
        src='https://theoodie.com/cdn/shop/files/Untitled_design_32_x300.png?v=1738648060'
        alt=''
        className='rounded-xl object-contain md:hidden'
      />
    </div>
  );
};

export default Image;
