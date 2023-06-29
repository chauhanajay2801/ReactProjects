import React from "react";
import { data, data1 } from "./App";

function ChildC() {
  return (
    <>
      <data.Consumer>
        {(name) => {
          return (
            <data1.Consumer>
              {(name1) => {
                return (
                  <h1>
                    my name is {name} and my cousin name is {name1}
                  </h1>
                );
              }}
            </data1.Consumer>
          );
        }}
      </data.Consumer>
    </>
  );
}

export default ChildC;




import { createContext } from "react";
import "./App.css";
import ChildA from "./ChildA";

let data = createContext();
let data1 = createContext();

function App() {
  const name = "Ajay Chauhan";
  const name1 = "Chirag Chauhan";
  return (
    <>
      <data.Provider value={name}>
        <data1.Provider value={name1}>
          <ChildA />
        </data1.Provider>
      </data.Provider>
    </>
  );
}

export default App;
export { data, data1 };
