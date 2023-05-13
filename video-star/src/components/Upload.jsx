import { Container, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineCircleCloudUpload } from 'react-icons/ai'

const Upload = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>

<VStack color={'blue.500'} h={'full'} justifyContent={'center'}>

    <AiOutlineCircleCloudUpload size={'10vmax'}/>

</VStack>
    </Container>
  )
}

export default Upload