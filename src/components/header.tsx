import { Flex, Heading, HStack, Link, Icon } from "@chakra-ui/react";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

export const Header = () => {
  return (
    <Flex
      px="200px"
      py="20px"
      width="full"
      bg="blue.900"
      alignItems="flex-end"
      justifyContent="space-between"
    >
      <Flex alignItems="flex-end">
        <Heading
          color="whiteAlpha.900"
          mr="60px"
          fontSize={20}
          letterSpacing="1.5px"
        >
          My Logo
        </Heading>
        <HStack color="whiteAlpha.700" spacing="40px">
          <Link>Home</Link>
          <Link>Service</Link>
          <Link>About us</Link>
        </HStack>
      </Flex>
      <Link color="whiteAlpha.800">
        Get in touch
        <Icon as={FiArrowUpRight} ml="10px" h={5} w={5} />
      </Link>
    </Flex>
  );
};
