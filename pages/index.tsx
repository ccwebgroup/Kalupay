import type { NextPage } from "next";
import {
  Image,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  Button,
  Center,
} from "@chakra-ui/react";
import Link from "next/link";
import styles from "../styles/CashInOutForm.module.css";

const Home: NextPage = () => {
  return (
    <Container
      maxW="100%"
      p={4}
      borderRadius="lg"
      boxShadow="md"
      bg="black"
      className={styles.formContainer}
      height="100vh"
      maxHeight={1080}
      mx="auto"
    >
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        px={{ base: 2, md: 10 }}
        py={8}
        borderRadius={20}
        justifyContent="center" // Center the content horizontally
      >
        <Flex
          flexDirection="column"
          justifyContent="center"
          w={{ base: "100%", md: "50%" }} // Adjust the width for different breakpoints
        >
          <Stack spacing={4} justifyContent="center">
            <Flex justifyContent="center" alignItems="center">
              <Image
                src="/kalupay_circlebg.png"
                alt="Kalupay"
                w={100}
                maxW={['100%', '80%', '60%', '40%']} // Adjust as needed for different breakpoints
                h="auto" // To maintain the aspect ratio and prevent stretching
              />
              <Text
                ml={5}
                textAlign="center"
                fontWeight="extrabold"
                fontSize={["2xl", "3xl", "4xl", "5xl"]} // Adjust font size for different breakpoints
                color={"white"}
              >
                Kalupay
              </Text>
            </Flex>
            <Heading
              bgGradient='linear(to-bl, rgba(0, 255, 163, 0.8), rgba(3, 225, 255, 0.8), rgba(220, 31, 255, 0.8))'
              bgClip='text'
              fontSize={['3xl', '4xl', '5xl', '6xl']} // Adjust font size for different breakpoints
              fontWeight='extrabold'
              textAlign={"center"}
            >
              A Super DApp designed for your journey on Web3.
            </Heading>
            <Text fontSize={{ base: "md", md: "xl" }} textAlign={"center"}>
              Onboarding more people to Web3
            </Text>
          </Stack>
          <Center>
            <Flex alignItems="center" mt={{ base: 4, md: 6 }}>
              <Link href="/wallet">
                <Button mx={3} fontSize={{ base: "sm", md: "md" }} style={{ width: "160px", height: "60px" }}>
                  Kalupay Wallet
                </Button>
              </Link>
              <Link href="/dex">
                <Button mx={3} fontSize={{ base: "sm", md: "md" }} style={{ width: "160px", height: "60px" }}>
                  Kalupay Exchange
                </Button>
              </Link>
            </Flex>
          </Center>
          <Center>
          <Flex alignItems="center" mt={{ base: 4, md: 6 }}>
              <Link href="/vault">
                <Button mx={3} fontSize={{ base: "sm", md: "md" }} style={{ width: "160px", height: "60px" }}>
                  Kalupay Vault
                </Button>
              </Link>
              <Link href="/tool">
                <Button mx={3} fontSize={{ base: "sm", md: "md" }} style={{ width: "160px", height: "60px" }}>
                  Kalupay Tool
                </Button>
              </Link>
            </Flex>
            </Center>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Home;
