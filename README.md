# Simple use of Oberser Pattern with typescript and class for manipule elements state in the DOM.

### **Run with your favorite live server**

## **script npm**:

```
- npm run build
- npm run dev
```

## try this:

1 - Create your components that will listen for changes by implementing the Listeners interface.

```typescript
import type { Subscriber } from "../observable.ts"
class myComponentListener implement Subscriber {}
```

2 - create your handlers, eventListeners, and use the setter and getter state for looks changes

```typescript
// define handler for callback
const handleChange = ({ target }: Event): void => {
  myObserver.state = target as HTMLInputElement)?.value;
};

// define eventListener
const text = document.querySelector("#text");
text !== null
  ? text.addEventListener("input", handleChange)
  : console.error("text id is null");
```

## **tree**:

- **dist**: ouput folder with index.js
- **src**: directory of source typescript with index.ts
  - **index.ts**: main file
  - **observable.ts**: Class Observer and interface Listeners
  - **input_components**: Folder with inputs DOM elements
    - **viewText.ts**: render with elements inputs textarea and elements subscribers
    - **viewList.ts**: render with element list and elements subscribers
    - **viewObject.ts**: render with element plain string from object and elements subscribers
  - **subscribers**: folder of class and instances of DOM elements subscribers
