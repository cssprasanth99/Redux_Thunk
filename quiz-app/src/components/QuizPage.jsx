import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Heading } from "@chakra-ui/react";
import { fetchQuiz } from "../redux/actions/quizActions";
import { submitAnswer } from "../redux/actions/quizActions";

export const QuizPage = () => {
  const dispatch = useDispatch();
  const quiz = useSelector((store) => store.quiz);

  useEffect(() => {
    dispatch(fetchQuiz());
  }, [dispatch]);

  function handleAnswer(q, index) {
    return dispatch(submitAnswer(q, index));
  }

  return (
    <Container maxW="container.md" mt={"8"}>
      <Heading as="h1" mb={"4"}>
        Quiz
      </Heading>
      {quiz.questions.data &&
        quiz.questions.data.map((question, q) => (
          <div key={question.id}>
            <p>{question.question}</p>
            {question.options.map((option, index) => (
              <Button
                key={index}
                colorScheme="blue"
                isDisabled={quiz.clicked.includes(q)}
                onClick={() => handleAnswer(q, index)}
                mt="2"
                mr="2"
              >
                {option}
              </Button>
            ))}
          </div>
        ))}
      <Button colorScheme="green" mt="4">
        Submit
      </Button>
    </Container>
  );
};
