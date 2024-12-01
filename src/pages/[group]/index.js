import { useRouter } from "next/router";
import { useMemo } from "react";

import { MyGroupPage } from "@/components/layout/MyGroupPage";
import { MyPageWrapper } from "@/components/MyPageWrapper";

import { routeData } from "@/mockData/routeData";

export async function getStaticPaths() {
  const paths = Object.keys(routeData).map((i) => ({ params: { group: i } }));
  return { paths: paths, fallback: false };
}

export async function getStaticProps({ params }) {
  return { props: { group: params.group } };
}

export default function GroupIndex() {
  const router = useRouter();

  const groupData = useMemo(
    () => routeData[router.query.group],
    [router.query.group]
  );

  if (!groupData) return;

  return (
    <MyPageWrapper metadata={groupData}>
      <MyGroupPage
        title={groupData.title}
        links={groupData.links}
        list={Object.values(groupData.list)}
        filterSettings={groupData.filterSettings}
        useTechLvls={groupData.useTechLvls}
        useSearch={groupData.useSearch}
      />
    </MyPageWrapper>
  );
}
