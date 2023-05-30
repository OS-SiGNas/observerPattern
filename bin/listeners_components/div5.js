class Div5 {
    #element;
    constructor(elementId) {
        this.#element = document.getElementById(elementId);
    }
    render = (state) => {
        if (state instanceof Object) {
            if (this.#element !== null)
                this.#element.innerHTML = JSON.stringify(state);
        }
    };
}
export default new Div5("div5");
