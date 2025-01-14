import React from "react";
import { useRouter } from "next/router";

import { Badge, Box, Button, HStack, Stack, Text } from "@chakra-ui/react";

import { _clans } from "@/mockData/clansFamiliesSchools/clans/_clans";
import { text } from "@/mockData/routeData/constants";

import { LuX } from "react-icons/lu";
import { MyPreviewList } from "@/components/MyPreviewList";
import { MyPreviewText } from "@/components/MyPreviewText";
import { MyHoverCard } from "@/components/MyHoverCard";
import { MyPreviewSchoolTech } from "@/components/MyPreviewSchoolTech";
import { MyHtml } from "@/components/MyHtml";

export function MyCardPreviewContent({ cardData, isCard = false }) {
  const router = useRouter();

  const selectN = {
    1: " (выберите одно)",
    2: " (выберите два)",
    3: " (выберите три)",
    4: " (выберите четыре)",
    5: " (выберите пять)",
  };

  return (
    <Stack h={"100%"}>
      <Stack>
        <HStack gap="0" justifyContent={"space-between"}>
          <Box>
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
          </Box>
          {isCard && (
            <Button
              variant="ghost"
              onClick={() => router.push(`/${router.query.group}`)}
            >
              <LuX />
            </Button>
          )}
        </HStack>
        <HStack>
          {!!text[cardData.subgroup] && (
            <Badge variant="surface" size="md">
              {text[cardData.subgroup]}
            </Badge>
          )}
        </HStack>
      </Stack>

      <Stack style={{ flex: "1 1 auto" }} overflow={"auto"}>
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

        <MyHtml content={cardData.description} />
      </Stack>
    </Stack>
  );
}
