import type { Listeners } from "../shared/abstractObservers";

class ElementDiv2 implements Listeners {
  element: HTMLElement | null;
  constructor(element: string) {
    this.element = document.getElementById(element);
  }

  render = <T>(text: T): void => {
    if (this.element !== null) {
      if (typeof text === "string") {
        console.log(text.length);
        this.element.innerHTML = `${String(text.length)} characters`;
      }
    }
  };
}

export default new ElementDiv2("div2");
