import {
  Badge,
  Box,
  Button,
  Card,
  HStack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { translations } from "@/mockData/routeData/constants";
import "./MyCardPreview.css";
import { useMemo } from "react";
import { LuX } from "react-icons/lu";
import { useRouter } from "next/router";

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

  return (
    <Card.Root
      flexDirection="row"
      overflow="auto"
      position={isSmall ? "fixed" : "sticky"}
      top={"0"}
      left={0}
      height={{
        base: "calc(100vh - 65px)",
        sm: "calc(100vh - 65px)",
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
      <Card.Body>
        <HStack gap="0" justifyContent={"space-between"}>
          <Card.Title mb="2">
            {cardData.name}
            {cardData.rank && (
              <Text color="fg.muted" textStyle="sm">
                Ранг: {cardData.rank}
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
        <HStack mt="1" mb={3}>
          {!!translations[cardData.subgroup] && (
            <Badge variant="surface" size="md">
              {translations[cardData.subgroup]}
            </Badge>
          )}
        </HStack>
        <Box
          className={"card-preview"}
          dangerouslySetInnerHTML={{ __html: cardData.description }}
        />
      </Card.Body>
    </Card.Root>
  );
}
