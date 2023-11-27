import { Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { PageWithAppBar } from "~/components/layout/AppBar";

function Home() {
  return (
    <>
      <PageWithAppBar>
        <Flex
          flexDirection="column"
          justifyContent="start"
          alignItems="center"
          h="100%"
          w="100%"
          pt={[32]}
          pb={8}
          px={4}
        >
          <VStack gap={[8, null, 12, 4]}>
            <Heading
              as="h1"
              size={["3xl", null, "4xl"]}
              color="primary"
              fontWeight="bold"
            >
              Next PWA Starter
            </Heading>
            <Heading
              as="h3"
              size={["lg", null, "2xl"]}
              textAlign="center"
              fontWeight="medium"
            >
              Creado por Frutero Club
            </Heading>
          </VStack>
          <Flex justifyContent="center" py={16}>
            <Link href="/login">
              <Button px={8} py={4} variant="primary" fontSize="xl" size="lg">
                Login
              </Button>
            </Link>
          </Flex>
          <Flex justifyContent="center">
            <Button
              px={8}
              py={4}
              variant="secondary"
              fontSize="xl"
              style={{ height: "unset", whiteSpace: "initial" }}
            >
              <Text noOfLines={2}>🚧 En construcción 🏗️</Text>
            </Button>
          </Flex>
        </Flex>
      </PageWithAppBar>
    </>
  );
}

export default Home;
