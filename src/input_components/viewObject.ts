import { Observable } from "../observable.js";
import { $ } from "../selector.js";
import { ObjectInput } from "../subscribers/objectInput.js";

type State = { name: string; lastName: string };

export const viewObject = (o: Observable<State>): void => {
  o.subscribe(ObjectInput());

  const handle: EventListenerOrEventListenerObject = (event) => {
    const { name, value } = event.currentTarget as HTMLInputElement;
    o.state = { ...o.state, [name]: value } as State;
  };

  $("#name").addEventListener("change", handle);
  $("#lastName").addEventListener("change", handle);
};
