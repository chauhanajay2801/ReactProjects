import { useState } from "react"



const Header = () => {
  const [login, setlogin] = useState("Login")
    return(
        <div className="header-component">
        <div className="image-container">
          <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"/>
        </div>
        <div className="list-container">
         <ul>
           <li>Home</li>
           <li>Cart</li>
           <li>About Us</li>
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