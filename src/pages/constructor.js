import { ClientOnly } from "@chakra-ui/react";
import { MyAnswerQuestion } from "@/components/answer-question/MyAnswerQuestion";

export default function Constructor() {
  return (
    <ClientOnly>
      <MyAnswerQuestion />
    </ClientOnly>
  );
}
