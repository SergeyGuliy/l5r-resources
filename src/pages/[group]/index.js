import { useRouter } from "next/router";
import { useMemo } from "react";

import MyGroupPage from "@/components/layout/MyGroupPage";

import { routeData } from "@/mockData/routeData";

export default function GroupIndex() {
  const router = useRouter();

  const groupData = useMemo(
    () => routeData[router.query.group],
    [router.query.group]
  );

  if (!groupData) return;

  return (
    <MyGroupPage
      title={groupData.title}
      links={groupData.links}
      list={Object.values(groupData.list)}
      filterGroups={groupData.filterSettings}
      useTechLvls={groupData.useTechLvls}
      useSearch={groupData.useSearch}
    />
  );
}
