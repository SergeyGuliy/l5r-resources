import { Text } from "@chakra-ui/react";
import MyHoverCard from "@/components/MyHoverCard";

export function MyPreviewSchoolTech({ previewData }) {
  if (!previewData) return;

  return (
    <Text>
      <span style={{ fontWeight: 700 }}>Способность школы: </span>
      <MyHoverCard style={{ fontWeight: 400 }} cardData={previewData}>
        {previewData.title}
      </MyHoverCard>
    </Text>
  );
}
