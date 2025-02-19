import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './Dropdown';
import { IoIosArrowDown } from 'react-icons/io';

export function SortDropDown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className='flex items-center gap-5 p-1'>
          <button className='outline-none'>Recommended </button>
          <IoIosArrowDown />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56 z-[10] bg-white mt-1 '>
        <DropdownMenuItem>
          <span>Recommended</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span>Price: High to Low</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span>Price: Low to High</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span>A to Z</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span>Z to A</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span>Newest</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span>Oldest</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
