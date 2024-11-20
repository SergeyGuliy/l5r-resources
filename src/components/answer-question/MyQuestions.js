import { Card, HStack, Stack } from "@chakra-ui/react";
import { MyPageTitle } from "@/components/MyPageTitle";
import { MyQuestion } from "@/components/answer-question/MyQuestion";

export function MyQuestions({
  questions,
  answers,
  answerQuestion,
  selectedClan,
  selectedFamily,
  selectedSchool,
  accumulatedRings,
}) {
  return (
    <Card.Root width={"50%"} h={"100%"}>
      <Stack h={"100%"}>
        <HStack pl={3} pt={3}>
          <MyPageTitle title={"Вопросы"} mb={1} />
        </HStack>

        <Stack overflow={"auto"} h={"100%"} p={2}>
          {Object.entries(questions).map(([questionIndex, questionData]) => (
            <MyQuestion
              key={questionIndex}
              questionIndex={questionIndex}
              questionData={questionData}
              answers={answers}
              answerQuestion={(newQuestion) =>
                answerQuestion(newQuestion, +questionIndex)
              }
              selectedClan={selectedClan}
              selectedFamily={selectedFamily}
              selectedSchool={selectedSchool}
              accumulatedRings={accumulatedRings}
            />
          ))}
        </Stack>
      </Stack>
    </Card.Root>
  );
}
