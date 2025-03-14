import { NavLink } from 'react-router';
import CategorySlider from '../slider/CategorySlider';
import { useQuery } from '@tanstack/react-query';
const apiUrl = import.meta.env.VITE_API_URL;

interface Category {
  id: number;
  title: string;
  image: string;
  status: number;
}

const Category = () => {
  const fetchCategories = async () => {
    const response = await fetch(`${apiUrl}/category`);
    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }
    const data = await response.json();
    // console.log(data.data);
    return data.data;
  };

  const {
    data: category,
    isLoading,
    isError,
  } = useQuery<Category[]>({
    queryKey: ['category'],
    queryFn: fetchCategories,
  });
  if (!!category) {
    // console.log(category[0].image);
    // console.log(category);
  }

  if (isLoading) return <p className='text-center'>Loading...</p>;
  if (isError) return <p>Error fetching team members.</p>;

  return (
    <div className='md:px-12 pt-20 relative'>
      <div className='flex justify-between px-4'>
        <h1 className='font-bold text-lg md:text-3xl'>Shop By Category</h1>
        <NavLink to='/products'>
          <button className='cursor-pointer text-md md:text-xl'>
            View All
          </button>
        </NavLink>
      </div>
      <div className='py-10 px-6'>
        {category && <CategorySlider category={category} />}
      </div>
    </div>
  );
};

export default Category;
