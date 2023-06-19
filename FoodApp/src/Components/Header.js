
const Header = () => {
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
            <button className="login-btn">Login</button>
           </li>
         </ul>
        </div>
        </div>
    )
}

export default Header