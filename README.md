# hello! smoothie

It is my next React project. It is an application that, despite its small size, is relatively complex:

- custom hooks `useHttp` (for HTTP requests) and `useInput` (for getting and validating single input);
- configuring Firebase Realtime Database;
- sending `get` and `post` requests to Firebase API (handling possible errors);
- Framer-motion library used to create a draggy products carousel;
- building & using a custom `ContextProvider` components;
- cart logic encapsulation, managing cart state with `useReducer`'s function and providing `value` to children components via`Context.Provider`;
- managing checkout form validation & handling possible errors;
- basic performance optimization (memoization).

🥕🥦 [hello! smoothie - LIVE](https://hello-smoothie.netlify.app/)

<p align="center"><img src="/src/assets/img/hello smoothie ui.jpg"></p>
