import { Observable } from "./observable.js";

import { viewText } from "./input_components/viewText.js";
import { viewList } from "./input_components/viewList.js";
import { viewObject } from "./input_components/viewObject.js";

import { OutputTextArea } from "./subscribers/output-textarea.js";
import { CharacterCounter } from "./subscribers/character-counter.js";
import { HungryChicken } from "./subscribers/chicken.js";
import { ListItems } from "./subscribers/list1.js";
import { NumberElementList } from "./subscribers/numberElementList.js";
import { ObjectStringOutput } from "./subscribers/objectStringOutput.js";

viewText(
  new Observable("")
    .subscribe(new OutputTextArea())
    .subscribe(CharacterCounter())
    .subscribe(new HungryChicken()),
);

viewList(
  new Observable([])
    .subscribe(new ListItems())
    .subscribe(new NumberElementList()),
);

viewObject(
  new Observable({ name: "", lastName: "" }).subscribe(ObjectStringOutput()),
);
