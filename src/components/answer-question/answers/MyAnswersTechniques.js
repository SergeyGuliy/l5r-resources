import { MyPreviewSchoolTech } from "@/components/MyPreviewSchoolTech";
import { MyPreviewList } from "@/components/MyPreviewList";

export function MyAnswersTechniques({ selectedSchool, accumulatedTechniques }) {
  console.log(accumulatedTechniques);

  return (
    <>
      <MyPreviewSchoolTech previewData={selectedSchool?.schoolAbility} />

      {accumulatedTechniques.map(([previewText, previewDataArray]) => (
        <MyPreviewList
          key={previewText}
          previewDataArray={previewDataArray}
          previewText={previewText}
        />
      ))}
    </>
  );
}
