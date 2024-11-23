import React from "react";
import Link from "next/link";

import { Box } from "@chakra-ui/react";

import {
  HoverCardArrow,
  HoverCardContent,
  HoverCardRoot,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { LuInfo } from "react-icons/lu";

export function MyHoverCard({ children, cardData }) {
  return (
    <Link href="#" onClick={(e) => e.preventDefault()}>
      <span style={{ textDecoration: "underline" }}>
        {children ? children : cardData?.title}
      </span>
      <span> </span>
      <HoverCardRoot openDelay={500} closeDelay={100} size="sm">
        <HoverCardTrigger asChild>
          <LuInfo
            size={"19px"}
            color={"orange"}
            style={{ display: "inline", cursor: "cell" }}
          />
        </HoverCardTrigger>

        <HoverCardContent
          maxHeight={"40dvh"}
          maxWidth={"50vw"}
          overflow={"auto"}
        >
          <HoverCardArrow />

          {cardData?.description && (
            <Box
              className={"card-preview"}
              dangerouslySetInnerHTML={{ __html: cardData.description }}
            />
          )}
        </HoverCardContent>
      </HoverCardRoot>
    </Link>
  );
}
