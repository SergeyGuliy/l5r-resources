import { useRouter } from "next/router";
import { useMemo, useState } from "react";

import MyPage from "@/components/MyPage";
import MyCardPreview from "@/components/card/MyCardPreview";
import { routeData } from "@/mockData";

export default function Home() {
  const router = useRouter();
  const [cardData, setCardData] = useState({});

  const groupData = useMemo(
    () => routeData[router.query.group],
    [router.query.group]
  );

  const itemData = useMemo(
    () => groupData?.list?.find((i) => i.link === router.query.item),
    [groupData?.list, router.query.item]
  );

  console.log(router.query.item);

  if (!groupData) return;
  if (!itemData) return;

  return (
    <MyPage
      title={groupData.title}
      links={groupData.links}
      list={groupData.list}
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
