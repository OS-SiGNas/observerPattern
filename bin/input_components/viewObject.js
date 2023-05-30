import Observer from "../ClassObservers.js";
import div5 from "../listeners_components/div5.js";
export const viewObject = () => {
    const objectObservers = new Observer({
        name: "anyName",
        lastName: "anyLastName",
    });
    objectObservers.subscribe(div5);
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        objectObservers.setState({ [name]: value });
    };
    const inputName = document.getElementById("name");
    inputName !== null
        ? inputName.addEventListener("change", handleInputChange)
        : console.log("name id is null");
    const inputLastName = document.getElementById("lastName");
    inputLastName !== null
        ? inputLastName.addEventListener("change", handleInputChange)
        : console.log("lastName id is null");
    /*
    objectObservers.unsubscribe(div5);
    */
};
