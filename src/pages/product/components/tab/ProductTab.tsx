import { Tabs, TabsContent, TabsList, TabsTrigger } from '../tab/Tabs';
import { Card } from '../tab/Tabs';
import { ScrollArea } from '../scrollArea/ScrollArea';

interface Item {
  id: number;
  image: string;
  value: string;
}

const items: Item[] = [
  {
    id: 1,
    image:
      'https://theoodie.com/cdn/shop/files/20221005_OODIE_6202.jpg?v=1720743080',
    value: 'account',
  },
  {
    id: 2,
    image:
      'https://theoodie.com/cdn/shop/files/Oddie-Day-one552_945fd540-eeb0-4a40-8373-46f600b3cc55.jpg?v=1719387763',
    value: 'password',
  },
  {
    id: 3,
    image:
      'https://theoodie.com/cdn/shop/files/20221005_OODIE_6279.jpg?v=1719387644',
    value: 'new',
  },
  {
    id: 4,
    image:
      'https://theoodie.com/cdn/shop/files/20221005_OODIE_6279.jpg?v=1719387644',
    value: 'old',
  },
  {
    id: 5,
    image:
      'https://theoodie.com/cdn/shop/files/20221005_OODIE_6279.jpg?v=1719387644',
    value: 'bold',
  },
];

const ProductTab = () => {
  return (
    <div className=''>
      <Tabs defaultValue='account' className='w-[850px] flex '>
        <ScrollArea>
          <TabsList className='flex flex-col'>
            {items.map((item, index) => {
              return (
                <TabsTrigger key={index} value={item.value}>
                  <img src={item.image} alt='image' />
                </TabsTrigger>
              );
            })}
          </TabsList>
        </ScrollArea>

        <div className=''>
          {items.map((item, index) => {
            return (
              <TabsContent value={item.value}>
                <Card className='w-[700px]'>
                  <div key={index}>
                    <img
                      src={item.image}
                      alt='image'
                      className='w-full h-full'
                    />
                  </div>
                </Card>
              </TabsContent>
            );
          })}
        </div>
      </Tabs>
    </div>
  );
};

export default ProductTab;
