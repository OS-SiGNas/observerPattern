import Observer from "../ClassObservers.js";
import list1 from "../listeners_components/list1.js";
import div4 from "../listeners_components/div4.js";
export const viewList = () => {
    const listObservers = new Observer([]);
    listObservers.subscribe(list1);
    listObservers.subscribe(div4);
    const handleAddItems = () => {
        const input = document.getElementById("inputList1");
        input !== null
            ? listObservers.setState([input.value])
            : console.log("input id is null");
    };
    const buttonList = document.getElementById("buttonList1");
    buttonList !== null
        ? buttonList.addEventListener("click", handleAddItems)
        : console.log("button id is null");
    /*
    listObservers.unsubscribe(list1);
    listObservers.unsubscribe(div4);
    */
};
