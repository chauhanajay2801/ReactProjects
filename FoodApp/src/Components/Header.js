import { useState } from "react"
import { Link } from "react-router-dom"



const Header = () => {
  const [login, setlogin] = useState("Login")
    return(
        <div className="header-component">
        <div className="image-container">
          <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"/>
        </div>
        <div className="list-container">
         <ul>
           <li><Link to="/">Home</Link></li>
           <li><Link to="/cart">Cart</Link></li>
           <li><Link to="/about">About Us</Link></li>
           <li>
            <button className="login-btn" 
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