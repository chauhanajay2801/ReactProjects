import { Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>

        <form action="">
            <VStack alignItems={'stretch'} spacing={'8'} w={'96'} m={'auto'} my={'16'}>
                <Heading>Welcome Back</Heading>

                <Input placeholder='Email' type='Email' required focusBorderColor='blue.500'/>
                <Input placeholder='Password' type='Password' required focusBorderColor='blue.500'/>
                <Button variant={'link'} alignSelf={'flex-end'}>
                    <Link to = {"/forgetpassword"}>forget Password ?</Link>
                </Button>

            <Button colorScheme='blue' type='submit'>Log In</Button>

            <Text textAlign={'right'}>New User?{" "}
            <Button variant={'link'} colorScheme='blue'>
                    <Link to = {"/signup"}>SignUp</Link>
                </Button>
            </Text>
           

            </VStack>
        </form>

    </Container>
  )
}

export default Login