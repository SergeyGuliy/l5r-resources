import { MyTableArmorsPage } from "@/components/layout/MyTableArmorsPage";
import { MyPageWrapper } from "@/components/MyPageWrapper";

import { armorCharacteristics } from "@/mockData/tableData/weaponsAndArmorCharacteristics";
import { armors } from "@/mockData/tableData/armors";
import { titleArmor } from "@/mockData/tableData/constants";

export default function Weapons() {
  return (
    <MyPageWrapper metadata={{ title: titleArmor }}>
      <MyTableArmorsPage
        title={titleArmor}
        headers={Object.values(armorCharacteristics)}
        items={armors}
      />
    </MyPageWrapper>
  );
}
