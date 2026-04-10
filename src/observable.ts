export interface Subscriber {
  readonly render: <S>(state: S) => void;
}

/**
 * @constructor state value */
export class Observable<State> {
  #state: State;
  readonly #subscribers: Set<Subscriber> = new Set();
  constructor(state: State) {
    this.#state = state;
  }

  /** @getter return current state. */
  get state(): State {
    return this.#state;
  }

  /** @setter When the new status is established, subscribers will be notified. */
  set state(value: State) {
    this.#state = value;
    this.#notify();
  }

  readonly #notify = () => {
    for (const sub of this.#subscribers) sub.render(this.#state);
    return this;
  };

  public readonly subscribe = (sub: Subscriber): this => {
    this.#subscribers.add(sub);
    sub.render(this.#state);
    return this;
  };

  public readonly unsubscribe = (sub: Subscriber): this => {
    this.#subscribers.delete(sub);
    return this;
  };
}
