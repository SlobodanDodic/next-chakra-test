import { Box, Text, useColorModeValue, Flex, Img } from "@chakra-ui/react";

export default function Footer() {
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} py={5}>
        <Flex
          align={"center"}
          _before={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.300", "gray.700"),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.300", "gray.700"),
            flexGrow: 1,
            ml: 8,
          }}
        >
          <Img src="/logo.png" boxSize="32px" alt="logo" />
        </Flex>
        <Text pt={6} fontSize={"sm"} textAlign={"center"} color={useColorModeValue("gray.700", "#ec443c")}>
          © 2022 slobodandodic@gmail.com
        </Text>
      </Box>
    </>
  );
}
