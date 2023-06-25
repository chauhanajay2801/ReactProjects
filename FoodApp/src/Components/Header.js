import { useState } from "react"
import { Link } from "react-router-dom"



const Header = () => {
  const [login, setlogin] = useState("Login")
    return(
        <div className="flex justify-between bg-teal-100 shadow-md">
        <div className="image-container">
          <img className=" h-28 p-1 " src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"/>
        </div>
        <div className="">
         <ul className="flex justify-evenly py-10 ">
           <li className="px-2 text-lg font-medium"><Link to="/">Home</Link></li>
           <li className="px-2 text-lg font-medium"><Link to="/cart">Cart</Link></li>
           <li className="px-2 text-lg font-medium"><Link to="/about">About Us</Link></li>
           <li className="px-2 text-lg font-medium">
            <button className="rounded-md shadow-xl hover:bg-teal-600 font-medium w-28 h-19" 
            onClick={() =>{
              login==="Login"?
              setlogin("Logout"):
              setlogin("Login")
            }}
             >{login}</button>
           </li>
         </ul>
        </div>
        </div>
    )
}

export default Header