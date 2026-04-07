import { Observer } from "../observer.js";
import { $ } from "../util.js";
import list1 from "../subscribers/list1.js";
import div4 from "../subscribers/div4.js";

export const viewList = (o: Observer<string[]>): void => {
  o.subscribe(list1).subscribe(div4);

  $<HTMLButtonElement>("#buttonList1").addEventListener("click", () => {
    const input = $<HTMLInputElement>("#inputList1");
    o.state = [...o.state, input.value];
  });
};
