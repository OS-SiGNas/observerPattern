Simple use of Oberser Pattern with typescript and class for manipule elements state in the DOM.

script npm: "npm run build"

run with your favorite live server

tree:

- bin: ouput folder with index.js
- src: directory of source typescript with index.ts
  - index.ts: main file
  - components: class and instances of components
    - div1.ts: div component
    - div3.ts: div component
    - div2.ts: div component
  - shared: directory for shared class
    - abstractObservers.ts: abstract class for all Oservers
    - textObserver.ts: class for Text Observers
