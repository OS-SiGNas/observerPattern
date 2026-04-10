import { Observable } from "../observable.js";
import { $ } from "../selector.js";
import { ListItems } from "../subscribers/list1.js";
import { NumberElementList } from "../subscribers/numberElementList.js";

export const viewList = (o: Observable<string[]>): void => {
  o.subscribe(new ListItems());
  o.subscribe(new NumberElementList());

  const input = $<HTMLInputElement>("#inputList1");
  const button = $<HTMLButtonElement>("#buttonList1");

  const handler = () => {
    if (input.value.length === 0) return;
    o.state = [...o.state, input.value];
    input.value = "";
  };

  button.addEventListener("click", handler);
  input.addEventListener("keydown", ({ key }) => {
    if (key !== "Enter") return;
    return handler();
  });
};
