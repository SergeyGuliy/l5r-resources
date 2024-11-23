import { useRouter } from "next/router";
import { useMemo, useState } from "react";

import { MyGroupPage } from "@/components/layout/MyGroupPage";
import { MyCardPreview } from "@/components/layout/MyCardPreview";

import { routeData } from "@/mockData/routeData";

export async function getStaticPaths() {
  const obj = Object.fromEntries(
    Object.entries(routeData).map(([key, value]) => [
      key,
      Object.values(value.list).map((i) => i.key),
    ])
  );

  const paths = Object.keys(obj).flatMap((group) =>
    obj[group].map((item) => ({
      params: { group, item },
    }))
  );

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  return { props: { group: params.group } };
}

export default function GroupItem() {
  const router = useRouter();

  const [cardData, setCardData] = useState({});

  const groupData = useMemo(
    () => routeData[router.query.group],
    [router.query.group]
  );

  const itemData = useMemo(
    () => groupData?.list?.[router.query.item],
    [groupData?.list, router.query.item]
  );

  const groupListWrapped = useMemo(() => {
    return Object.values(groupData.list).map((i) => ({
      ...i,
      isActive: router.query.item === i.key,
    }));
  }, [groupData.list, router.query.item]);

  if (!groupData) return;
  if (!itemData) return;

  return (
    <MyGroupPage
      title={groupData.title}
      links={groupData.links}
      list={groupListWrapped}
      filterSettings={groupData.filterSettings}
      useTechLvls={groupData.useTechLvls}
      useSearch={groupData.useSearch}
    >
      {cardData && (
        <MyCardPreview cardData={itemData} setCardData={setCardData} />
      )}
    </MyGroupPage>
  );
}
