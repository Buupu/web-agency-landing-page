import Icon from "@chakra-ui/icon";
import { Flex, Text } from "@chakra-ui/layout";
import React from "react";
import { BiCheckDouble } from "react-icons/bi";

export const Commitment = ({ text }: { text: string }) => {
  return (
    <Flex alignItems="center">
      <Icon w={8} h={8} as={BiCheckDouble} mr="25px" />
      <Text>{text}</Text>
    </Flex>
  );
};
