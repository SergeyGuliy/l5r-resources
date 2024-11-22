import { MyPreviewSchoolTech } from "@/components/MyPreviewSchoolTech";
import { MyPreviewList } from "@/components/MyPreviewList";

export function MyAnswersTechniques({ selectedSchool }) {
  return (
    <>
      <MyPreviewSchoolTech previewData={selectedSchool?.schoolAbility} />

      {/*<MyPreviewList*/}
      {/*  previewDataArray={cardData?.availableTechniques}*/}
      {/*  previewText={"Доступные техники: "}*/}
      {/*/>*/}
    </>
  );
}
