import React, {useEffect,useState} from 'react';
import axios from 'axios';
import { server } from '../index';
import { Container, HStack } from '@chakra-ui/react';
import Loader from './Loader';
import Error from './Error';
import ExhangeCard from './ExhangeCard';


const Coins = () => {

const [exchanges, setExchanges] = useState([]);

const [loading, setLoading] = useState(true)

const [error, setError] = useState(false)

  useEffect(() => {
    const fetchExchange = async()=> {
      try{
        const { data } = await axios.get(`${server}/exchanges`);
      setExchanges(data);
      setLoading(false);
    }
    catch(error){
        setLoading(false);
        setError(true);

      }
    };
    fetchExchange(); 
  },[])

  if(error) return <Error message = {"Error while fetching exchanges"}/>

  return <Container maxW={"container.xl"}>
    {loading? <Loader/> : <>
    
    <HStack wrap={'wrap'}>
      {
        exchanges.map((i)=>(

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