class List1 {
    #element;
    constructor(element) {
        this.#element = document.getElementById(element);
    }
    render = (items) => {
        if (items instanceof Array) {
            if (this.#element !== null) {
                this.#element.innerHTML = `${String(items.length)} elements in the list`;
            }
        }
    };
}
export default new List1("div4");
