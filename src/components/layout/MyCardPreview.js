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
import { useMemo } from "react";
import { useRouter } from "next/router";

import { translations } from "@/mockData/routeData/constants";
import MyHoverCard from "@/components/MyHoverCard";

export default function MyCardPreview({ cardData }) {
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
    () => ["base", "sm"].includes(currentBreakpoint),
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
        base: "calc(100dvh - 65px)",
        sm: "calc(100dvh - 65px)",
        md: "100%",
        lg: "100%",
        xl: "100%",
        "2xl": "100%",
      }}
      width={{
        base: "100%",
        sm: "100%",
        md: "calc(50% - 8px)",
        lg: "calc(50% - 8px)",
        xl: "calc(50% - 8px)",
        "2xl": "calc(50% - 8px)",
      }}
    >
      <Card.Body p={0}>
        <Stack h={"100%"}>
          <Stack ml={5} mt={3} mr={5}>
            <HStack gap="0" justifyContent={"space-between"}>
              <Card.Title>
                {cardData.title}

                {!!cardData.rank && cardData.rank > 0 && (
                  <Text color="fg.muted" textStyle="sm">
                    Ранг: {cardData.rank}
                  </Text>
                )}
                {cardData?.clan && (
                  <Text color="fg.muted" textStyle="sm">
                    Клан: {cardData.clan}
                  </Text>
                )}
                {cardData?.school && (
                  <Text color="fg.muted" textStyle="sm">
                    Школа: {cardData.school}
                  </Text>
                )}
              </Card.Title>
              <Button
                size={"small"}
                variant="ghost"
                onClick={() => router.push(`/${router.query.group}`)}
              >
                <LuX />
              </Button>
            </HStack>
            <HStack>
              {!!translations[cardData.subgroup] && (
                <Badge variant="surface" size="md">
                  {translations[cardData.subgroup]}
                </Badge>
              )}
            </HStack>
          </Stack>

          <Stack
            style={{ flex: "1 1 auto" }}
            overflow={"auto"}
            pl={5}
            pr={5}
            pt={3}
            pb={3}
          >
            {cardData?.ringIncrease?.length && (
              <Text mb={3}>
                <span style={{ fontWeight: 700 }}>
                  Повышение ранга Кольца:{" "}
                </span>
                {cardData.ringIncrease.map((i, iIndex) => (
                  <span key={iIndex}>
                    {iIndex > 0 ? ", " : ""}
                    <MyHoverCard style={{ fontWeight: 400 }} cardData={i}>
                      +1 {i.title}
                    </MyHoverCard>
                  </span>
                ))}
              </Text>
            )}
            {cardData?.skillAvailable && (
              <Text mb={3}>
                <span style={{ fontWeight: 700 }}>
                  Стартовые навыки{selectN[cardData?.skillAvailable.toSelect]}
                  :&nbsp;
                </span>
                {cardData.skillAvailable.items.map((i, iIndex) => (
                  <span key={iIndex}>
                    {iIndex > 0 ? ", " : ""}
                    <MyHoverCard style={{ fontWeight: 400 }} cardData={i}>
                      +1 {i.title}
                    </MyHoverCard>
                  </span>
                ))}
              </Text>
            )}
            {cardData?.startHonor && (
              <Text mb={3}>
                <span style={{ fontWeight: 700 }}>Честь: </span>
                {cardData.startHonor}
              </Text>
            )}
            {cardData?.availableTechniques?.length && (
              <Text mb={3}>
                <span style={{ fontWeight: 700 }}>Доступные техники: </span>
                {cardData.availableTechniques.map((i, iIndex) => (
                  <span key={iIndex}>
                    {iIndex > 0 ? ", " : ""}
                    <MyHoverCard style={{ fontWeight: 400 }} cardData={i}>
                      {i.title}
                    </MyHoverCard>
                  </span>
                ))}
              </Text>
            )}
            {cardData?.startingTechniques?.length && (
              <Text mb={3}>
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
            {!!cardData?.schoolAbility && (
              <MyHoverCard
                style={{ fontWeight: 400 }}
                cardData={cardData.schoolAbility}
              >
                <span style={{ fontWeight: 700 }}>Способность школы: </span>
                {cardData.schoolAbility.title}
              </MyHoverCard>
            )}
            {cardData?.skillIncrease?.length && (
              <Text mb={3}>
                <span style={{ fontWeight: 700 }}>
                  Повышение ранга Навыка:{" "}
                </span>
                {cardData.skillIncrease.map((i, iIndex) => (
                  <span key={iIndex}>
                    {iIndex > 0 ? ", " : ""}
                    <MyHoverCard style={{ fontWeight: 400 }} cardData={i}>
                      +1 {i.title}
                    </MyHoverCard>
                  </span>
                ))}
              </Text>
            )}
            {cardData?.startStatus && (
              <Text mb={3}>
                <span style={{ fontWeight: 700 }}>Статус: </span>
                {cardData.startStatus}
              </Text>
            )}
            {cardData?.startGlory && (
              <Text mb={3}>
                <span style={{ fontWeight: 700 }}>Слава: </span>
                {cardData.startGlory}
              </Text>
            )}
            {cardData?.startMoney && (
              <Text mb={3}>
                <span style={{ fontWeight: 700 }}>Стартовые деньги:: </span>
                {cardData.startMoney}
              </Text>
            )}
            <Box
              className={"card-preview"}
              dangerouslySetInnerHTML={{ __html: cardData.description }}
            />
          </Stack>
        </Stack>
      </Card.Body>
    </Card.Root>
  );
}
