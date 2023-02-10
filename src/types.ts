import { HTMLProps, MouseEvent, ReactNode } from "react";

/** optional onClick handler attribute */
export type OnClick<T = ReactNode> = Pick<HTMLProps<T>, "onClick">;
export type Selected = { selected?: boolean };
// export type OnClick<T = ReactNode> = {
//   onClick: (event: MouseEvent<ReactNode>) => void;
// };
