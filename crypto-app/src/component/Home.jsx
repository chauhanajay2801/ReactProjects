import { Box, Image, Img, Text } from '@chakra-ui/react'
import React from 'react'
import btsrr from "../assets/btc.png"

const Home = () => {
  return (
    <Box bgColor={'blackAlpha.900'} w={'full'} h={'85vh'}>
      <Img w={'full'} h={'full'} objectFit={'contain'} srcSet='btsrr'/>
      <Text fontSize={'6xl'} textAlign={'center'} fontWeight={'thin'} color={'whiteAlpha.700'} >CryptoWin</Text>
    </Box>
  )
}

export default Home