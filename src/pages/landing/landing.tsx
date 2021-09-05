import { Box } from "@chakra-ui/react";
import React from "react";
import { Intro } from "./sections/intro";
import { Services } from "./sections/services";
import { Commitments } from "./sections/commitments";
import { HowWeWork } from "./sections/how-we-work";
import { Testimonials } from "./sections/testimonials";

export const Landing = () => {
  return (
    <Box>
      <Intro />
      <Services />
      <Commitments />
      <HowWeWork />
      <Testimonials />
    </Box>
  );
};
