import { Box } from "@chakra-ui/react";
import { MyPageTitle } from "@/components/MyPageTitle";
import { MyAnswerQuestion } from "@/components/answer-question/MyAnswerQuestion";

export default function Constructor() {
  return (
    <Box display="flex" flexDirection="column" w={"100%"} h={"100%"}>
      <MyPageTitle title={"Конструктор персонажа"} />

      <MyAnswerQuestion />
    </Box>
  );
}
