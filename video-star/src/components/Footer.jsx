import {
    Box,
    HStack,
    Heading,
    Stack,
    VStack,
    Button,
    Input,
  } from '@chakra-ui/react';
  import { AiOutlineSend } from 'react-icons/ai';
  import React from 'react';
  
  const Footer = () => {
    return (
      <Box bg={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
        <Stack direction={['column', 'row']}>
          <VStack alignItems={'stretch'} w={'full'} px={'4'}>
            <Heading size={'md'} textTransform={'UpperCase'}>
              Subscribe to get updates
            </Heading>
            <HStack borderBottom={'2px solid white'} py={'2'}>
              <Input
                placeholder="Enter email here..."
                border={'none'}
                borderRadius="none"
                outline="none"
                focusBorderColor="none"
              />
              <Button
                p={'0'}
                colorScheme="purple"
                variant="ghost"
                borderRadius={'0 20px 20px 0'}
              >
                <AiOutlineSend size={'20'} />
              </Button>
            </HStack>
          </VStack>
  
  
  
            <VStack width={'full'} 
            borderLeft={['none','1px solid white']}
            borderRight={['none','1px solid white']}
            >
              <Heading size={'md'} textTransform={'uppercase'} textAlign={'center'}>The VideoHub</Heading>
            </VStack>
  
            <VStack width={'full'}></VStack>
        </Stack>
      </Box>
    );
  };
  
  export default Footer;
  