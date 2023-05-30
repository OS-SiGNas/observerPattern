class ElementDiv1 {
    element;
    constructor(element) {
        this.element = document.getElementById(element);
    }
    render = (text) => {
        if (this.element !== null) {
            if (typeof text === "string") {
                this.element.innerHTML = text;
            }
        }
    };
}
export default new ElementDiv1("div1");
