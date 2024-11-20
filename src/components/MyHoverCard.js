import { useState } from "react";
import Link from "next/link";

import { Box } from "@chakra-ui/react";

import {
  HoverCardArrow,
  HoverCardContent,
  HoverCardRoot,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function MyHoverCard({ children, cardData }) {
  const [open, setOpen] = useState(false);

  return (
    <HoverCardRoot
      openDelay={1000}
      closeDelay={100}
      size="sm"
      open={open}
      onOpenChange={(e) => {
        setOpen(false);
        // if (!cardData?.description && e.open) {
        //   setOpen(false);
        // } else {
        //   setOpen(e.open);
        // }
      }}
    >
      <HoverCardTrigger asChild>
        <Link
          href="#"
          style={{ cursor: "cell", textDecoration: "underline" }}
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
