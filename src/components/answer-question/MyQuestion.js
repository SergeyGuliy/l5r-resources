import { useMemo } from "react";

import { Card, CheckboxGroup, Flex, Text } from "@chakra-ui/react";
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

export function MyQuestion({
  questionIndex,
  questionData,
  answers,
  answerQuestion,
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

  return (
    <Card.Root mb={2} p={3} borderColor={questionState}>
      <Text textStyle={"md"} fontWeight="semibold" mb={2}>
        {questionIndex}. {questionData.question}
      </Text>

      {questionIndex === "1" && (
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
      )}

      {questionIndex === "2" && (
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
      )}

      {questionIndex === "3" && (
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
      )}

      {questionIndex === "4" && (
        <CheckboxGroup>
          <Flex gap="2">
            {rings.map((ring, ringIndex) => (
              // <MyHoverCard>
              //
              // </MyHoverCard>
              <CheckboxCard
                checked={answers[questionIndex] === ring.value}
                key={ringIndex}
                label={ring.label}
                colorPalette="teal"
                variant="subtle"
                onClick={() => answerQuestion(ring.value)}
                indicator={""}
              />
            ))}
          </Flex>
        </CheckboxGroup>
      )}
    </Card.Root>
  );
}
