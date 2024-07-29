import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckOutlined } from "@ant-design/icons";
import { useTreatmentList } from "@/lib/store/regHospitalForm";

type Props = {};

function InputAccordion({}: Props) {
  const { availableTreatment, selectTreat } = useTreatmentList();

  return (
    <Accordion type="single" collapsible>
      {availableTreatment.map(({ category, treatments }, categoryIndex) => (
        <AccordionItem value={category} key={category}>
          <AccordionTrigger className="text-sm text-cyan-800 hover:no-underline">
            {category}
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-y-3 px-2">
            {treatments.map(({ title, value, selected }, treatIndex) => (
              <div
                key={value}
                className="cursor-pointer"
                onClick={() => selectTreat(categoryIndex, treatIndex)}
              >
                <div className="itemc-center flex justify-between">
                  <p className="text-cyan-900">{title}</p>
                  {selected && <CheckOutlined className="text-green-800" />}
                </div>

                <hr className="mt-2" />
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default InputAccordion;
