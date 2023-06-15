import React from 'react'
import ReactDOM from "react-dom/client";

const resList = [
    {
      name:"Annapurna foods",
      star:4,
      cuisine:"Indian,SouthIndian",
      eta:45,
      cost:200
    },
    {
      name:"Kfc",
      star:4.1,
      cuisine:"American",
      eta:40,
      cost:200
    },
    {
      name:"Kwality foods",
      star:3.1,
      cuisine:"Indian",
      eta:21,
      cost:200
    },
    {
      name:"Garhwali foods",
      star:4.2,
      cuisine:"Indian,North Indian",
      eta:20,
      cost:200
    },
    {
      name:"Mcdonald",
      star:4.7,
      cuisine:"American",
      eta:55,
      cost:200
    },
    {
      name:"Dharma Dhaba",
      star:3.1,
      cuisine:"Indian",
      eta:30,
      cost:200
    },
    {
      name:"Baweja Foods",
      star:3.7,
      cuisine:"Indian,Chinese",
      eta:21,
      cost:200
    },
    {
      name:"Annapurna foods",
      star:4,
      cuisine:"Indian,SouthIndian",
      eta:45,
      cost:200
    },
  ]



const NavBar = () =>{
    return(
        <div className='navbar-container'>
        <div className='logo-container'>
        <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"/>
        </div>
        <div className='list-container'>
        <ul>
            <li>Home</li>
            <li>Contact</li>
            <li>About us</li>
            <li>Cart</li>
        </ul>
        </div>
        </div>
        )}

const SearchBar = () =>{
    return(
    <form>
  <div>
    <input
      type="search"
      id="mySearch"
      name="q"
      placeholder="Search your food"
      size="30" />
    <button>Search</button>
  </div>
</form>)
} 

const RestCard = (props) =>{
    const {resData} = props;
  const {name,cuisine,star,cost,eta} = resData;
    return(
        
        <div className="rest-card">
        <img src="https://b.zmtcdn.com/data/pictures/chains/5/304055/4d6463c05d83c74e8d95183bed9659b7_o2_featured_v2.jpg?output-format=webp" alt="restimage"/>
        <h3>{name}</h3>
        <h4>{cuisine}</h4>
        <h4>{star}</h4>
        <h4>{cost}</h4>
        <h4>{eta}</h4>
        </div>
    )
}

const Body = () =>{
    return(
        <div className='ody'>
        <div className="search">
        <SearchBar/>
        </div>
        <div className="rest-space">
        {resList.map((restaurant) => 
     (<RestCard resData={restaurant}/>))
     }
        </div>
        </div>
    )
}


const AppMain = () => {
    return(
        <>
        <NavBar/>
        <Body/>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppMain/>)