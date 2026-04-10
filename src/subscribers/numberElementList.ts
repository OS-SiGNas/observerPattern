import { $ } from "../selector.js";
import type { Subscriber } from "../observable.js";

export class NumberElementList implements Subscriber {
  readonly #element = $<HTMLElement>("#numberElementList");
  public readonly render = <T>(items: T) => {
    if (typeof items !== "string") return;
    this.#element.innerHTML = `${String(items.length)} elements in the list`;
  };
}
