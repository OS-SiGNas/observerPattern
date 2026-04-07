import { $ } from "../util.js";
import type { Subscriber } from "../observer.js";

class ElementDiv2 implements Subscriber {
  readonly #element = $<HTMLElement>("#div2");

  render = <T>(text: T): void => {
    if (typeof text === "string") {
      this.#element.innerHTML = `${String(text.length)} characters`;
    }
  };
}

export default new ElementDiv2();
