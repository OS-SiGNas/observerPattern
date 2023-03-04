import type { Listeners } from "../shared/abstractObservers";

class ElementDiv1 implements Listeners {
  element: HTMLElement | null;
  constructor(element: string) {
    this.element = document.getElementById(element);
  }

  render = <T>(text: T): void => {
    if (this.element !== null) {
      if (typeof text === "string") {
        this.element.innerHTML = text;
      }
    }
  };
}
export default new ElementDiv1("div1");
