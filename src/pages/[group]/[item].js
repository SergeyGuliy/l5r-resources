import { useRouter } from "next/router";
import { useMemo, useState } from "react";

import MyGroupPage from "@/components/layout/MyGroupPage";
import MyCardPreview from "@/components/layout/MyCardPreview";
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

  // useEffect(() => {
  //   router.beforePopState(({ url }) => {
  //     console.log(url);
  //     if (url === "/") {
  //       router.replace("/target"); // Redirect to custom path
  //       return false; // Prevent the default back navigation
  //     }
  //     return true; // Allow other navigations
  //   });
  //
  //   return () => {
  //     router.beforePopState(() => true); // Reset to default behavior on unmount
  //   };
  // }, [router]);

  const [cardData, setCardData] = useState({});

  const groupData = useMemo(
    () => routeData[router.query.group],
    [router.query.group]
  );

  const itemData = useMemo(
    () => groupData?.list?.[router.query.item],
    [groupData?.list, router.query.item]
  );

  if (!groupData) return;
  if (!itemData) return;

  console.log(groupData.filterSettings);

  return (
    <MyGroupPage
      title={groupData.title}
      links={groupData.links}
      list={Object.values(groupData.list)}
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
