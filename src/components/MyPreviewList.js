import { Text } from "@chakra-ui/react";
import MyHoverCard from "@/components/MyHoverCard";

export function MyPreviewList({ previewDataArray, previewText, prefix = "" }) {
  if (!previewDataArray?.length) return;

  return (
    <Text>
      <span style={{ fontWeight: 700 }}>{previewText}</span>
      {previewDataArray.map((i, iIndex) => (
        <span key={iIndex}>
          {iIndex > 0 ? ", " : ""}
          <MyHoverCard style={{ fontWeight: 400 }} cardData={i}>
            {prefix}
            {i.title}
          </MyHoverCard>
        </span>
      ))}
    </Text>
  );
}
