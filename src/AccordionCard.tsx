import { ComponentType } from "react";
import styled from "styled-components";
import {
  AccordionCardContent,
  AccordionCardContentProps
} from "./AccordionCardContent";
import {
  AccordionCardHeader,
  AccordionCardHeaderProps
} from "./AccordionCardHeader";
import { CardData } from "./selectedAccordionCardState";

const StyledCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.0625rem;
`;

export interface AccordionCardProps {
  allowMultiple?: boolean;
  accordionName: string;
  data: CardData;
  headerComponent?: ComponentType<Partial<AccordionCardHeaderProps>>;
  contentComponent?: ComponentType<Partial<AccordionCardContentProps>>;
}

export function AccordionCard({
  allowMultiple,
  accordionName = "myAccordion",
  data,
  headerComponent,
  contentComponent
}: AccordionCardProps) {
  console.log("hi");
  const { label, id, content } = data;
  return (
    <StyledCardContainer>
      <AccordionCardHeader
        allowMultiple={allowMultiple}
        label={label}
        id={id}
        accordionName={accordionName}
        headerComponent={headerComponent}
      />
      <AccordionCardContent
        accordionName={accordionName}
        id={id}
        content={content}
        contentComponent={contentComponent}
      />
    </StyledCardContainer>
  );
}
