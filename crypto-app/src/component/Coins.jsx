import React, {useEffect,useState} from 'react';
import axios from 'axios';
import { server } from '../index';
import { Container, HStack } from '@chakra-ui/react';
import Loader from './Loader';
import Error from './Error';
import ExhangeCard from './ExhangeCard';


const Coins = () => {

const [coins, setCoins] = useState([]);

const [loading, setLoading] = useState(true)

const [error, setError] = useState(false)

const [page, setPage] = useState(1)

const [currency, setCurrency] = useState("inr")

  useEffect(() => {
    const fetchCoins = async()=> {
      try{
        const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}`);
        console.log(data);
      setCoins(data);
      setLoading(false);
    }
    catch(error){
        setLoading(false);
        setError(true);

      }
    };
    fetchCoins(); 
  },[])

  if(error) return <Error message = {"Error while fetching Coins"}/>

  return <Container maxW={"container.xl"}>
    {loading? <Loader/> : <>
    
    <HStack wrap={'wrap'}>
      {
        coins.map((i)=>(

          <ExhangeCard 
          key={i.id}
          name={i.name} 
          img={i.image} 
          rank={i.trust_score_rank} 
          url={i.url}/>
        ))
      }
    </HStack>

    </>}
  </Container>
}



export default Coins