import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/ui/accordion/accordion";
import { FC } from "react";

export const AccordionListWidget: FC = () => {
  return (
    <div className="bg-bg-surface4">
      <Accordion type="multiple">
        <AccordionItem value="item-1">
          <AccordionTrigger>Hey</AccordionTrigger>
          <AccordionContent>Hello guys</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Hey</AccordionTrigger>
          <AccordionContent>Hello guys</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
