class ElementDiv2 {
    element;
    constructor(element) {
        this.element = document.getElementById(element);
    }
    render = (text) => {
        if (this.element !== null) {
            if (typeof text === "string") {
                console.log(text.length);
                this.element.innerHTML = `${String(text.length)} characters`;
            }
        }
    };
}
export default new ElementDiv2("div2");
