import * as React from 'react';
import { cn } from '../../utils/index';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../navigationmenu/NavigationMenu';
import { useQuery } from '@tanstack/react-query';
const apiUrl = import.meta.env.VITE_API_URL;

interface Category {
  id: number;
  title: string;
  image: string;
  status: number;
  slug: string;
  children: [
    {
      id: number;
      title: string;
      image: string;
      status: number;
      slug: string;
    },
  ];
}

export function NavMenu() {
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
    data: categoryData,
    isLoading,
    isError,
  } = useQuery<Category[]>({
    queryKey: ['categoryData'],
    queryFn: fetchCategories,
  });
  // if (!!categoryData) {
  //   // console.log(category[0].image);
  //   console.log(categoryData);
  // }

  if (isLoading) return <p className='text-center'>Loading...</p>;
  if (isError) return <p>Error fetching team members.</p>;
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className='flex gap-8'>
          <NavigationMenuLink
            className={`text-sm lg:text-lg font-semibold cursor-pointer`}
          >
            Best Seller
          </NavigationMenuLink>
          <NavigationMenuLink
            className={`text-sm lg:text-lg font-semibold cursor-pointer`}
          >
            New
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className='text-sm lg:text-lg'>
            Categories
          </NavigationMenuTrigger>
          <NavigationMenuContent className='bg-white'>
            <ul className='grid grid-cols-3 gap-5 p-6 md:w-[800px]'>
              {categoryData?.map(item => (
                <li key={item.id}>
                  {/* Main Category */}
                  <h3 className='font-bold cursor-pointer'>{item.title}</h3>
                  {/* Children Categories */}
                  {item.children?.length > 0 && (
                    <ul className='mt-2 space-y-1'>
                      {item.children.map(child => (
                        <li
                          key={child.id}
                          className='text-sm text-gray-600 cursor-pointer'
                        >
                          {child.title}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className='text-sm lg:text-lg'>
            Accessories
          </NavigationMenuTrigger>
          <NavigationMenuContent className='bg-white'>
            <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
              <h1>item</h1>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
