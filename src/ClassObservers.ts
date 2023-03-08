export interface Listeners {
  render: <T>(arg: T) => void;
}

export default class Observer<U> {
  #listeners: Array<Listeners>;
  #state: U;
  constructor(state: U) {
    this.#state = state;
    this.#listeners = [];
  }

  notify = <T>(action: T): void => {
    this.#listeners.forEach((element) => {
      element.render(action);
    });
  };

  subscribe = (listener: Listeners): void => {
    this.#listeners.push(listener);
  };

  unsubscribe = (sub: Listeners): void => {
    this.#listeners = this.#listeners.filter((element) => element !== sub);
  };

  setState = (newState: U): void => {
    if (this.#state instanceof Array && newState instanceof Array) {
      this.#state = [...this.#state, ...newState] as U;
    } else if (this.#state instanceof Object) {
      this.#state = { ...this.#state, ...newState };
    } else {
      this.#state = newState;
    }
    this.notify(this.#state);
  };

  get listeners(): Array<Listeners> {
    return this.#listeners;
  }
}
