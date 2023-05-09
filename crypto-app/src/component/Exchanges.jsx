import React, {useEffect,useState} from 'react';
import axios from 'axios';
import { server } from '../index';
import { Container, HStack } from '@chakra-ui/react';
import Loader from './Loader';


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
    
    <HStack>
      {
        exchanges.map((i)=>(
          <div>{i.name}</div>
        ))
      }
    </HStack>

    </>}
  </Container>
}

export default Exchanges