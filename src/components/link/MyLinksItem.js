import Link from "next/link";
import { Card, GridItem, Text } from "@chakra-ui/react";

export function MyLinksItem({ linkData }) {
  return (
    <GridItem
      colSpan={{ base: "12", sm: "8", md: "6", lg: "6", xl: "4", "2xl": "3" }}
    >
      <Link
        href={linkData.link}
        style={{ pointerEvents: linkData.disabled ? "none" : "auto" }}
      >
        <Card.Root
          colorPalette={"red"}
          p={2}
          opacity={linkData.disabled ? 0.5 : 1}
          variant={linkData.isActive ? "subtle" : "elevated"}
          background={linkData.isActive ? "#122952" : ""}
        >
          <Text
            fontWeight={linkData.isActive ? "semibold" : "normal"}
            textStyle="md"
            truncate
          >
            {linkData.title}
          </Text>
        </Card.Root>
      </Link>
    </GridItem>
  );
}
