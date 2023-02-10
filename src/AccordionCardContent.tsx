import { ComponentType } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import {
  CardData,
  selectedAccordionCardStateFamily
} from "./selectedAccordionCardState";
import { Selected } from "./types";

export type AccordionCardContentProps = Pick<CardData, "id" | "content"> & {
  accordionName: string;
  contentComponent?: ComponentType<Selected>;
};

export const StyledContentContainer = styled.div<Selected>`
  border: solid 0.0625rem #ccc;
  border-top: none;
  display: flex;
  flex-direction: column;
  height: ${(props: { selected?: boolean }) =>
    props?.selected ? "7rem" : "0.0625rem"};
  transition: height 0.25s;
`;

export function AccordionCardContent({
  content = "content",
  contentComponent,
  accordionName,
  id
}: AccordionCardContentProps) {
  const selectedAccordionIds = useRecoilValue(
    selectedAccordionCardStateFamily(accordionName)
  );

  const selected = selectedAccordionIds.indexOf(id) >= 0;

  const ContentComponent: ComponentType<Partial<AccordionCardContentProps>> =
    contentComponent || StyledContentContainer;

  return <ContentComponent selected={selected}>{content}</ContentComponent>;
}
