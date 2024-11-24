import { useMemo } from "react";
import { Box } from "@chakra-ui/react";

import { Stack, Text } from "@chakra-ui/react";
import { createListCollection } from "@chakra-ui/react";

import { MyQuestionMultiselect } from "@/components/answer-question/questions/MyQuestionMultiselect";
import { MyQuestionOptions } from "@/components/answer-question/questions/MyQuestionOptions";
import { MyQuestionRing } from "@/components/answer-question/questions/MyQuestionRing";
import { MyQuestionPreview } from "@/components/answer-question/questions/MyQuestionPreview";
import { MyQuestionSelect } from "@/components/answer-question/questions/MyQuestionSelect";

import { _clans } from "@/mockData/clansFamiliesSchools/clans/_clans";
import { _families } from "@/mockData/clansFamiliesSchools/families";
import { _schools } from "@/mockData/clansFamiliesSchools/schools";
import { skills } from "@/mockData/routeData/skills";
import { _techniques } from "@/mockData/routeData/techniques";
import { questions } from "@/components/answer-question/_questionsAndAnswers";
import { MyHtml } from "@/components/MyHtml";

const skill8list = {
  Torgovlya: skills.Torgovlya,
  Rabota: skills.Rabota,
  Medicina: skills.Medicina,
  Morehodstvo: skills.Morehodstvo,
  Zhulnichestvo: skills.Zhulnichestvo,
  Vyzhivanie: skills.Vyzhivanie,
};

const list7 = [
  { label: "Лоялен (+5 славы)", value: "selectGlory" },
  { label: "Конфликт (+1 ранг в навыке)", value: "selectSkill" },
];

const list8 = [
  { label: "Ортодоксален (+10 чести)", value: "selectHonor" },
  { label: "Неверен (+1 ранг в навыке:)", value: "selectSkill" },
];

export function MyQuestion({
  questionIndex,
  questionData,
  answers,
  answerQuestion,
  selectedClan,
  selectedFamily,
  selectedSchool,
  accumulatedRings,
  accumulatedSkills,
  expandedQuestions,
}) {
  const clans = createListCollection({
    items: Object.values(_clans).map((i) => ({
      label: i.title,
      value: i.key,
      data: i,
    })),
  });

  const families = useMemo(
    () =>
      createListCollection({
        items: Object.values(_families)
          .filter((i) => i.clan === answers[1])
          .map((i) => ({
            label: i.title,
            value: i.key,
            data: i,
          })),
      }),
    [answers]
  );

  const schools = useMemo(
    () =>
      createListCollection({
        items: Object.values(_schools)
          .filter((i) => i.clan === answers[1])
          .map((i) => ({
            label: i.title,
            value: i.key,
          })),
      }),
    [answers]
  );

  const skills7 = useMemo(
    () =>
      createListCollection({
        items: Object.entries(accumulatedSkills)
          .filter((i) => !i[1] || i[0] === answers[7]?.value)
          .map(([key]) => ({
            label: skills[key].title,
            value: skills[key].key,
          })),
      }),
    [accumulatedSkills, answers]
  );

  const skills8 = useMemo(
    () =>
      createListCollection({
        items: Object.entries(accumulatedSkills)
          .filter((i) => i[1] < 3 && skill8list[i[0]])
          .map(([key]) => ({
            label: skills[key].title,
            value: skills[key].key,
          })),
      }),
    [accumulatedSkills]
  );

  const skills17 = useMemo(
    () =>
      createListCollection({
        items: Object.entries(accumulatedSkills)
          .filter((i) => !i[1] || i[0] === answers[17])
          .map(([key]) => ({
            label: skills[key].title,
            value: skills[key].key,
          })),
      }),
    [accumulatedSkills, answers]
  );

  const answerExtended = (v) =>
    answerQuestion({ ...answers[questionIndex], ...v });

  if (
    !expandedQuestions &&
    ["discussWithMaster", "notReady"].includes(questionData.trigger)
  )
    return;

  return (
    <Box p={1} pl={2}>
      <Text textStyle={"md"} fontWeight="semibold" mb={2}>
        {questionIndex}. {questionData.question}
      </Text>

      {questions[questionIndex].description && expandedQuestions && (
        <Box pl={4}>
          <MyHtml content={questions[questionIndex].description} />
        </Box>
      )}

      <Box pl={4}>
        {questionIndex === "1" && (
          <Stack>
            <MyQuestionOptions
              placeholder={"Клан "}
              list={clans}
              invalid={!answers[questionIndex]}
              value={answers[questionIndex]}
              onCustomUpdateValue={(val) => answerQuestion(val)}
            />

            <MyQuestionPreview show={expandedQuestions} data={selectedClan} />
          </Stack>
        )}

        {questionIndex === "2" && (
          <Stack>
            <MyQuestionOptions
              placeholder={"Семья "}
              disabled={families.items.length === 0}
              invalid={!answers[questionIndex]}
              list={families}
              value={answers[questionIndex]}
              onCustomUpdateValue={(val) => answerQuestion(val)}
            />

            <MyQuestionPreview show={expandedQuestions} data={selectedFamily} />
          </Stack>
        )}

        {questionIndex === "3" && (
          <Stack>
            <MyQuestionOptions
              placeholder={"Школа "}
              disabled={schools.items.length === 0}
              invalid={!answers[questionIndex]?.key}
              list={schools}
              value={answers[questionIndex].key}
              onCustomUpdateValue={(key) => answerQuestion({ key })}
            />

            <MyQuestionPreview show={expandedQuestions} data={selectedSchool} />

            {selectedSchool?.ringIncrease?.find((i) => i.key === "select") && (
              <>
                <Text textStyle={"md"} fontWeight="semibold">
                  Выберите +1 к двум разным Кольцам
                </Text>
                <MyQuestionRing
                  value={answers[questionIndex].ring1}
                  otherSelectedRing={answers[questionIndex].ring2}
                  onCustomUpdateValue={(ring1) => answerExtended({ ring1 })}
                  accumulatedRings={accumulatedRings}
                />
                <MyQuestionRing
                  value={answers[questionIndex].ring2}
                  otherSelectedRing={answers[questionIndex].ring1}
                  onCustomUpdateValue={(ring2) => answerExtended({ ring2 })}
                  accumulatedRings={accumulatedRings}
                />
              </>
            )}

            <MyQuestionMultiselect
              title="Выберете навыки"
              data={selectedSchool?.skillAvailable}
              selectList={answers[questionIndex].skills}
              onUpdate={(skills) => answerExtended({ skills })}
              typeData={skills}
            />

            {selectedSchool?.startingTechniques.map((item, index) => (
              <MyQuestionMultiselect
                key={index}
                title={`Выберете технику (${item?.type?.title})`}
                data={item}
                selectList={answers[questionIndex][`techniques_${index + 1}`]}
                onUpdate={(v) =>
                  answerExtended({ [`techniques_${index + 1}`]: v })
                }
                typeData={_techniques}
              />
            ))}
          </Stack>
        )}

        {questionIndex === "4" && (
          <MyQuestionRing
            value={answers[questionIndex]}
            onCustomUpdateValue={(value) => answerQuestion(value)}
            accumulatedRings={accumulatedRings}
          />
        )}

        {questionIndex === "7" && (
          <>
            <MyQuestionSelect
              items={list7}
              value={answers[questionIndex].key}
              onCustomUpdateValue={(key) => answerQuestion({ key })}
            />

            {answers[questionIndex].key === "selectSkill" && (
              <MyQuestionOptions
                placeholder={"Навык "}
                invalid={!answers[questionIndex].value}
                list={skills7}
                value={answers[questionIndex].value}
                onCustomUpdateValue={(value) => answerExtended({ value })}
              />
            )}
          </>
        )}

        {questionIndex === "8" && (
          <>
            <MyQuestionSelect
              items={list8}
              value={answers[questionIndex].key}
              onCustomUpdateValue={(key) => answerQuestion({ key })}
            />

            {answers[questionIndex].key === "selectSkill" && (
              <MyQuestionOptions
                placeholder={"Навык "}
                invalid={!answers[questionIndex].value}
                list={skills8}
                value={answers[questionIndex].value}
                onCustomUpdateValue={(value) => answerExtended({ value })}
              />
            )}
          </>
        )}

        {questionIndex === "17" && (
          <MyQuestionOptions
            placeholder={"Навык "}
            invalid={!answers[questionIndex]}
            list={skills17}
            value={answers[questionIndex]}
            onCustomUpdateValue={(val) => answerQuestion(val)}
          />
        )}
      </Box>
    </Box>
  );
}
