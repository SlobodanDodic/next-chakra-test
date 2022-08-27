import React from "react";
import {
  Box,
  Flex,
  Stack,
  Button,
  useColorMode,
  useColorModeValue,
  Link,
  HStack,
  IconButton,
  Img,
  useDisclosure,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Links = ["Dashboard", "Projects", "Team"];

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const colorToggle = useColorModeValue("brand.100", "gray.500");

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"} maxW="1200px" mx="auto">
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Img src="/logo.png" boxSize="32px" alt="logo" />
            <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }} fontSize="0.75em" fontWeight="700">
              <Link px={2} py={1} rounded={"md"} href={"/about"}>
                About
              </Link>
              <Link px={2} py={1} rounded={"md"} href={"/work"}>
                Work
              </Link>
              <Link px={2} py={1} rounded={"md"} href={"/contact"}>
                Contact
              </Link>
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Button onClick={toggleColorMode}>{colorMode === "light" ? <MoonIcon /> : <SunIcon />}</Button>
          </Flex>
        </Flex>

        {isOpen && (
          <Box
            position="absolute"
            left="0"
            w="100vw"
            h="55vh"
            zIndex="1"
            textAlign="center"
            py={4}
            bg="#171923"
            color="white"
          >
            <Stack as={"nav"} spacing={4}>
              <Link px={2} py={1} rounded={"md"} href={"/about"}>
                About
              </Link>
              <Link px={2} py={1} rounded={"md"} href={"/work"}>
                Work
              </Link>
              <Link px={2} py={1} rounded={"md"} href={"/contact"}>
                Contact
              </Link>
            </Stack>
          </Box>
        )}
      </Box>
    </>
  );
}
