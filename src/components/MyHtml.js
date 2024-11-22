import { Box } from "@chakra-ui/react";

export function MyHtml({ content }) {
  if (!content) return;

  return (
    <Box
      className={"card-preview"}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
