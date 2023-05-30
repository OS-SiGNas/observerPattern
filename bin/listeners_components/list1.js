class List1 {
    #element;
    constructor(element) {
        this.#element = document.querySelector(element);
    }
    render = (items) => {
        if (items instanceof Array) {
            if (this.#element !== null) {
                this.#element.innerHTML = items
                    .map((item) => `<li>${item}</li>`)
                    .join("");
            }
        }
    };
}
export default new List1("ul");
