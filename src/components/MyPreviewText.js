import { Text } from "@chakra-ui/react";

export function MyPreviewText({ previewData, previewText }) {
  if (!previewData) return;

  return (
    <Text>
      <span style={{ fontWeight: 700 }}>{previewText}</span>
      {previewData}
    </Text>
  );
}
