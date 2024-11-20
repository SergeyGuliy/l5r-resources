import { Card, Stack } from "@chakra-ui/react";
import { MyPageTitle } from "@/components/MyPageTitle";
import { MyQuestion } from "@/components/MyQuestion";

export function MyQuestions({ questions, answerQuestion }) {
  function localAnswerQuestion(newQuestion, questionIndex) {
    if (questionIndex === 1) {
      answerQuestion({
        ...questions,
        [questionIndex]: newQuestion,
        [2]: {
          ...questions[2],
          answer: "",
        },
        [3]: {
          ...questions[3],
          answer: "",
        },
      });
    } else {
      answerQuestion({
        ...questions,
        [questionIndex]: newQuestion,
      });
    }
  }

  return (
    <Card.Root width={"50%"} p={3}>
      <Stack>
        <MyPageTitle title={"Вопросы"} />

        {Object.entries(questions).map(([questionIndex, questionData]) => (
          <MyQuestion
            key={questionIndex}
            questionIndex={questionIndex}
            questionData={questionData}
            questions={questions}
            answerQuestion={(newQuestion) =>
              localAnswerQuestion(newQuestion, questionIndex)
            }
          />
        ))}
      </Stack>
    </Card.Root>
  );
}
