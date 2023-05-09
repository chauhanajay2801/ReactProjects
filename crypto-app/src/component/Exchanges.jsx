import React, {useEffect,useState} from 'react';
import axios from 'axios';
import { server } from '../index';
import { Container, HStack } from '@chakra-ui/react';
import Loader from './Loader';
import { wrap } from 'framer-motion';
import ExhangeCard from './ExhangeCard';


const Exchanges = () => {

const [exchanges, setExchanges] = useState([]);

const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchExchange = async()=> {
      const { data } = await axios.get(`${server}/exchanges`);
      setExchanges(data);
      setLoading(false);
      console.log(data);
    };
    fetchExchange(); 
  },[])

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

export default Exchanges