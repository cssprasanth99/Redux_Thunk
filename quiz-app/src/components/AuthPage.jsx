import { Container, Heading, Button } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import login from "../redux/actions/AuthAction";
export const AuthPage = () => {
  const dispatch = useDispatch();
  let loginState = useSelector((state) => state.auth);
  console.log(loginState);

  const handleClick = () => {
    dispatch(login());
  };

  return (
    <div>
      <Container maxW={"container.md"} mt="8">
        <Heading as="h1" mb="4">
          Quiz App
        </Heading>
        <Button colorScheme="blue" onClick={handleClick}>
          Login
        </Button>
      </Container>
    </div>
  );
};
