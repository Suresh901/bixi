const colors = [
  { id: 'black', label: 'Black' },
  { id: 'white', label: 'White' },
  { id: 'red', label: 'Red' },
  { id: 'blue', label: 'Blue' },
];

const Filter = () => {
  return (
    <div className='w-full hidden lg:flex sticky top-10 left-0 h-screen overflow-y-auto px-6'>
      <div className='w-full flex flex-col gap-2'>
        <h1 className='font-bold text-3xl'>Filter</h1>
        <h1 className='font-bold text-lg'>Color</h1>

        <div className='flex flex-col gap-5'>
          <div className='flex flex-col gap-2 border-b pb-4'>
            {colors.map(color => (
              <div key={color.id} className='flex gap-5'>
                <input type='checkbox' id={color.id} className='w-4' />
                <label htmlFor={color.id}>{color.label}</label>
              </div>
            ))}
          </div>

          <div className='flex flex-col gap-4'>
            <h1 className='font-bold text-lg'>Color</h1>
            <div className='flex flex-col gap-2'>
              {colors.map(color => (
                <div key={color.id} className='flex gap-5'>
                  <input type='checkbox' id={`${color.id}-2`} className='w-4' />
                  <label htmlFor={`${color.id}-2`}>{color.label}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
