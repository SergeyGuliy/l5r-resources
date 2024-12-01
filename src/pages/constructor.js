import { MyAnswerQuestion } from "@/components/answer-question/MyAnswerQuestion";
import { MyPageWrapper } from "@/components/MyPageWrapper";

export default function Constructor() {
  return (
    <MyPageWrapper metadata={{ title: "Генератор персонажа" }}>
      <MyAnswerQuestion />
    </MyPageWrapper>
  );
}
