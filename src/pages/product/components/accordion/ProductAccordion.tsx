import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './Accordion';

export function ProductAccordion() {
  return (
    <Accordion
      type='single'
      collapsible
      className='w-full'
      defaultValue='item-1'
    >
      <AccordionItem value='item-1'>
        <AccordionTrigger>Product Details</AccordionTrigger>
        <AccordionContent>
          This product is made from high-quality materials and features a modern
          design. It is highly durable and appreciated by customers for its
          performance.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-2'>
        <AccordionTrigger>Material And Care</AccordionTrigger>
        <AccordionContent>
          Material: 100% premium-quality fabric. Care: Wipe clean with a soft
          cloth, avoid direct sunlight, and use mild detergent if necessary.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-3'>
        <AccordionTrigger>Shipping</AccordionTrigger>
        <AccordionContent>
          We offer shipping within 3-5 business days. Check available options at
          checkout for free delivery offers. International orders may take
          longer to arrive.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
