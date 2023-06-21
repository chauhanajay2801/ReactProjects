import React from 'react'
import ReactDOM from "react-dom/client";
import About from './Components/About';
import Header from './Components/Header';
import Body from './Components/Body';
import Cart from './Components/Cart';
import Error from './Components/Error';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const  MainComponent = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}


const appRouter = createBrowserRouter
([
  {
    path:"/",
    element:<MainComponent/>,
    children: [
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ],
    errorElement : <Error/>,
  }
  

])



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);