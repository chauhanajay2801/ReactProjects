import { Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const ExhangeCard = ({ name, img, rank, url }) => {
  return (
    <a href={url} target={"blank"}>
      <VStack>
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
    </a>
  );
};

export default ExhangeCard;
