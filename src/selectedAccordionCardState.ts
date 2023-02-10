import faker from "faker";
import { nanoid } from "nanoid";
import { ComponentType } from "react";
import { atomFamily } from "recoil";
import { AccordionCardContentProps } from "./AccordionCardContent";
import { AccordionCardHeaderProps } from "./AccordionCardHeader";

export type CardData = {
  id: string;
  label: string;
  content: string;
};

export const defaultAccordionData: CardData[] = () => {
  return [
    {
      id: nanoid(),
      label: faker.name.findName(),
      content: faker.lorem.sentence(11, 7)
    },
    {
      id: nanoid(),
      label: faker.name.findName(),
      content: faker.lorem.sentence(11, 7)
    },
    {
      id: nanoid(),
      label: faker.name.findName(),
      content: faker.lorem.sentence(11, 7)
    },
    {
      id: nanoid(),
      label: faker.name.findName(),
      content: faker.lorem.sentence(11, 7)
    },
    {
      id: nanoid(),
      label: faker.name.findName(),
      content: faker.lorem.sentence(11, 7)
    }
  ];
};

type AccordionSelection = string[];

/**
 * Store a list of selected `nanoid` generated string id values
 * for each accordion string name.
 * @param - get: accordionId: string
 * @param - set: accordionId: stirng, cardId: string
 * @example - {'myAccordion': ['2edghy8ujh', 'bgfty876yg', '87yhgftyh']}
 */
export const selectedAccordionCardStateFamily = atomFamily({
  key: "selectedAccordionCardId",
  default: ["wer43ws", "wer2ws43ws"]
});
