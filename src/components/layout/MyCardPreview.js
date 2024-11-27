import {
  Badge,
  Box,
  Button,
  Card,
  HStack,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { LuX } from "react-icons/lu";
import React, { useMemo } from "react";
import { useRouter } from "next/router";

import { text } from "@/mockData/routeData/constants";
import { MyHoverCard } from "@/components/MyHoverCard";
import { MyPreviewList } from "@/components/MyPreviewList";
import { MyPreviewText } from "@/components/MyPreviewText";
import { MyPreviewSchoolTech } from "@/components/MyPreviewSchoolTech";
import { _clans } from "@/mockData/clansFamiliesSchools/clans/_clans";

export function MyCardPreview({ cardData }) {
  const router = useRouter();

  const currentBreakpoint = useBreakpointValue({
    base: "base",
    sm: "sm",
    md: "md",
    lg: "lg",
    xl: "xl",
    "2xl": "2xl",
  });

  const isSmall = useMemo(
    () => ["base", "sm", "md"].includes(currentBreakpoint),
    [currentBreakpoint]
  );

  const selectN = {
    1: " (выберите одно)",
    2: " (выберите два)",
    3: " (выберите три)",
    4: " (выберите четыре)",
    5: " (выберите пять)",
  };

  return (
    <Card.Root
      flexDirection="row"
      position={isSmall ? "fixed" : "sticky"}
      top={"0"}
      left={0}
      height={{
        base: "calc(100dvh - 60px)",
        sm: "calc(100dvh - 60px)",
        md: "calc(100dvh - 60px)",
        lg: "100%",
        xl: "100%",
        "2xl": "100%",
      }}
      width={{
        base: "100%",
        sm: "100%",
        md: "100%",
        lg: "calc(50% - 8px)",
        xl: "calc(50% - 8px)",
        "2xl": "calc(68% - 8px)",
      }}
    >
      <Card.Body p={0}>
        <Stack h={"100%"}>
          <Stack ml={5} mt={3} mr={5}>
            <HStack gap="0" justifyContent={"space-between"}>
              <Card.Title>
                <Text fontWeight="semibold" textStyle="2xl">
                  {cardData.title}
                </Text>

                {!!cardData.rank && cardData.rank > 0 && (
                  <Text color="fg.muted" textStyle="md">
                    Ранг: {cardData.rank}
                  </Text>
                )}
                {cardData?.clan && (
                  <Text color="fg.muted" textStyle="md">
                    {_clans[cardData.clan]?.title}
                  </Text>
                )}
                {cardData?.school && (
                  <Text color="fg.muted" textStyle="md">
                    Школа: {cardData.school}
                  </Text>
                )}
              </Card.Title>
              <Button
                variant="ghost"
                onClick={() => router.push(`/${router.query.group}`)}
              >
                <LuX />
              </Button>
            </HStack>
            <HStack>
              {!!text[cardData.subgroup] && (
                <Badge variant="surface" size="md">
                  {text[cardData.subgroup]}
                </Badge>
              )}
            </HStack>
          </Stack>

          <Stack
            style={{ flex: "1 1 auto" }}
            overflow={"auto"}
            pl={5}
            pr={5}
            pt={0}
            pb={3}
          >
            <MyPreviewList
              previewDataArray={cardData?.ringIncrease}
              previewText={"Повышение ранга Кольца: "}
              prefix="+1 "
            />
            <MyPreviewList
              previewDataArray={cardData?.skillAvailable?.items}
              previewText={`Стартовые навыки${selectN[cardData?.skillAvailable?.toSelect]} `}
            />
            <MyPreviewText
              previewData={cardData?.startHonor}
              previewText={"Честь: "}
            />
            <MyPreviewList
              previewDataArray={cardData?.availableTechniques}
              previewText={"Доступные техники: "}
            />

            {cardData?.startingTechniques?.length && (
              <Text>
                <span style={{ fontWeight: 700 }}>Стартовые техники: </span>
                {cardData.startingTechniques.map((i, iIndex) => (
                  <Box key={iIndex} pl={3}>
                    <span style={{ fontWeight: 700 }}>
                      {i.type.title}
                      {selectN[i?.toSelect]}:&nbsp;
                    </span>
                    {i.items.map((j, jIndex) => (
                      <span key={jIndex}>
                        {jIndex > 0 ? ", " : ""}
                        <MyHoverCard style={{ fontWeight: 400 }} cardData={j}>
                          {i.title}
                        </MyHoverCard>
                      </span>
                    ))}
                  </Box>
                ))}
              </Text>
            )}

            <MyPreviewSchoolTech previewData={cardData?.schoolAbility} />

            <MyPreviewList
              previewDataArray={cardData?.skillIncrease}
              previewText={"Повышение ранга Навыка: "}
              prefix="+1 "
            />

            <MyPreviewText
              previewData={cardData?.startStatus}
              previewText={"Статус: "}
            />

            <MyPreviewList
              previewDataArray={
                cardData?.importantBushido && [cardData?.importantBushido]
              }
              previewText={"Главный принцип Бусидо: "}
            />

            <MyPreviewList
              previewDataArray={
                cardData?.insignificantBushido &&
                (typeof cardData?.insignificantBushido === "object" &&
                cardData?.insignificantBushido.length
                  ? cardData?.insignificantBushido
                  : [cardData?.insignificantBushido])
              }
              previewText={"Малозначительный принцип Бусидо: "}
            />

            <MyPreviewText
              previewData={cardData?.startGlory}
              previewText={"Слава: "}
            />

            <MyPreviewText
              previewData={cardData?.startMoney}
              previewText={"Стартовые деньги: "}
            />
            <Box
              mt={2}
              className={"card-preview"}
              dangerouslySetInnerHTML={{ __html: cardData.description }}
            />
          </Stack>
        </Stack>
      </Card.Body>
    </Card.Root>
  );
}
