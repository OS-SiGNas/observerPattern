import type { Listeners } from "../ClassObservers";

class List1 implements Listeners {
  #element: HTMLElement | null;
  constructor(element: string) {
    this.#element = document.getElementById(element);
  }

  render = <T>(items: T) => {
    if (items instanceof Array) {
      if (this.#element !== null) {
        this.#element.innerHTML = `${String(
          items.length
        )} elements in the list`;
      }
    }
  };
}

export default new List1("div4");
