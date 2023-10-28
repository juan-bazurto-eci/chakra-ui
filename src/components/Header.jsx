import { Button } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
function Header() {
  return (
    <Center alignSelf="center" marginTop="5%">
      <Grid
        className="grid"
        templateAreas={`"title title"
                            "button1 button2"`}
      >
        <GridItem p="2" area={"title"}>
          <Text
            color="white"
            fontSize="3xl"
            fontFamily="revert"
            fontWeight="100"
          >
            DOMINA EL TERRENO
          </Text>
        </GridItem>
        <GridItem p="2" area={"button1"}>
          <Button colorScheme="gray" color="white" variant="outline">
            Ver Detalles
          </Button>
        </GridItem>
        <GridItem p="2" area={"button2"}>
          <Button colorScheme="gray" color="#663825" variant="solid">
            Ver Video
          </Button>
        </GridItem>
      </Grid>
    </Center>
  );
}
export default Header;
