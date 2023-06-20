import RestaurantCard from "./RestaurantCard";

const resList = [
  {
    name:"Annapurna foods",
    star:4,
    cuisine:"Indian,SouthIndian",
    eta:45,
    cost:200,
    id:1
  },
  {
    name:"Kfc",
    star:4.1,
    cuisine:"American",
    eta:40,
    cost:200,
    id:2
  },
  {
    name:"Kwality foods",
    star:3.1,
    cuisine:"Indian",
    eta:21,
    cost:200,
    id:3
  },
  {
    name:"Garhwali foods",
    star:4.2,
    cuisine:"Indian,North Indian",
    eta:20,
    cost:200,
    id:4
  },
  {
    name:"Mcdonald",
    star:4.7,
    cuisine:"American",
    eta:55,
    cost:200,
    id:5
  },
  {
    name:"Dharma Dhaba",
    star:3.1,
    cuisine:"Indian",
    eta:30,
    cost:200,
    id:6
  },
  {
    name:"Baweja Foods",
    star:3.7,
    cuisine:"Indian,Chinese",
    eta:21,
    cost:200,
    id:7
  },
  {
    name:"Annapurna foods",
    star:4,
    cuisine:"Indian,SouthIndian",
    eta:45,
    cost:200,
    id:8
  },
  {
    name:"Annapurna foods",
    star:4,
    cuisine:"Indian,SouthIndian",
    eta:45,
    cost:200,
    id:9
  },
  {
    name:"Annapurna foods",
    star:4,
    cuisine:"Indian,SouthIndian",
    eta:45,
    cost:200,
    id:10
  },
  {
    name:"Annapurna foods",
    star:4,
    cuisine:"Indian,SouthIndian",
    eta:45,
    cost:200,
    id:11
  },
  {
    name:"Annapurna foods",
    star:4,
    cuisine:"Indian,SouthIndian",
    eta:45,
    cost:200,
    id:12
  },
  {
    name:"Annapurna foods",
    star:4,
    cuisine:"Indian,SouthIndian",
    eta:45,
    cost:200,
    id:13
  },
  {
    name:"Annapurna foods",
    star:4,
    cuisine:"Indian,SouthIndian",
    eta:45,
    cost:200,
    id:14
  },
]


const Body = () => {
  return (
    <>
      <div className="body-upper">
        <div className="btn-bod">
          <button>Top Restaurant</button>
        </div>
        <div className="body-search">
          <input type="text" name="" id="" />
          <button type="submit">Search</button>
        </div>
      </div>
      <div className="res-containerr">
      {resList.map((restaurant) => 
     (<RestaurantCard
     key = {restaurant.id}
     ResData={restaurant}/>))
     }
      </div>
    </>
  );
};

export default Body;
