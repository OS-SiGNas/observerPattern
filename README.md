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
  - **components**: class and instances of components
    - **div1.ts**: div component -> textObservers subscriber
    - **div3.ts**: div component -> textObservers subscriber
    - **div2.ts**: div component -> textObservers subscriber
    - **div4.ts**: div component -> listObservers subscriber
    - **list1.ts**: list component -> listObservers subscriber
  - **shared**: directory for shared class
    - **abstractObservers.ts**: abstract class for all Oservers
    - **textObservers.ts**: class for Text Observers
    - **listObservers.ts**: class for List Observers
