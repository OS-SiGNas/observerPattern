export interface Subscriber {
  render: <T>(arg: T) => void;
}

/**
 * @constructor state value */
export class Observer<S> {
  #state: S;
  #subscribers: Set<Subscriber> = new Set();
  constructor(state: S) {
    this.#state = state;
  }

  set state(value: S) {
    this.#state = value;
    this.notify(this.#state);
  }

  get state(): S {
    return this.#state;
  }

  public readonly notify = <A>(action: A): this => {
    for (const e of this.#subscribers) e.render(action);
    return this;
  };

  public readonly subscribe = (sub: Subscriber): this => {
    this.#subscribers.add(sub);
    return this;
  };

  public readonly unsubscribe = (sub: Subscriber): this => {
    this.#subscribers.delete(sub);
    return this;
  };
}
