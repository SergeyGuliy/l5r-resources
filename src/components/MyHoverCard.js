import React from "react";
import Link from "next/link";

import { LuInfo } from "react-icons/lu";
import { MyHtml } from "@/components/MyHtml";

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
  return (
    <Link href="#" onClick={(e) => e.preventDefault()}>
      {showText && (
        <>
          <span style={{ textDecoration: "underline" }}>
            {children ? children : cardData?.title}
          </span>
          <span> </span>
        </>
      )}
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
          <MyHtml content={cardData.description} />
        </HoverCardContent>
      </HoverCardRoot>
    </Link>
  );
}
