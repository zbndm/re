import {
  ComponentType,
  HTMLProps,
  MouseEventHandler,
  ReactNode,
  useCallback
} from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { OnClick, Selected } from "./types";
import {
  CardData,
  selectedAccordionCardStateFamily
} from "./selectedAccordionCardState";
import { useAccordion } from "./useAccordion";

export type AccordionCardHeaderProps<T = void> = Pick<
  CardData,
  "id" | "label"
> &
  Selected &
  OnClick & {
    allowMultiple?: boolean;
    accordionName: string;
    headerComponent?: ComponentType<Selected>;
  };

export const StyledHeader = styled.div<Selected>`
  background-color: ${(props: { selected?: boolean }) =>
    props?.selected ? "orange" : "#ccc"};
  display: flex;
  flex-direction: row;
  padding: 0.25rem;
  cursor: pointer;
  &:hover {
    background-color: ${(props: { selected?: boolean }) =>
      props?.selected ? "#fc0" : "#ddd"};
  }
  &:active {
    background-color: #bbb;
  }
`;

export function AccordionCardHeader({
  id,
  label,
  accordionName,
  allowMultiple,
  headerComponent
}: AccordionCardHeaderProps) {
  const [selectedAccordionIds, setSelectedAccordionIds] = useRecoilState(
    selectedAccordionCardStateFamily(accordionName)
  );

  const { handleHeaderClick } = useAccordion(accordionName, allowMultiple);

  const selected = selectedAccordionIds.indexOf(id) >= 0;

  const handleClick = useCallback(
    (name: string, id: string, selected: boolean) => (event: unknown) => {
      // console.log("name: " + name + ", id: " + id);
      // if allowMultiple, deselect the current id if already selected, otherwise add to the list.
      // console.log("allowMultiple", allowMultiple);
      console.log("selectedAccordionIds.length", selectedAccordionIds.length);

      const selectedIds = allowMultiple
        ? selected
          ? selectedAccordionIds.filter((eachId) => eachId !== id)
          : [...selectedAccordionIds, id]
        : selected
        ? []
        : [id];
      console.log("selectedIds", JSON.stringify(selectedIds));
      setSelectedAccordionIds([name, ...selectedIds]);
    },
    [allowMultiple, selectedAccordionIds, setSelectedAccordionIds]
  );

  const HeaderComponent: ComponentType<Partial<AccordionCardHeaderProps>> =
    headerComponent || StyledHeader;

  return (
    <HeaderComponent
      allowMultiple={allowMultiple}
      id={id}
      label={label}
      onClick={handleHeaderClick(!!allowMultiple, accordionName, id, selected)}
      selected={selected}
      accordionName={""}
    >
      {label}
    </HeaderComponent>
  );
}
