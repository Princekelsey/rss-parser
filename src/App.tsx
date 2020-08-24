import React from "react";
import "./App.css";
import {
  customMapArray,
  customFilterArray,
  customReducer,
} from "./custom/customMethods";

function App() {
  const filterd = customFilterArray([1, 2, 4], (e) => e !== 1);

  const result = customMapArray([1, 2, 4], (e, i) => ({ index: i, item: e }));

  const reducer = (acc: any, curr: any): any => acc + curr;

  const reduced = customReducer([1, 2, 3], reducer, 6);

  console.log(result);
  console.log(filterd);
  console.log(reduced);

  return <div className="App">app</div>;
}

export default App;
