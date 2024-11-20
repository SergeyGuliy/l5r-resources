import { useMemo } from "react";

import {
  Card,
  CheckboxGroup,
  Flex,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
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
import { MyPreviewList } from "@/components/MyPreviewList";
import { MyPreviewText } from "@/components/MyPreviewText";
import { MyPreviewSchoolTech } from "@/components/MyPreviewSchoolTech";

export function MyQuestion({
  questionIndex,
  questionData,
  answers,
  answerQuestion,
  selectedClan,
  selectedFamily,
  selectedSchool,
  accumulatedRings,
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

  const questionState = useMemo(() => {
    if (answers[questionIndex]) return "border.disabled";
    return "border.warning";
  }, [answers, questionIndex]);

  if (["discussWithMaster", "notReady"].includes(questionData.trigger)) return;

  console.clear();
  console.log(selectedSchool);

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
        </Stack>
      )}

      {questionIndex === "3" && (
        <Stack>
          <SelectRoot
            disabled={schools.items.length === 0}
            collection={schools}
            size="sm"
            mt={1}
            value={[answers[questionIndex]]}
            onValueChange={(e) => answerQuestion(e.value[0])}
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
          <MyPreviewSchoolTech previewData={selectedSchool?.schoolAbility} />
          <MyPreviewList
            previewDataArray={selectedSchool?.availableTechniques}
            previewText={"Доступные техники: "}
          />
        </Stack>
      )}

      {questionIndex === "4" && (
        <CheckboxGroup>
          <Flex gap="1">
            {rings.map((ring, ringIndex) => (
              <CheckboxCard
                key={ringIndex}
                label={ring.label}
                colorPalette="teal"
                variant="subtle"
                indicator=""
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
          </Flex>
        </CheckboxGroup>
      )}
    </Card.Root>
  );
}
