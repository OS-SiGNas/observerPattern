import type { Listeners } from "../ClassObservers";

class ElementDiv3 implements Listeners {
  element: HTMLElement | null;
  constructor(element: string) {
    this.element = document.getElementById(element);
  }

  render = <T>(text: T): void => {
    if (this.element !== null) {
      if (typeof text === "string") {
        this.element.innerHTML = text.includes("chicken")
          ? "😋 mmm chicken!"
          : "i'm hungry, give me chicken";
      }
    }
  };
}

export default new ElementDiv3("div3");
