import React, { useReducer, useState } from "react";
import { Container, Button, Alert } from "react-bootstrap";
import { quizData } from "../data/quizData";
import QuizQuestion from "./QuizQuestion";

const initialState = {
  selectedAnswers: {},  // lưu đáp án người dùng chọn
  score: 0,
  showResult: false
};

function quizReducer(state, action) {
  switch (action.type) {
    case "SELECT_ANSWER":
      return {
        ...state,
        selectedAnswers: {
          ...state.selectedAnswers,
          [action.questionIndex]: action.answer
        }
      };

    case "SUBMIT":
      let score = 0;
      quizData.forEach((q, index) => {
        if (state.selectedAnswers[index] === q.correctAnswer) {
          score++;
        }
      });
      return { ...state, score, showResult: true };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

function Quiz() {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const [submitted, setSubmitted] = useState(false); // useState phụ

  const allAnswered = quizData.every((_, i) => state.selectedAnswers[i]);

  return (
    <Container className="mt-4" style={{ maxWidth: "800px" }}>
      <h2 className="mb-4">React Hooks Quiz</h2>

      {state.showResult && (
        <Alert variant="info">
          <Alert.Heading>Quiz Completed!</Alert.Heading>
          <p>
            Your score: <strong>{state.score} / {quizData.length}</strong>
          </p>
        </Alert>
      )}

      {quizData.map((q, index) => (
        <QuizQuestion
          key={index}
          index={index}
          question={q}
          selectedAnswer={state.selectedAnswers[index]}
          showResult={state.showResult}
          onSelect={(answer) =>
            dispatch({ type: "SELECT_ANSWER", questionIndex: index, answer })
          }
        />
      ))}

      <div className="d-flex gap-2 mt-3">
        {!state.showResult ? (
          <Button
            variant="primary"
            disabled={!allAnswered}
            onClick={() => {
              dispatch({ type: "SUBMIT" });
              setSubmitted(true);
            }}
          >
            Submit Answers
          </Button>
        ) : (
          <Button
            variant="secondary"
            onClick={() => {
              dispatch({ type: "RESET" });
              setSubmitted(false);
            }}
          >
            Try Again
          </Button>
        )}
      </div>
    </Container>
  );
}

export default Quiz;
