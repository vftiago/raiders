import { useRef, useState } from "react";
import { Box, Button, Card, Container, Flex, Heading, ListItem, OrderedList, Tag, Text } from "@chakra-ui/react";
import buttonClick from "./assets/button-click.wav";
import playSound from "./utils/playSound";
import sceneTable from "./game";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const MAX_SECTORS = 10;

const App = () => {
  const buttonClickAudioElementRef = useRef(null);
  const sectors = new Array(MAX_SECTORS).fill(true);
  const [currentSector, setCurrentSector] = useState(0);
  const currentScene = sceneTable.get(currentSector.toString());

  return (
    <Container maxW="8xl" display="grid" gap="8" p="8">
      <audio src={buttonClick} ref={buttonClickAudioElementRef}></audio>
      <Heading as="h1">Raiders</Heading>
      <Flex justifyContent="space-between">
        {sectors.map((_sector, index) => {
          return <Box key={index} bg={index === currentSector ? "yellow.300" : "blue.800"} p="4" rounded="4" />;
        })}
      </Flex>
      <Tabs variant="unstyled">
        <TabList>
          <Tab>Game</Tab>
          <Tab>Character</Tab>
          <Tab>Ship</Tab>
        </TabList>

        <TabPanels>
          <TabPanel p="0">
            <Flex direction="column" gap="8">
              <Card p="4" display="flex" gap="4">
                <Tag alignSelf="flex-start">Sector {currentSector + 1}</Tag>
                <Heading as="h2" fontSize="2xl">
                  {currentScene?.title}
                </Heading>
                <Text as="p">
                  {currentScene?.narrative[0].description.map((paragraph) => {
                    return <p>{paragraph}</p>;
                  })}
                </Text>
                <Card p="4" display="flex" gap="4" bg="gray.800">
                  <OrderedList>
                    {currentScene?.narrative[0].options.map((option) => {
                      return (
                        <ListItem
                          _hover={{
                            cursor: "pointer",
                            color: "yellow.300",
                          }}
                          _active={{
                            color: "cyan.300",
                          }}
                        >
                          {option.text}
                        </ListItem>
                      );
                    })}
                  </OrderedList>
                </Card>
              </Card>
              <Button
                colorScheme="red"
                disabled={true}
                size="lg"
                alignSelf="flex-end"
                onClick={() => {
                  playSound(buttonClickAudioElementRef);
                  setCurrentSector((currentSector) => {
                    if (currentSector === MAX_SECTORS - 1) {
                      return 0;
                    }

                    return currentSector + 1;
                  });
                }}
              >
                Jump
              </Button>
            </Flex>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
};

export default App;
