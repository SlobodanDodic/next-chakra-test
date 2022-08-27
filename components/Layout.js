import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

import ProgressBar from "react-scroll-progress-bar";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Navbar />
      <ProgressBar bgcolor="#dd3f39" />
      {children}
      <Footer />
    </>
  );
}

{
  /* <Flex direction={{ base: "column-reverse", md: "row" }} />  
<Box w={{ md: "50%" }}  w={{ md: "100%" }} /> 
<Box display={{ md: "none" }} /> */
}

{
  /* <Box pt={[10, 20]}>
          <Text fontSize={["1em", "2em"]} letterSpacing={4} fontFamily="Monospace">
            <span style={{ color: "purple", filter: "drop-shadow(2px 4px 6px black)" }}>while </span>
            <span fontSize="2xl" style={{ color: "yellow", filter: "drop-shadow(2px 4px 6px black)" }}>
              (<span style={{ color: "#2d2deb" }}>!success</span>) &#123;
            </span>
            <br />
            <span
              fontSize="2xl"
              style={{ color: "yellow", filter: "drop-shadow(2px 4px 6px black)", paddingLeft: "25px" }}
            >
              tryAgain();
            </span>
            <br />
            <span
              fontSize="2xl"
              style={{ color: "purple", filter: "drop-shadow(2px 4px 6px black)", paddingLeft: "25px" }}
            >
              if (<span style={{ color: "#2d2deb" }}>dead</span>) break;
            </span>
            <br />
            <span fontSize="2xl" style={{ color: "yellow", filter: "drop-shadow(2px 4px 6px black)" }}>
              &#125;;
            </span>
          </Text>
        </Box>
        <Box borderBottom="1px" borderColor={useColorModeValue("gray.300", "gray.700")}>
          <Img src="/treeMe.png" alt="sky" filter="drop-shadow(2px 4px 6px gray)" py={20} />
        </Box> */
}
{
  /* <Img src="/skyDive.jpeg" alt="sky" objectFit="cover" w="100%" h="100%" p={1} /> */
}
