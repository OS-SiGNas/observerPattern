import { $ } from "../selector.js";
import { OutputTextArea } from "../subscribers/output-textarea.js";
import { CharacterCounter } from "../subscribers/character-counter.js";
import { HungryChicken } from "../subscribers/chicken.js";

import type { Observable } from "../observable.js";

export const viewText = (o: Observable<string>): void => {
  o.subscribe(new OutputTextArea());
  o.subscribe(CharacterCounter());
  o.subscribe(new HungryChicken());

  $("#input-textarea").addEventListener("input", ({ target }) => {
    if (!(target instanceof HTMLTextAreaElement)) return;
    o.state = target.value;
  });
};
