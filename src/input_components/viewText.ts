import Observer from "../ClassObservers.js";
import div1 from "../listeners_components/div1.js";
import div2 from "../listeners_components/div2.js";
import div3 from "../listeners_components/div3.js";

export const viewText = (): void => {
  const textObservers = new Observer("");

  textObservers.subscribe(div1);
  textObservers.subscribe(div2);
  textObservers.subscribe(div3);

  const handleChange = ({ target }: Event): void => {
    textObservers.setState((target as HTMLInputElement)?.value);
  };

  const text = document.getElementById("text");
  text !== null
    ? text.addEventListener("input", handleChange)
    : console.log("text id is null");

  /*
  textObservers.unsubscribe(div1);
  textObservers.unsubscribe(div2);
  textObservers.unsubscribe(div3);
  listObservers.unsubscribe(div4);
  */
};
