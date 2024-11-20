import { Card, Stack } from "@chakra-ui/react";
import { MyPageTitle } from "@/components/MyPageTitle";
import { MyQuestion } from "@/components/answer-question/MyQuestion";

export function MyQuestions({ questions, answers, answerQuestion }) {
  return (
    <Card.Root width={"50%"} p={2}>
      <Stack>
        <MyPageTitle title={"Вопросы"} />

        {Object.entries(questions).map(([questionIndex, questionData]) => (
          <MyQuestion
            key={questionIndex}
            questionIndex={questionIndex}
            questionData={questionData}
            answers={answers}
            answerQuestion={(newQuestion) =>
              answerQuestion(newQuestion, +questionIndex)
            }
          />
        ))}
      </Stack>
    </Card.Root>
  );
}
