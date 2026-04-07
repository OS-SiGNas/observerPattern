import { $ } from "../util.js";
import type { Subscriber } from "../observer.js";

class Div5 implements Subscriber {
  readonly #element = $<HTMLElement>("#div5");

  render = <T>(state: T) => {
    if (state instanceof Object) {
      this.#element.innerHTML = JSON.stringify(state);
    }
  };
}

export default new Div5();
