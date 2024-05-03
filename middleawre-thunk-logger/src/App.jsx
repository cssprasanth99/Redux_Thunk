import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./redux/action";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Divider,
  Text,
  Button,
  ButtonGroup,
  Grid,
  GridItem,
  Center,
  HStack,
  Box,
  Flex,
} from "@chakra-ui/react";

function App() {
  const dispatch = useDispatch();
  const { data } = useSelector((store) => store);
  console.log(data);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <>
      <Flex>
        <Box>
          <Button m={"4"}>High to Low</Button>
          <Button m={"4"}>Low to High</Button>
        </Box>
        <Grid templateColumns="repeat(5, 1fr)" gap={10}>
          {data.data &&
            data.data.map((element, index) => (
              <Card maxW="sm" key={index}>
                <CardBody>
                  <Center>
                    <Image
                      src={element.image}
                      alt="Green double couch with wooden legs"
                      borderRadius="lg"
                      boxSize="150px"
                    />
                  </Center>
                  <Stack mt="6" spacing="3">
                    <Heading size="md">Living room Sofa</Heading>
                    <Text>{element.description}</Text>
                    <Text color="blue.600" fontSize="2xl">
                      ${element.price}
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <Button variant="solid" colorScheme="blue">
                      Buy now
                    </Button>
                    <Button variant="ghost" colorScheme="blue">
                      Add to cart
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            ))}
        </Grid>
      </Flex>
    </>
  );
}

export default App;
