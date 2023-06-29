import React, { createContext } from "react";
import ChildA from "./ChildA";

const data = createContext();
const data1 = createContext(); // 2 context kyuki 2 values hain

function App() {
  const name = "Ajay Chauhan"; // 2values
  const age = 28;
  return (
    <>
      <data.Provider value={name}>
      <data1.Provider value={age}>
        <ChildA />
      </data1.Provider>
      </data.Provider>
    </>
  );
}

export default App;
export {data, data1}