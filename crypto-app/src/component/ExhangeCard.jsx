import { Heading, Image, Text, VStack } from '@chakra-ui/react';
import React from "react";

const ExhangeCard = ({ name, img, rank, url }) => {
  return (
    <>
      <VStack w={'52'} shadow={'lg'} p={'8'} 
      borderRadius={'lg'} transition={'all 0.5s'}
      m={'4'}
      css={{"&:hover":{
        transform:"scale(1.1)"
      }}}
      >
        <Image
          src={img}
          w={"10"}
          h={"10"}
          objectFit={"contain"}
          alt={"Exchanges"}
        />

        <Heading size={"md"} noOfLines={"1"}>
          {rank}
        </Heading>

        <Text noOfLines={'1'}>{name}</Text>
      </VStack>
    </>
  );
};

export default ExhangeCard;
