import { useMemo } from "react";

import { Box, HStack, Text } from "@chakra-ui/react";
import { createListCollection } from "@chakra-ui/react";

import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "@/components/ui/select";

import { _clans } from "@/mockData/clansFamiliesSchools/clans/_clans";
import { _families } from "@/mockData/clansFamiliesSchools/families";
import { _schools } from "@/mockData/clansFamiliesSchools/schools";
import { CheckboxCard } from "@/components/ui/checkbox-card";
import { _rings } from "@/mockData/routeData/other/rings/_rings";

export function MyQuestion({
  questionIndex,
  questionData,
  questions,
  answerQuestion,
}) {
  // const honorOrSkillOptions = createListCollection(Object.values(_rings));

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
        .filter((i) => i.clan === questions[1].answer)
        .map((i) => ({
          label: i.title,
          value: i.key,
        })),
    });
  }, [questions]);

  const schools = useMemo(() => {
    return createListCollection({
      items: Object.values(_schools)
        .filter((i) => i.clan === questions[1].answer)
        .map((i) => ({
          label: i.title,
          value: i.key,
        })),
    });
  }, [questions]);

  const questionState = useMemo(() => {
    if (questionData.answer) return "correct";
    return "invalid";
  }, [questionData.answer]);

  function localAnswerQuestion(answer) {
    answerQuestion({
      ...questionData,
      answer,
    });
  }

  if (["discussWithMaster", "notReady"].includes(questionData.trigger)) return;

  return (
    <Box
      mb={2}
      borderWidth="1px"
      borderColor="border.disabled"
      color="fg.disabled"
      p={2}
    >
      <Text textStyle={"md"} fontWeight="semibold">
        {questionIndex}. {questionData.question} = {questionState}
      </Text>

      {questionIndex === "1" && (
        <SelectRoot
          collection={clans}
          size="sm"
          mt={1}
          value={[questionData.answer]}
          onValueChange={(e) => localAnswerQuestion(e.value[0])}
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
          value={[questionData.answer]}
          onValueChange={(e) => localAnswerQuestion(e.value[0])}
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
          value={[questionData.answer]}
          onValueChange={(e) => localAnswerQuestion(e.value[0])}
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
        <HStack mt={1}>
          {rings.map((ring, ringIndex) => (
            // <MyHoverCard>
            //
            // </MyHoverCard>
            <CheckboxCard
              checked={questionData.answer === ring.value}
              key={ringIndex}
              label={ring.label}
              colorPalette="teal"
              variant="subtle"
              onClick={() => localAnswerQuestion(ring.value)}
            />
          ))}
        </HStack>
      )}
    </Box>
  );
}
