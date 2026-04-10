import { Observable } from "./observable.js";
import { viewText } from "./input_components/viewText.js";
import { viewList } from "./input_components/viewList.js";
import { viewObject } from "./input_components/viewObject.js";

viewText(new Observable(""));
viewList(new Observable([]));
viewObject(new Observable({ name: "", lastName: "" }));
