import React, { useMemo } from "react";
import Link from "next/link";
import { useBreakpointValue } from "@chakra-ui/react";

import { LuInfo } from "react-icons/lu";
import { MyCardPreviewContent } from "@/components/layout/MyCardPreviewContent";
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  HoverCardContent,
  HoverCardRoot,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export function MyHoverCard({
  children,
  cardData,
  hoverTarget,
  showText = true,
}) {
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
    <Link href="#" onClick={(e) => e.preventDefault()}>
      {showText && (
        <>
          <span style={{ textDecoration: "underline", cursor: "default" }}>
            {children ? children : cardData?.title}
          </span>
          <span> </span>
        </>
      )}
      {!isSmall && (
        <HoverCardRoot openDelay={500} closeDelay={100} size="sm">
          <HoverCardTrigger asChild>
            {hoverTarget || (
              <LuInfo
                size={"19px"}
                color={"orange"}
                style={{ display: "inline", cursor: "cell" }}
              />
            )}
          </HoverCardTrigger>

          <HoverCardContent
            maxHeight={"40dvh"}
            maxWidth={"50vw"}
            overflow={"auto"}
          >
            <MyCardPreviewContent cardData={cardData} />
          </HoverCardContent>
        </HoverCardRoot>
      )}
      {isSmall && (
        <DialogRoot
          size="full"
          placement="center"
          motionPreset="slide-in-bottom"
          scrollBehavior="inside"
        >
          <DialogTrigger asChild>
            <LuInfo
              size={"19px"}
              color={"orange"}
              style={{ display: "inline", cursor: "cell" }}
            />
          </DialogTrigger>
          <DialogContent p={4} pb={16} overflow={"auto"}>
            <DialogCloseTrigger />
            <MyCardPreviewContent cardData={cardData} />
          </DialogContent>
        </DialogRoot>
      )}
    </Link>
  );
}
