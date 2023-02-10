import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { selectedAccordionCardStateFamily } from "./selectedAccordionCardState";

export function useAccordion(accordionName: string, allowMultiple = false) {
  const [selectedAccordionIds, setSelectedAccordionIds] = useRecoilState(
    selectedAccordionCardStateFamily(accordionName)
  );

  const handleHeaderClick = useCallback(
    (allowMultiple: boolean, name: string, id: string, selected: boolean) => (
      event: unknown
    ) => {
      // Deselect the current id if already selected, otherwise add to the list.
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
    [selectedAccordionIds, setSelectedAccordionIds]
  );

  return { handleHeaderClick };
}
