import { Box, Heading, HStack } from "@chakra-ui/react";
import React from "react";
import { WorkMethodCard } from "../../../components/workMethodCard";
import ManOnPhone from "../../../assets/man-on-phone7x5.jpg";
import ManOnLaptop from "../../../assets/man-on-laptop7x5.jpg";
import WomanAtBoard from "../../../assets/woman-at-board7x5.jpg";

export const HowWeWork = () => {
  return (
    <Box w="full" px="200px" py="60px">
      <Heading fontSize={42} letterSpacing="4px" color="blue.900" pb="80px">
        How do we work?
      </Heading>
      <HStack w="full" alignItems="flex-start" spacing="75px">
        <WorkMethodCard
          imagePath={ManOnPhone}
          heading="User centered design"
          description="Incididunt culpa qui quis incididunt amet adipisicing. Dolor cillum Lorem ad pariatur ea cillum quis ipsum aliquip labore labore. Deserunt ex deserunt dolor dolore sunt tempor sunt nulla occaecat."
        />
        <WorkMethodCard
          imagePath={ManOnLaptop}
          heading="Agile development"
          description="Anim reprehenderit culpa duis veniam anim ex ea et eiusmod est. Amet dolor non magna dolor enim sint pariatur voluptate elit pariatur Lorem ad amet. "
        />
        <WorkMethodCard
          imagePath={WomanAtBoard}
          heading="Continous integration"
          description="Amet ut commodo officia eu minim esse magna veniam non minim. Laborum nostrud excepteur deserunt eiusmod exercitation enim esse. Voluptate Lorem aute non laborum et incididunt. Consequat proident dolore cupidatat deserunt aute Lorem quis."
        />
      </HStack>
    </Box>
  );
};
