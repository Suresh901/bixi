import { Sheet, SheetContent, SheetTrigger } from './Menu';
import { RxHamburgerMenu } from 'react-icons/rx';

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button>
          <RxHamburgerMenu />
        </button>
      </SheetTrigger>
      <SheetContent className='bg-white w-full h-full'>
        <div className='flex flex-col items-center justify-center gap-5 font-semibold h-screen'>
          <div>
            <h1>Getting Started</h1>
          </div>
          <div>
            <h1>Components</h1>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
