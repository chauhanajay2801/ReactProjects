import { Avatar, Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <Container maxW={'container.xl'} h={'110vh'} p={'16'}>

        <form action="">
            <VStack alignItems={'stretch'} spacing={'8'} w={['full','96']} m={'auto'} my={'16'}>
                <Heading alignSelf={'center'}>Video-Star</Heading>
                <Avatar alignSelf={'center'} boxSize={'32'}/>

                <Input placeholder='Name' type='text' required focusBorderColor='blue.500'/>
                <Input placeholder='Email' type='Email' required focusBorderColor='blue.500'/>
                <Input placeholder='Password' type='Password' required focusBorderColor='blue.500'/>
             

            <Button colorScheme='blue' type='submit'>Sign Up</Button>

            <Text textAlign={'right'}>Already Signed Up?{" "}
            <Button variant={'link'} colorScheme='blue'>
                    <Link to = {"/login"}>Login</Link>
                </Button>
            </Text>
           

            </VStack>
        </form>

    </Container>
  )
}


export default SignUp