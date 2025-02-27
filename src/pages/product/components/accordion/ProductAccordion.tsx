import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './Accordion';

const accordionData = [
  {
    id: 'item-1',
    title: 'Product Details',
    content:
      'This product is made from high-quality materials and features a modern design. It is highly durable and appreciated by customers for its performance.',
  },
  {
    id: 'item-2',
    title: 'Material And Care',
    content:
      'Material: 100% premium-quality fabric. Care: Wipe clean with a soft cloth, avoid direct sunlight, and use mild detergent if necessary.',
  },
  {
    id: 'item-3',
    title: 'Shipping',
    content:
      'We offer shipping within 3-5 business days. Check available options at checkout for free delivery offers. International orders may take longer to arrive.',
  },
];

export function ProductAccordion() {
  return (
    <Accordion
      type='single'
      collapsible
      className='w-full'
      defaultValue='item-1'
    >
      {accordionData.map(item => (
        <AccordionItem key={item.id} value={item.id}>
          <AccordionTrigger className='text-lg md:text-xl'>
            {item.title}
          </AccordionTrigger>
          <AccordionContent className='text-sm md:text-lg'>
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
