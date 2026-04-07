import { Observer } from "./observer.js";
import { viewText } from "./input_components/viewText.js";
import { viewList } from "./input_components/viewList.js";
import { viewObject } from "./input_components/viewObject.js";

viewText(new Observer<string>(""));
viewList(new Observer<string[]>([]));
viewObject(new Observer({ name: "anyName", lastName: "anyLastName" }));
