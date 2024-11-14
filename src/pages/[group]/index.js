import { useRouter } from "next/router";
import { useMemo } from "react";

import MyPage from "@/components/MyPage";

import { routeData } from "@/mockData/routeData";

export default function Home() {
  const router = useRouter();

  const groupData = useMemo(
    () => routeData[router.query.group],
    [router.query.group]
  );

  if (!groupData) return;

  return (
    <MyPage
      title={groupData.title}
      links={groupData.links}
      list={groupData.list}
      filterGroups={groupData.filterSettings}
      useTechLvls={groupData.useTechLvls}
      useSearch={groupData.useSearch}
    />
  );
}
