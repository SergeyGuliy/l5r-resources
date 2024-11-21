import { useMemo } from "react";
import { Tabs } from "@chakra-ui/react";
import { LuCheckSquare, LuFolder, LuUser } from "react-icons/lu";

import { Card, CheckboxGroup, HStack, Stack, Text } from "@chakra-ui/react";
import { createListCollection } from "@chakra-ui/react";

import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "@/components/ui/select";
import { CheckboxCard } from "@/components/ui/checkbox-card";

import { _clans } from "@/mockData/clansFamiliesSchools/clans/_clans";
import { _families } from "@/mockData/clansFamiliesSchools/families";
import { _schools } from "@/mockData/clansFamiliesSchools/schools";
import { _rings } from "@/mockData/routeData/other/rings/_rings";
import MyHoverCard from "@/components/MyHoverCard";
import { MyQuestionMultiselect } from "@/components/answer-question/MyQuestionMultiselect";
import { LuInfo } from "react-icons/lu";
import { skills } from "@/mockData/routeData/skills";
import { MyPreviewList } from "@/components/MyPreviewList";
import { MyPreviewText } from "@/components/MyPreviewText";
import { MyPreviewSchoolTech } from "@/components/MyPreviewSchoolTech";

const skill8list = {
  Torgovlya: skills.Torgovlya,
  Rabota: skills.Rabota,
  Medicina: skills.Medicina,
  Morehodstvo: skills.Morehodstvo,
  Zhulnichestvo: skills.Zhulnichestvo,
  Vyzhivanie: skills.Vyzhivanie,
};

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
    })),
  });

  const rings = Object.values(_rings).map((i) => ({
    label: i.title,
    value: i.key,
  }));

  const families = useMemo(() => {
    return createListCollection({
      items: Object.values(_families)
        .filter((i) => i.clan === answers[1])
        .map((i) => ({
          label: i.title,
          value: i.key,
        })),
    });
  }, [answers]);

  const schools = useMemo(() => {
    return createListCollection({
      items: Object.values(_schools)
        .filter((i) => i.clan === answers[1])
        .map((i) => ({
          label: i.title,
          value: i.key,
        })),
    });
  }, [answers]);

  const skills7 = useMemo(() => {
    return createListCollection({
      items: Object.entries(accumulatedSkills)
        .filter((i) => !i[1])
        .map(([key]) => ({
          label: skills[key].title,
          value: skills[key].key,
        })),
    });
  }, [accumulatedSkills]);

  const skills8 = useMemo(() => {
    return createListCollection({
      items: Object.entries(accumulatedSkills)
        .filter((i) => i[1] < 3 && skill8list[i[0]])
        .map(([key]) => ({
          label: skills[key].title,
          value: skills[key].key,
        })),
    });
  }, [accumulatedSkills]);

  const questionState = useMemo(() => {
    const toCheck = answers[questionIndex];
    const isValid = typeof toCheck === "object" ? !!toCheck.key : !!toCheck;

    if (isValid) return "border.disabled";
    return "border.error";
  }, [answers, questionIndex]);

  if (["discussWithMaster", "notReady"].includes(questionData.trigger)) return;

  return (
    <Card.Root mb={2} p={3} borderColor={questionState}>
      <Text textStyle={"md"} fontWeight="semibold" mb={2}>
        {questionIndex}. {questionData.question}
      </Text>

      {questionIndex === "1" && (
        <Stack>
          <SelectRoot
            collection={clans}
            size="sm"
            mt={1}
            value={[answers[questionIndex]]}
            onValueChange={(e) => answerQuestion(e.value[0])}
          >
            <SelectTrigger>
              <SelectValueText placeholder="Клан" />
            </SelectTrigger>
            <SelectContent>
              {clans.items.map((movie) => (
                <SelectItem item={movie} key={movie.value}>
                  {movie.label}
                </SelectItem>
              ))}
            </SelectContent>
          </SelectRoot>

          {expandedQuestions && (
            <>
              <MyPreviewList
                previewDataArray={selectedClan?.ringIncrease}
                previewText={"Повышение ранга Кольца: "}
                prefix="+1 "
              />
              <MyPreviewList
                previewDataArray={selectedClan?.skillIncrease}
                previewText={"Повышение ранга Навыка: "}
                prefix="+1 "
              />
              <MyPreviewText
                previewData={selectedClan?.startStatus}
                previewText={"Статус: "}
              />
            </>
          )}
        </Stack>
      )}

      {questionIndex === "2" && (
        <Stack>
          <SelectRoot
            disabled={families.items.length === 0}
            collection={families}
            size="sm"
            mt={1}
            value={[answers[questionIndex]]}
            onValueChange={(e) => answerQuestion(e.value[0])}
          >
            <SelectTrigger>
              <SelectValueText placeholder="Семья" />
            </SelectTrigger>
            <SelectContent>
              {families.items.map((movie) => (
                <SelectItem item={movie} key={movie.value}>
                  {movie.label}
                </SelectItem>
              ))}
            </SelectContent>
          </SelectRoot>

          {expandedQuestions && (
            <>
              <MyPreviewList
                previewDataArray={selectedFamily?.ringIncrease}
                previewText={"Повышение ранга Кольца: "}
                prefix="+1 "
              />
              <MyPreviewList
                previewDataArray={selectedFamily?.skillIncrease}
                previewText={"Повышение ранга Навыка: "}
                prefix="+1 "
              />
              <HStack justifyContent={"space-between"}>
                <MyPreviewText
                  previewData={selectedFamily?.startGlory}
                  previewText={"Слава: "}
                />
                <MyPreviewText
                  previewData={selectedFamily?.startMoney}
                  previewText={"Стартовые деньги: "}
                />
              </HStack>
            </>
          )}
        </Stack>
      )}

      {questionIndex === "3" && (
        <Stack>
          <SelectRoot
            disabled={schools.items.length === 0}
            collection={schools}
            size="sm"
            mt={1}
            value={[answers[questionIndex].key]}
            onValueChange={(e) =>
              answerQuestion({ ...answers[questionIndex], key: e.value[0] })
            }
          >
            <SelectTrigger>
              <SelectValueText placeholder="Школа" />
            </SelectTrigger>
            <SelectContent>
              {schools.items.map((movie) => (
                <SelectItem item={movie} key={movie.value}>
                  {movie.label}
                </SelectItem>
              ))}
            </SelectContent>
          </SelectRoot>

          {expandedQuestions && (
            <>
              {selectedSchool?.key !== "PhoenixClanIsava" && (
                <MyPreviewList
                  previewDataArray={selectedSchool?.ringIncrease}
                  previewText={"Повышение ранга Кольца: "}
                  prefix="+1 "
                />
              )}
              <MyPreviewText
                previewData={selectedSchool?.startHonor}
                previewText={"Честь: "}
              />
              <MyPreviewSchoolTech
                previewData={selectedSchool?.schoolAbility}
              />
              <MyPreviewList
                previewDataArray={selectedSchool?.availableTechniques}
                previewText={"Доступные техники: "}
              />
            </>
          )}

          <MyQuestionMultiselect
            title="Выберете навыки"
            dataToShow={selectedSchool?.skillAvailable}
            selectList={answers[questionIndex].skills}
            onUpdate={(e) =>
              answerQuestion({ ...answers[questionIndex], skills: e })
            }
          />
          {selectedSchool?.startingTechniques.map((item, index) => (
            <MyQuestionMultiselect
              key={index}
              title="Выберете технику"
              dataToShow={item}
              selectList={answers[questionIndex][`techniques_${index + 1}`]}
              onUpdate={(e) =>
                answerQuestion({
                  ...answers[questionIndex],
                  [`techniques_${index + 1}`]: e,
                })
              }
            />
          ))}
        </Stack>
      )}

      {questionIndex === "4" && (
        <CheckboxGroup>
          <HStack gap="1" wrap={"wrap"} alignItems="stretch">
            {rings.map((ring, ringIndex) => (
              <CheckboxCard
                key={ringIndex}
                label={ring.label}
                colorPalette="teal"
                variant="subtle"
                indicator={
                  <MyHoverCard cardData={ring}>
                    <LuInfo />
                  </MyHoverCard>
                }
                checked={answers[questionIndex] === ring.value}
                disabled={
                  answers[questionIndex] !== ring.value &&
                  accumulatedRings[ring.value] >= 3
                }
                cursor={
                  answers[questionIndex] !== ring.value &&
                  accumulatedRings[ring.value] >= 3
                    ? "no-drop"
                    : "pointer"
                }
                onClick={() => {
                  if (accumulatedRings[ring.value] <= 3)
                    answerQuestion(ring.value);
                }}
              />
            ))}
          </HStack>
        </CheckboxGroup>
      )}

      {questionIndex === "7" && (
        <Tabs.Root
          defaultValue="members"
          variant="plain"
          value={answers[questionIndex].key}
          onValueChange={(e) => answerQuestion({ key: e.value })}
        >
          <Tabs.List bg="bg.muted" rounded="l3" p="1" w={"100%"}>
            <Tabs.Trigger value="selectGlory" w={"50%"}>
              Лоялен (получите +5 славы)
            </Tabs.Trigger>
            <Tabs.Trigger value="selectSkill" w={"50%"}>
              Конфликт (+1 ранг в навыке, в котором у вас 0 рангов)
            </Tabs.Trigger>
            <Tabs.Indicator rounded="l2" />
          </Tabs.List>
          <Tabs.Content value="selectSkill">
            <SelectRoot
              disabled={skills7.items.length === 0}
              invalid={!answers[questionIndex].value}
              collection={skills7}
              size="sm"
              mt={1}
              value={[answers[questionIndex].value]}
              onValueChange={(e) =>
                answerQuestion({ ...answers[questionIndex], value: e.value[0] })
              }
            >
              <SelectTrigger>
                <SelectValueText placeholder="Навык" />
              </SelectTrigger>
              <SelectContent>
                {skills7.items.map((movie) => (
                  <SelectItem item={movie} key={movie.value}>
                    {movie.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </SelectRoot>
          </Tabs.Content>
        </Tabs.Root>
      )}

      {questionIndex === "8" && (
        <Tabs.Root
          defaultValue="members"
          variant="plain"
          value={answers[questionIndex].key}
          onValueChange={(e) => answerQuestion({ key: e.value })}
        >
          <Tabs.List bg="bg.muted" rounded="l3" p="1" w={"100%"}>
            <Tabs.Trigger value="selectHonor" w={"50%"}>
              Ортодоксален (получите +10 чести)
            </Tabs.Trigger>
            <Tabs.Trigger value="selectSkill" w={"50%"}>
              Неверен (+1 ранг в одном из:)
            </Tabs.Trigger>
            <Tabs.Indicator rounded="l2" />
          </Tabs.List>
          <Tabs.Content value="selectSkill">
            <SelectRoot
              disabled={skills8.items.length === 0}
              invalid={!answers[questionIndex].value}
              collection={skills8}
              size="sm"
              mt={1}
              value={[answers[questionIndex].value]}
              onValueChange={(e) =>
                answerQuestion({ ...answers[questionIndex], value: e.value[0] })
              }
            >
              <SelectTrigger>
                <SelectValueText placeholder="Навык" />
              </SelectTrigger>
              <SelectContent>
                {skills8.items.map((movie) => (
                  <SelectItem item={movie} key={movie.value}>
                    {movie.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </SelectRoot>
          </Tabs.Content>
        </Tabs.Root>
      )}

      {questionIndex === "17" && (
        <SelectRoot
          disabled={skills7.items.length === 0}
          collection={skills7}
          size="sm"
          mt={1}
          value={[answers[questionIndex]]}
          onValueChange={(e) => answerQuestion(e.value[0])}
        >
          <SelectTrigger>
            <SelectValueText placeholder="Навык" />
          </SelectTrigger>
          <SelectContent>
            {skills7.items.map((movie) => (
              <SelectItem item={movie} key={movie.value}>
                {movie.label}
              </SelectItem>
            ))}
          </SelectContent>
        </SelectRoot>
      )}
    </Card.Root>
  );
}
