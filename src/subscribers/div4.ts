import { $ } from "../util.js";
import type { Subscriber } from "../observer.js";

class List1 implements Subscriber {
  readonly #element = $<HTMLElement>("#div4");

  render = <T>(items: T) => {
    if (typeof items !== "string") return;
    this.#element.innerHTML = `${String(items.length)} elements in the list`;
  };
}

export default new List1();
