import { $ } from "../util.js";
import type { Subscriber } from "../observer.js";

class ElementDiv1 implements Subscriber {
  readonly #element = $<HTMLElement>("#div1");

  public readonly render = <T>(text: T): void => {
    if (typeof text === "string") this.#element.innerHTML = text;
  };
}

export default new ElementDiv1();
