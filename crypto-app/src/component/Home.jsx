import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import image1 from "../assets/pexels-worldspectrum-1097946 (1).jpg";

const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
      <Image w={"full"} h={"full"} objectFit={"contain"} src={image1} />
      <Text
        fontSize={"6xl"}
        textAlign={"center"}
        fontWeight={"thin"}
        color={"whiteAlpha.700"}
      >
        CryptoWin
      </Text>
    </Box>
  );
};

export default Home;
