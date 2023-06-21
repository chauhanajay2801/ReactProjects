import RestaurantCard from "./RestaurantCard";
import { useState , useEffect} from "react";
import Shimmer from "./Shimmer"



const Body = () => {
  // const [filteredList, setfilteredList] = useState([]);
  const [listOfRestaurant, setlistOfRestaurant] = useState([])
  
  useEffect(() => {
    fetchData();
  }, [])
  
  const fetchData = async () =>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    //optional chaining
    setlistOfRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    // setfilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
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
          <input type="text" name="" id="" />
          <button type="submit">Search</button>
        </div>
      </div>
      <div className="res-containerr">
      {listOfRestaurant?.map((restaurant) => 
     (<RestaurantCard
     key = {restaurant?.data?.id}
     ResData={restaurant}/>))
     }
      </div>
      
    </>
  );
};

export default Body;
