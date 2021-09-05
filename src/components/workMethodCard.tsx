import { AspectRatio, Box, Heading, Img, Text } from "@chakra-ui/react";
import React from "react";

export const WorkMethodCard = ({
  imagePath,
  heading,
  description,
}: {
  imagePath: string;
  heading: string;
  description: string;
}) => {
  return (
    <Box w="full">
      <AspectRatio ratio={5 / 7}>
        <Img src={imagePath} pb="30px" />
      </AspectRatio>
      <Heading fontSize="24px" color="blue.900" pb="20px">
        {heading}
      </Heading>
      <Text color="blue.700" fontSize="14px">
        {description}
      </Text>
    </Box>
  );
};
