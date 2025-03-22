import { useQuery } from '@tanstack/react-query';
import { SortDropDown } from '../products/components/dropdown/SortDropDown';
import Filter from '../products/components/filter/Filter';
import CatrgoriesCard from './components/CatrgoriesCard';
const apiUrl = import.meta.env.VITE_API_URL;

interface Category {
  id: number;
  title: string;
  image: string;
  status: number;
}

const CategoryPage = () => {
  const fetchCategories = async () => {
    const response = await fetch(`${apiUrl}/category`);
    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }
    const data = await response.json();
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
  // console.log(category);

  if (isLoading) return <p className='text-center'>Loading...</p>;
  if (isError) return <p>Error fetching team members.</p>;
  return (
    <div className='py-20 lg:px-12 sm:px-6 '>
      <div className='text-center font-bold text-3xl pb-5'>
        <h1>Categories</h1>
      </div>
      <div className='flex justify-between  '>
        {/* <div className='w-1/3 hidden lg:flex xl:px-12 '>
          <Filter />
        </div> */}

        <div className=' flex flex-col gap-5'>
          <div className='md:hidden px-6'>
            <div className='border rounded-md px-5 py-2 text-center'>
              Filter
            </div>
          </div>
          <div className='flex gap-5 items-center md:justify-end px-6'>
            <h1 className='font-bold '>Sort By: </h1>
            <div className='border border-gray-400 p-1 rounded-lg'>
              <SortDropDown />
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 md:px-6 '>
            {category?.map(item => (
              <CatrgoriesCard item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
