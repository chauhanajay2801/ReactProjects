import RestaurantCard from "./RestaurantCard";
import { useState , useEffect} from "react";
import Shimmer from "./Shimmer"



const Body = () => {
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
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
    setfilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  };

 <div className="shimmer-container">
      <Shimmer/>
      </div> 

  return listOfRestaurant?.length===0? <div className="shimmer-container">
  <Shimmer/>
  </div> :   (
    <>
      <div className="flex m-3">
        <div className="rounded-md shadow-xl px-4 bg-teal-100 hover:bg-teal-600 font-medium w-38 h-19">
          <button 
          onClick={
            () =>{
            const filteredList = listOfRestaurant.filter((res) => res.data.avgRating >4);
            setlistOfRestaurant(filteredList);
            }
          }
          >Top Restaurant</button>
        </div>
        <div className="font-bold">
          <input type="text" className="ml-4 focus:bg-teal-50 border-solid border-2
          " 
          value={searchText} onChange={(e)=>{
            setsearchText(e.target.value)
          }} />
          <button className="rounded-md shadow-xl ml-2 bg-teal-100 hover:bg-teal-600 font-medium w-28 h-19" type="submit" onClick={()=>{
            const filteredRestaurant = listOfRestaurant.filter
            ((res)=>res.data.name.toLowerCase().includes(searchText.toLocaleLowerCase()));
            setlistOfRestaurant(filteredRestaurant)
          }}>Search</button>
        </div>
      </div>
      <div className="res-containerr">
      {filteredRestaurant?.map((restaurant) => 
     (<RestaurantCard
     key = {restaurant?.data?.id}
     ResData={restaurant}/>))
     }
      </div>
      
    </>
  );
};

export default Body;
