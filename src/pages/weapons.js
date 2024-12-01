import { MyTableWeaponsPage } from "@/components/layout/MyTableWeaponsPage";
import { MyPageWrapper } from "@/components/MyPageWrapper";

import { weaponsCharacteristics } from "@/mockData/tableData/weaponsAndArmorCharacteristics";
import { weapons } from "@/mockData/tableData/weapons";
import { titleWeapons } from "@/mockData/tableData/constants";

export default function Weapons() {
  return (
    <MyPageWrapper metadata={{ title: titleWeapons }}>
      <MyTableWeaponsPage
        title={titleWeapons}
        headers={Object.values(weaponsCharacteristics)}
        items={weapons}
      />
    </MyPageWrapper>
  );
}
