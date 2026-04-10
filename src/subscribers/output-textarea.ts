import { $ } from "../selector.js";
import type { Subscriber } from "../observable.js";

export class OutputTextArea implements Subscriber {
  #element = $<HTMLElement>("#output-textarea");
  public readonly render = <T>(text: T): void => {
    if (typeof text !== "string") return;
    this.#element.innerHTML = text;
  };
}
