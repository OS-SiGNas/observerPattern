import textObservers from "./shared/textObservers.js";
import listObservers from "./shared/listObservers.js";
import div1 from "./components/div1.js";
import div2 from "./components/div2.js";
import div3 from "./components/div3.js";
import div4 from "./components/div4.js";
import list1 from "./components/list1.js";

textObservers.subscribe(div1);
textObservers.subscribe(div2);
textObservers.subscribe(div3);

listObservers.subscribe(list1);
listObservers.subscribe(div4);

const handleChange = ({ target }: Event): void => {
  textObservers.setState((target as HTMLInputElement)?.value);
};

const handleAddItems = (): void => {
  const input = document.getElementById("inputList1");
  input !== null
    ? listObservers.setState((input as HTMLInputElement).value)
    : console.log("input id is null");
};

const text = document.getElementById("text");
text !== null
  ? text.addEventListener("input", handleChange)
  : console.log("text id is null");

const buttonList = document.getElementById("buttonList1");
buttonList !== null
  ? buttonList.addEventListener("click", handleAddItems)
  : console.log("button id is null");

/*
textObservers.unsubscribe(div1);
textObservers.unsubscribe(div2);
textObservers.unsubscribe(div3);
listObservers.unsubscribe(list1);
listObservers.unsubscribe(div4);
 */
