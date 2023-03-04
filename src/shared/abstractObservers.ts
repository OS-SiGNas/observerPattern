export interface Listeners {
  render: <T>(arg: T) => void;
}

export default abstract class Observers {
  #listeners: Array<Listeners>;
  constructor() {
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

  get listeners() {
    return this.#listeners;
  }
}
