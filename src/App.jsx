import { ColorModeScript } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme.jsx";
import { Skeleton } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import Header from "./components/Header";

function App() {
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Grid
        bg="#A8A9AD"
        templateAreas={`"header header"
                        "skeleton1 skeleton2"`}
        gridTemplateRows={"2fr 5fr"}
        gridTemplateColumns={"1fr 1fr"}
        h="100vh"
        gap="2"
        color="blackAlpha.700"
        fontWeight="bold"
        padding={3}
      >
        <GridItem
          pl="2"
          bgColor="#984F30"
          bgImage="url(https://i.pinimg.com/564x/55/78/bb/5578bb70d5a0b6177f84ae68aa5fd458.jpg)"
          bgSize="contain"
          bgPos="center center"
          area={"header"}
        >
          <Header />
        </GridItem>
        <GridItem pl="2" bg="gray.300" area={"skeleton1"}>
          <Stack padding={4} spacing={3}>
            <Skeleton height="100px" />
            <Skeleton height="100px" />
            <Skeleton height="100px" />
          </Stack>
        </GridItem>
        <GridItem pl="2" bg="gray.300" area={"skeleton2"}>
          <Stack padding={4} spacing={3}>
            <Skeleton height="100px" />
            <Skeleton height="100px" />
            <Skeleton height="100px" />
          </Stack>
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
}

export default App;
