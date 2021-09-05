import * as React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Landing } from "./pages/landing/landing";

const theme = extendTheme({
  fonts: {
    heading: "Raleway",
    body: "Raleway",
  },
});

export const App = () => (
  <ChakraProvider theme={theme}>
    <Header />
    <Landing />
    <Footer />
  </ChakraProvider>
);
