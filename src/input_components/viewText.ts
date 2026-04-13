import { $ } from "../selector.js";
import type { Observable } from "../observable.js";

export const viewText = (o: Observable<string>): void => {
  $("#input-textarea").addEventListener("input", ({ target }) => {
    if (!(target instanceof HTMLTextAreaElement)) return;
    o.state = target.value;
  });
};
