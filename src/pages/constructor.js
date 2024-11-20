import { Box, HStack, Card } from "@chakra-ui/react";
import { MyPageTitle } from "@/components/MyPageTitle";
import { MyQuestions } from "@/components/MyQuestions";
import { useState } from "react";
import { MyAnswers } from "@/components/MyAnswers";

const _questions = {
  1: {
    question: "К какому клану принадлежит ваш персонаж?",
    trigger: "choseClan",
    answer: "",
  },
  2: {
    question: "К какой семье принадлежит ваш персонаж?",
    trigger: "choseFamily",
    answer: "",
  },
  3: {
    question: "К какой школе принадлежит ваш персонаж?",
    trigger: "choseSchool",
    answer: "",
  },
  4: {
    question: "Как ваш персонаж выделяется в своей школе?",
    trigger: "schoolUnique",
    answer: "",
  },
  5: {
    question:
      "Кто ваш господин и в чем заключается долг вашего персонажа перед ним? (выберите гири) ",
    trigger: "discussWithMaster",
    answer: "",
  },
  6: {
    question:
      "К чему стремится ваш персонаж и как это может помешать его долгу? (выберите ниндзё)",
    trigger: "discussWithMaster",
    answer: "",
  },
  7: {
    question: "Каковы отношения вашего персонажа с его кланом?",
    // trigger: "gloryOrSkill",
    trigger: "notReady",
    answer: "",
  },
  8: {
    question: "Что ваш персонаж думает о бусидо?",
    // trigger: "honorOrSkill",
    trigger: "notReady",
    answer: "",
  },
  9: {
    question:
      "Какое самое большое достижение вашего персонажа на данный момент?",
    trigger: "notReady",
    answer: "",
  },
  10: {
    question: "Что больше всего сдерживает вашего персонажа в жизни?",
    trigger: "notReady",
    answer: "",
  },
  11: {
    question:
      "Какая деятельность больше всего помогает вашему персонажу чувствовать себя умиротворенным?",
    trigger: "notReady",
    answer: "",
  },
  12: {
    question:
      "Какое опасение, страх или слабость беспокоят вашего персонажа больше всего?",
    trigger: "notReady",
    answer: "",
  },
  13: {
    question: "От кого ваш персонаж больше всего научился за свою жизнь?",
    trigger: "notReady",
    answer: "",
  },
  14: {
    question:
      "Что люди замечают в первую очередь при знакомстве с вашим персонажем?",
    trigger: "notReady",
    answer: "",
  },
  15: {
    question: "Как ваш персонаж реагирует на стрессовые ситуации?",
    trigger: "notReady",
    answer: "",
  },
  16: {
    question:
      "Каковы ранее существовавшие отношения у вашего персонажа с другими кланами, семьями, организациями и традициями?",
    trigger: "notReady",
    answer: "",
  },
  17: {
    question: "Как бы родители вашего персонажа описали его?",
    // trigger: "increaseUnresearchedSkill",
    trigger: "notReady",
    answer: "",
  },
  18: {
    question: "В честь кого был назван ваш персонаж?",
    trigger: "discussWithMaster",
    answer: "",
  },
  19: {
    question: "Каково личное имя вашего персонажа?",
    trigger: "discussWithMaster",
    answer: "",
  },
  20: {
    question: "Как должен умереть ваш персонаж?",
    trigger: "discussWithMaster",
    answer: "",
  },
};

export default function Constructor() {
  const [questions, setQuestion] = useState(_questions);

  function answerQuestion(newQuestions) {
    setQuestion(newQuestions);
  }

  return (
    <Box display="flex" flexDirection="column" w={"100%"} h={"100%"}>
      <MyPageTitle title={"Конструктор персонажа"} />

      <HStack width={"100%"}>
        <MyQuestions questions={questions} answerQuestion={answerQuestion} />

        <MyAnswers questions={questions} />
      </HStack>
    </Box>
  );
}
