import { $ } from "../util.js";
import type { Subscriber } from "../observer.js";

class List1 implements Subscriber {
  #element = $<HTMLElement>("ul");

  render = <T>(items: T) => {
    if (items instanceof Array) {
      this.#element.innerHTML = items
        .map((item) => `<li>${item}</li>`)
        .join("");
    }
  };
}

export default new List1();
