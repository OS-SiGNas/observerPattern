import { $ } from "../selector.js";
import type { Subscriber } from "../observable.js";

export class HungryChicken implements Subscriber {
  readonly #element = $<HTMLElement>("#hungry-chicken");
  render = <T>(text: T): void => {
    if (typeof text === "string") {
      this.#element.innerHTML = text.includes("chicken")
        ? "😋 mmm chicken!"
        : "i'm hungry, give me chicken";
    }
  };
}
