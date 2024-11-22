import { MyPreviewList } from "@/components/MyPreviewList";
import { MyPreviewText } from "@/components/MyPreviewText";
import { Box, HStack } from "@chakra-ui/react";
import { MyPreviewSchoolTech } from "@/components/MyPreviewSchoolTech";

export function MyQuestionPreview({ show, data }) {
  if (!show) return;
  return (
    <Box pb={2}>
      {data?.key !== "PhoenixClanIsava" && data?.ringIncrease && (
        <MyPreviewList
          previewDataArray={data?.ringIncrease}
          previewText={"Повышение ранга Кольца: "}
          prefix="+1 "
        />
      )}

      {data?.skillIncrease && (
        <MyPreviewList
          previewDataArray={data?.skillIncrease}
          previewText={"Повышение ранга Навыка: "}
          prefix="+1 "
        />
      )}

      {data?.startStatus && (
        <MyPreviewText
          previewData={data?.startStatus}
          previewText={"Статус: "}
        />
      )}

      {data?.startGlory && data?.startMoney && (
        <HStack justifyContent={"space-between"}>
          <MyPreviewText
            previewData={data?.startGlory}
            previewText={"Слава: "}
          />
          <MyPreviewText
            previewData={data?.startMoney}
            previewText={"Стартовые деньги: "}
          />
        </HStack>
      )}

      {data?.startHonor && (
        <MyPreviewText previewData={data?.startHonor} previewText={"Честь: "} />
      )}

      {data?.schoolAbility && (
        <MyPreviewSchoolTech previewData={data?.schoolAbility} />
      )}

      {data?.availableTechniques && (
        <MyPreviewList
          previewDataArray={data?.availableTechniques}
          previewText={"Доступные техники: "}
        />
      )}
    </Box>
  );
}
