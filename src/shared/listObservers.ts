import Observers from "./abstractObservers.js";

class ListObserver extends Observers {
  #state: string[];
  constructor() {
    super();
    this.#state = [];
  }

  setState = (item: string): void => {
    this.#state.push(item);
    this.notify(this.#state);
  };
}

export default new ListObserver();
