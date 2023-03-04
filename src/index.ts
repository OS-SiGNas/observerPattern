import TextObservers from "./shared/textObservers.js";
import div1 from "./components/div1.js";
import div2 from "./components/div2.js";
import div3 from "./components/div3.js";

const textObserver = new TextObservers();
textObserver.subscribe(div1);
textObserver.subscribe(div2);
textObserver.subscribe(div3);

const handleChange = ({ target }: Event) => {
  textObserver.setState((target as HTMLInputElement)?.value);
};

const text = document.getElementById("text");
text !== null
  ? text.addEventListener("input", handleChange)
  : console.log("text id is null");
