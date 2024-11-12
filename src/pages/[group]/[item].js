import MyPage from "@/components/MyPage";
import { useRouter } from "next/router";
import { routeData } from "@/mockData";
import { useMemo, useState } from "react";
import MyCardPreview from "@/components/card/MyCardPreview";

export default function Home() {
  const router = useRouter();
  const [cardData, setCardData] = useState({});

  const groupData = useMemo(() => {
    return routeData[router.query.group];
  }, [router.query.group]);

  const itemData = useMemo(() => {
    return groupData?.list?.find((i) => i.link === router.query.item);
  }, [groupData?.list, router.query.item]);

  if (!groupData) return;
  if (!itemData) return;

  return (
    <MyPage
      links={groupData.links}
      tech={groupData.list}
      title={groupData.title}
      filterGroups={groupData.filterSettings}
      useTechLvls={groupData.useTechLvls}
      useSearch={groupData.useSearch}
    >
      {cardData && (
        <MyCardPreview cardData={itemData} setCardData={setCardData} />
      )}
    </MyPage>
  );
}
