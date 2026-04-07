import { Observer } from "../observer.js";
import { $ } from "../util.js";
import div5 from "../subscribers/div5.js";

type State = { name: string; lastName: string };

export const viewObject = (o: Observer<State>): void => {
  o.subscribe(div5);

  const handle: EventListenerOrEventListenerObject = (event) => {
    const { name, value } = event.target as HTMLInputElement;
    o.state = { ...o.state, [name]: value } as State;
  };

  $<HTMLInputElement>("#name").addEventListener("change", handle);
  $<HTMLInputElement>("#lastName").addEventListener("change", handle);
};
