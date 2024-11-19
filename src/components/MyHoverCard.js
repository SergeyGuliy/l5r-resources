import { Box } from "@chakra-ui/react";

import {
  HoverCardArrow,
  HoverCardContent,
  HoverCardRoot,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import Link from "next/link";

export default function MyHoverCard({ children, cardData }) {
  return (
    <HoverCardRoot size="sm">
      <HoverCardTrigger asChild>
        <Link
          href="#"
          style={{ cursor: "cell" }}
          onClick={(e) => e.preventDefault()}
        >
          {children ? children : cardData?.title}
        </Link>
      </HoverCardTrigger>

      <HoverCardContent maxHeight={"40dvh"} maxWidth={"50vw"} overflow={"auto"}>
        <HoverCardArrow />

        {cardData?.description && (
          <Box
            className={"card-preview"}
            dangerouslySetInnerHTML={{ __html: cardData.description }}
          />
        )}
      </HoverCardContent>
    </HoverCardRoot>
  );
}
