# Simple use of Oberser Pattern with typescript and class for manipule elements state in the DOM.

### **Run with your favorite live server**

## **script npm**:

```
- npm run build
- npm run dev
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
