import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Category from './components/category/Category';
import HeroSection from './components/herosection/HeroSection';
import Image from './components/image/Image';
import NewArrival from './components/newArrival/NewArrival';

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Category />
      <Image />
      <NewArrival />
      <Footer />
    </div>
  );
};

export default Homepage;
