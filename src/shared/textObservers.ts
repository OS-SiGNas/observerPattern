import Observers from "./abstractObservers.js";

export default class TextObservers extends Observers {
  #state: string;
  constructor() {
    super();
    this.#state = "";
  }

  setState = (state: string): void => {
    this.#state = state;
    this.notify(this.#state);
  };
}
