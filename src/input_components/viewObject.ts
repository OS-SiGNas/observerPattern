import { Observable } from "../observable.js";
import { $ } from "../utils/selector.js";

export type StateObject = { name: string; lastName: string };

export const viewObject = (o: Observable<StateObject>): void => {
  const keyViewer = $<HTMLDivElement>("#objectKeyViewer");
  const keyHandle = ({ key }: KeyboardEvent) => (keyViewer.innerHTML = key);
  $<HTMLInputElement>("#name").addEventListener("keypress", keyHandle);
  $<HTMLInputElement>("#lastName").addEventListener("keypress", keyHandle);

  const handle = (e: Event) => {
    const { name, value } = e.currentTarget as HTMLInputElement;
    o.state = { ...o.state, [name]: value } as StateObject;
  };

  $<HTMLInputElement>("#name").addEventListener("change", handle);
  $<HTMLInputElement>("#lastName").addEventListener("change", handle);
};
