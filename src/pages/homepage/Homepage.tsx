import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Category from './components/category/Category';
import HeroSection from './components/herosection/HeroSection';
import NewArrival from './components/newArrival/NewArrival';

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Category />
      <NewArrival />
      <Footer />
    </div>
  );
};

export default Homepage;
