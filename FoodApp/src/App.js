import React from 'react'
import ReactDOM from "react-dom/client";
import Header from './Components/Header';

const  MainComponent = () => {
  return (
    <Header/>
  )
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MainComponent />);