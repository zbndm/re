import { useRecoilValue, useRecoilState, RecoilRoot } from "recoil";
import "./styles.css";
import {
  defaultAccordionData,
  selectedAccordionCardStateFamily
} from "./selectedAccordionCardState";
import { Accordion } from "./Accordion";

export default function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <h1>Multi-select Accordion</h1>
        <Accordion
          name="defaultAccordion"
          data={defaultAccordionData()}
          allowMultiple={true}
        />
        <h1>Single-select Accordion</h1>
        <Accordion
          name="defaultAccordion2"
          data={defaultAccordionData()}
          allowMultiple={false}
        />
      </RecoilRoot>
    </div>
  );
}
