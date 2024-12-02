import { Box, Card, useBreakpointValue } from "@chakra-ui/react";
import React, { useMemo } from "react";

import { MyCardPreviewContent } from "@/components/layout/MyCardPreviewContent";

export function MyCardPreview({ cardData }) {
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
        <Box ml={5} mt={3} mr={5}>
          <MyCardPreviewContent cardData={cardData} isCard={true} />
        </Box>
      </Card.Body>
    </Card.Root>
  );
}
