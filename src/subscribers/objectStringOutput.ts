import { $ } from "../selector.js";
import type { Subscriber } from "../observable.js";

export const ObjectStringOutput = (): Subscriber => {
  const element = $<HTMLDivElement>("#objectStringOutput");

  return {
    render: <S>(state: S): void => {
      if (!(state instanceof Object)) return;
      element.innerHTML = JSON.stringify(state);
    },
  };
};
