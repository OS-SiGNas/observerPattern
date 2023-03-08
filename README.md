# Simple use of Oberser Pattern with typescript and class for manipule elements state in the DOM.

### **Run with your favorite live server**

## **script npm**:

```
- npm run build
- npm run dev
```

## try this:

1 - Create your components that will listen for changes by implementing the Listeners interface.

```
import type { Listeners } from "../ClassObservers"
class myComponentListener implement Listeners {}
```

2 - create your view input component

```
const myView ( ) => {
  // make a new instance at class Observer and inicialize any state
  const myObserver = new Observer(initialState)
  // register all your listeners components myObserver.subscribe(...);
  myObserver.subscribe(element1);
  myObserver.subscribe(element2);
  myObserver.subscribe(element3);
  }
```

3 - create your handlers, eventListeners, and use the setState method for looks changes

```
// define handler for callback
const handleChange = ({ target }: Event): void => {
  myObserver.setState((target as HTMLInputElement)?.value);
};

// define eventListener
const text = document.getElementById("text");
text !== null
  ? text.addEventListener("input", handleChange)
  : console.error("text id is null");
```

## **tree**:

- **bin**: ouput folder with index.js
- **src**: directory of source typescript with index.ts
  - **index.ts**: main file
  - **ClassObserver.ts**: Class Observer and interface Listeners
  - **input_components**: Folder with inputs DOM elements
    - **viewText.ts**: render with elements inputs textarea and elements listeners
    - **viewList.ts**: render with element list and elements listeners
    - **viewObject.ts**: render with element plain string from object and elements listeners
  - **listeners_components**: folder of class and instances of DOM elements listeners
    - **div1.ts**: div component -> textObservers subscriber
    - **div3.ts**: div component -> textObservers subscriber
    - **div2.ts**: div component -> textObservers subscriber
    - **div4.ts**: div component -> listObservers subscriber
    - **list1.ts**: list component -> listObservers subscriber
