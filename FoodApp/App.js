import React from 'react'
import ReactDOM from "react-dom/client";


const  MainComponent = () => {
  return (
    <div>Main</div>
  )
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MainComponent />);