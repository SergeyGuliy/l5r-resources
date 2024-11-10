'use client'

import MyPage from '@/components/MyPage';
import {techGroups, techTranslations} from '@/data/groups';
import {ninjutsu} from '@/data/_ninjutsu/_ninjutsu';

const filterGroups = [{
  techGroup: techGroups.ninjutsu,
}]

export default function Home() {
  return (
      <MyPage
          tech={ninjutsu}
          title={techTranslations.ninjutsu}
          filterGroups={filterGroups}
          useTechLvls={true}
      />
  );
}
