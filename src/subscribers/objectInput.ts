import { $ } from "../selector.js";
import type { Subscriber } from "../observable.js";

export const ObjectInput = (): Subscriber => {
  const element = $<HTMLDivElement>("#objectInput");
  return {
    render: <S>(state: S): void => {
      if (!(state instanceof Object)) return;
      element.innerHTML = JSON.stringify(state);
    },
  };
};
