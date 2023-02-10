import { useRecoilValue, useRecoilState, RecoilRoot } from "recoil";
import styled from "styled-components";
import {
  CardData,
  selectedAccordionCardStateFamily
} from "./selectedAccordionCardState";
import { AccordionCard } from "./AccordionCard";
import {
  AccordionCardHeader,
  AccordionCardHeaderProps,
  StyledHeader
} from "./AccordionCardHeader";
import {
  AccordionCardContentProps,
  StyledContentContainer
} from "./AccordionCardContent";
import { ComponentType } from "react";

interface AccordionProps {
  allowMultiple?: boolean;
  name: string;
  data: CardData[];
  headerComponent?: ComponentType<AccordionCardHeaderProps>;
  contentComponent?: ComponentType<AccordionCardContentProps>;
}

export const OtherHeader = styled(StyledHeader)`
  background-color: ${(props: { selected?: boolean }) =>
    props?.selected ? "green" : "#eee"};
  &:hover {
    background-color: ${(props: { selected?: boolean }) =>
      props?.selected ? "blue" : "#ddd"};
  }
`;

export const OtherContent = styled(StyledContentContainer)`
  background-color: ${(props: { selected?: boolean }) =>
    props?.selected ? "#eee" : "lightblue"};
  &:hover {
    background-color: ${(props: { selected?: boolean }) =>
      props?.selected ? "lightgreen" : "#fef"};
  }
`;

export function Accordion({ data, name, allowMultiple }: AccordionProps) {
  const [selectedAccordionIds, setSelectedAccordionIds] = useRecoilState(
    selectedAccordionCardStateFamily("myAccordion")
  );

  // const selectCard = (name: string, id: string) => (event: MouseEvent) => {
  //   console.log(`selected ${name} / ${id}`);
  //   console.log(event);
  // };

  function renderCard(data: CardData): JSX.Element {
    return (
      <AccordionCard
        data={data}
        key={data.id}
        accordionName={name}
        allowMultiple={allowMultiple}
        headerComponent={OtherHeader}
        contentComponent={OtherContent}
      />
    );
  }

  function renderList(data: CardData[]) {
    return data.map((datum) => renderCard(datum));
  }

  return <div>{renderList(data)}</div>;
}
