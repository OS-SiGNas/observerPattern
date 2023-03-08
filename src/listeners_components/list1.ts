import type { Listeners } from "../ClassObservers";

class List1 implements Listeners {
  #element: HTMLElement | null;
  constructor(element: string) {
    this.#element = document.querySelector(element);
  }

  render = <T>(items: T) => {
    if (items instanceof Array) {
      if (this.#element !== null) {
        this.#element.innerHTML = items
          .map((item) => `<li>${item}</li>`)
          .join("");
      }
    }
  };
}

export default new List1("ul");
