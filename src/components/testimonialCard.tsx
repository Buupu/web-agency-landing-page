import { Avatar } from "@chakra-ui/avatar";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import ManPortrait from "../assets/man-portrait1x1.jpg";

export const TestimonialCard = () => {
  return (
    <Box w="full" px="40px" py="20px" bg="white">
      <Flex alignItems="center" pb="20px">
        <Avatar src={ManPortrait} mr="20px"></Avatar>
        <Box>
          <Heading fontSize={16} color="blue.900" mb="2px">
            Zac Walker
          </Heading>
          <Text fontSize={12} color="gray.500">
            Founder of mock.io
          </Text>
        </Box>
      </Flex>
      <Text color="blue.700" fontSize={14}>
        "Exercitation incididunt incididunt officia velit ullamco nulla
        reprehenderit labore ullamco. Consectetur laborum velit est magna veniam
        id minim deserunt. Aliquip culpa nisi irure est sunt cillum duis."
      </Text>
    </Box>
  );
};
