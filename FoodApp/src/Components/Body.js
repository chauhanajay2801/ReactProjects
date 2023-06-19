import RestaurantCard from "./RestaurantCard";

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
      <RestaurantCard />
    </>
  );
};

export default Body;
