'use client'

import MyPage from '@/components/MyPage';

import {katas} from '@/data/_katas/_katas';
import {kataGroups, techGroups, techTranslations} from '@/data/groups';

const filterGroups = [{
  techGroup: techGroups.kata,
  subGroups: Object.keys(kataGroups)
}]

export default function Home() {
  return (
      <MyPage
          tech={katas}
          title={techTranslations.kata}
          filterGroups={filterGroups}
          useTechLvls={true}
      />
  );
}
