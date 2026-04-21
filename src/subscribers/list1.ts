import { $ } from "../utils/selector.js";
import type { Subscriber } from "../observable.js";

export class $ListItems implements Subscriber {
  #element = $<HTMLElement>("ul");
  public readonly render = <T>(items: T) => {
    if (!(items instanceof Array)) return;
    this.#element.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
  };
}
