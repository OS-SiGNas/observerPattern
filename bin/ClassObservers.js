export default class Observer {
    #listeners;
    #state;
    constructor(state) {
        this.#state = state;
        this.#listeners = [];
    }
    notify = (action) => {
        this.#listeners.forEach((element) => element.render(action));
    };
    subscribe = (listener) => {
        this.#listeners.push(listener);
    };
    unsubscribe = (sub) => {
        this.#listeners = this.#listeners.filter((element) => element !== sub);
    };
    setState = (newState) => {
        if (this.#state instanceof Array && newState instanceof Array) {
            this.#state = [...this.#state, ...newState];
        }
        else if (this.#state instanceof Object) {
            this.#state = { ...this.#state, ...newState };
        }
        else {
            this.#state = newState;
        }
        this.notify(this.#state);
    };
    get listeners() {
        return this.#listeners;
    }
}
