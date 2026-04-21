import { $ } from "../utils/selector.js";
import type { Subscriber } from "../observable.js";

export const $CharacterCounter = (): Subscriber => {
  const _element = $<HTMLElement>("#characters-counter");

  return {
    render: <T>(text: T): void => {
      if (typeof text !== "string") return;
      _element.innerHTML = `${String(text.length)} characters`;
    },
  };
};
