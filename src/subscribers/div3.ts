import { $ } from "../util.js";
import type { Subscriber } from "../observer.js";

class ElementDiv3 implements Subscriber {
  readonly #element = $<HTMLElement>("#div3");

  render = <T>(text: T): void => {
    if (typeof text === "string") {
      this.#element.innerHTML = text.includes("chicken")
        ? "😋 mmm chicken!"
        : "i'm hungry, give me chicken";
    }
  };
}

export default new ElementDiv3();
