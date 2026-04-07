import { $ } from "../util.js";
import div1 from "../subscribers/div1.js";
import div2 from "../subscribers/div2.js";
import div3 from "../subscribers/div3.js";

import type { Observer } from "../observer.js";

export const viewText = (o: Observer<string>): void => {
  o.subscribe(div1).subscribe(div2).subscribe(div3);

  $("textarea").addEventListener("input", ({ target }) => {
    if (target instanceof HTMLTextAreaElement) o.state = target.value;
    else return;
  });
};
