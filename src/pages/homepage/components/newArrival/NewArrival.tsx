import { useQuery } from '@tanstack/react-query';
import NewArrivalSilder from '../slider/NewArrivalSilder';
const apiUrl = import.meta.env.VITE_API_URL;

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

const NewArrival = () => {
  const fetchNewArrival = async () => {
    const response = await fetch(`${apiUrl}/products/latest`);
    if (!response.ok) {
      throw new Error('Failed to fetch team members');
    }
    const data = await response.json();
    // console.log(data.data);
    return data.data;
  };

  const {
    data: newArrival,
    isLoading,
    isError,
  } = useQuery<Products[]>({
    queryKey: ['newArrival'],
    queryFn: fetchNewArrival,
  });

  if (isLoading) return <p className='text-center'>Loading...</p>;
  if (isError) return <p>Error fetching team members.</p>;

  return (
    <div className='md:px-12 pt-20 '>
      <div className='flex justify-between px-4'>
        <h1 className='font-bold text-xl md:text-3xl'>Shop New Arrival</h1>
        <button className='cursor-pointer text-md md:text-xl'>View All</button>
      </div>
      <div className='py-10'>
        {newArrival && <NewArrivalSilder newArrival={newArrival} />}
      </div>
    </div>
  );
};

export default NewArrival;
