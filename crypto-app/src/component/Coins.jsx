import React, { useEffect } from "react";
import axios from "axios";

const Coins = () =>{
useEffect(() => {
    const fetchCoins = async () => {
      
        const { data } = await axios.get(
          "https://dummyjson.com/products?limit=100");
        console.log(data)
        
    };
    fetchCoins();
  }, []);


  return <div>hheyyy</div>
};

export default Coins;