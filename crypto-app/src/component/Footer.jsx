import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"centre"}>
        <VStack w={"full"} alignItems={["centre", "flex-start"]}>
          <Text fontStyle={"bold"}>About Us</Text>
          <Text
            fontSize={"l"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            We are the best Crypto trading app Worldwide
          </Text>
        </VStack>

        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]} />
          <Text>Our Founder</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
