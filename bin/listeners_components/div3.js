class ElementDiv3 {
    element;
    constructor(element) {
        this.element = document.getElementById(element);
    }
    render = (text) => {
        if (this.element !== null) {
            if (typeof text === "string") {
                this.element.innerHTML = text.includes("chicken")
                    ? "😋 mmm chicken!"
                    : "i'm hungry, give me chicken";
            }
        }
    };
}
export default new ElementDiv3("div3");
