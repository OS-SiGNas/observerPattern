import type { Listeners } from "../ClassObservers";

class Div5 implements Listeners {
  #element: HTMLElement | null;
  constructor(elementId: string) {
    this.#element = document.getElementById(elementId);
  }

  render = <T>(state: T) => {
    if (state instanceof Object) {
      if (this.#element !== null)
        this.#element.innerHTML = JSON.stringify(state);
    }
  };
}

export default new Div5("div5");
