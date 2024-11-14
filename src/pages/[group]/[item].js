import { useRouter } from "next/router";
import { useMemo, useState } from "react";

import MyGroupPage from "@/components/layout/MyGroupPage";
import MyCardPreview from "@/components/layout/MyCardPreview";
import { routeData } from "@/mockData/routeData";

export default function GroupItem() {
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
    <MyGroupPage
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
    </MyGroupPage>
  );
}
