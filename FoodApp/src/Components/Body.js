import RestaurantCard from "./RestaurantCard";
import { useState , useEffect} from "react";
import Shimmer from "./Shimmer"



const Body = () => {
  const [filteredList, setfilteredList] = useState([]);
  const [listOfRestaurant, setlistOfRestaurant] = useState([])
  const [searchText, setsearchText] = useState("")

  
  useEffect(() => {
    fetchData();
  }, [])
  
  const fetchData = async () =>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    //optional chaining
    setlistOfRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    setfilteredList(json?.data?.cards[2]?.data?.data?.cards);
  };

 <div className="shimmer-container">
      <Shimmer/>
      </div> 

  return listOfRestaurant?.length===0? <div className="shimmer-container">
  <Shimmer/>
  </div> :   (
    <>
      <div className="body-upper">
        <div className="btn-bod">
          <button 
          onClick={
            () =>{
            const filtered = listOfRestaurant.filter((res) => res.data.avgRating >4);
            setlistOfRestaurant(filtered);
            }
          }
          >Top Restaurant</button>
        </div>
        <div className="body-search">
          <input type="text" value={searchText} onChange={(e)=>{
            setsearchText(e.target.value)
          }} />
          <button type="submit" onClick={()=>{
            const filteredRestaurant = listOfRestaurant.filter
            ((res)=>res.data.name.toLowerCase().includes(searchText.toLocaleLowerCase()));
            setfilteredList(filteredRestaurant)
          }}>Search</button>
        </div>
      </div>
      <div className="res-containerr">
      {filteredList?.map((restaurant) => 
     (<RestaurantCard
     key = {restaurant?.data?.id}
     ResData={restaurant}/>))
     }
      </div>
      
    </>
  );
};

export default Body;
