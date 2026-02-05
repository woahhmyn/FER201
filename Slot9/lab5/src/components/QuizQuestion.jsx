import React from "react";
import { Card, Form } from "react-bootstrap";

function QuizQuestion({ question, index, selectedAnswer, onSelect, showResult }) {
  return (
    <Card className="mb-3 shadow-sm">
      <Card.Body>
        <Card.Title>
          Question {index + 1}: {question.question}
        </Card.Title>

        <Form>
          {question.answers.map((ans, i) => {
            const isCorrect = ans === question.correctAnswer;
            const isChosen = ans === selectedAnswer;

            let style = {};
            if (showResult) {
              if (isCorrect) style = { color: "green", fontWeight: "bold" };
              else if (isChosen && !isCorrect) style = { color: "red" };
            }

            return (
              <Form.Check
                key={i}
                type="radio"
                name={`question-${index}`}
                label={ans}
                checked={isChosen}
                disabled={showResult}
                onChange={() => onSelect(ans)}
                style={style}
              />
            );
          })}
        </Form>
      </Card.Body>
    </Card>
  );
}

export default QuizQuestion;
