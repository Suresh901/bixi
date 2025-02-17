import Category from './components/category/Category';
import HeroSection from './components/herosection/HeroSection';
import Image from './components/image/Image';
import NewArrival from './components/newArrival/NewArrival';

const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <Category />
      <Image />
      <NewArrival />
    </div>
  );
};

export default Homepage;
