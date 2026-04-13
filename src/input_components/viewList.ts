import { Observable } from "../observable.js";
import { $ } from "../selector.js";

export const viewList = (o: Observable<string[]>): void => {
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
