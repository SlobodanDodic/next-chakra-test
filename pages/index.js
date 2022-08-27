import { useColorModeValue, Container, Grid, GridItem } from "@chakra-ui/react";

export default function Home() {
  const onClick = () => {
    console.log("onClick");
  };

  return (
    <Container
      className="home"
      bg={useColorModeValue("gray.100", "gray.900")}
      maxW="100vw"
      overflow="hidden"
      centerContent
      pb={5}
    >
      <hr style={{ width: "100vw", padding: "10px" }} />
      <Grid templateRows="repeat(3, 1fr)" templateColumns="repeat(3, 1fr)" gap={3} className="grid-container">
        <GridItem className="grid one" bg={useColorModeValue("gray.100", "gray.900")} onClick={onClick}></GridItem>
        <GridItem className="grid two" bg={useColorModeValue("gray.100", "gray.900")} onClick={onClick}></GridItem>
        <GridItem className="grid three" bg={useColorModeValue("gray.100", "gray.900")} onClick={onClick}></GridItem>
        <GridItem className="grid four" bg={useColorModeValue("gray.100", "gray.900")} onClick={onClick}></GridItem>
        <GridItem className="grid five" bg={useColorModeValue("gray.100", "gray.900")} onClick={onClick}></GridItem>
        <GridItem className="grid six" bg={useColorModeValue("gray.100", "gray.900")} onClick={onClick}></GridItem>
        <GridItem className="grid seven" bg={useColorModeValue("gray.100", "gray.900")} onClick={onClick}></GridItem>
        <GridItem className="grid eight" bg={useColorModeValue("gray.100", "gray.900")} onClick={onClick}></GridItem>
        <GridItem className="grid nine" bg={useColorModeValue("gray.100", "gray.900")} onClick={onClick}></GridItem>
      </Grid>
    </Container>
  );
}
