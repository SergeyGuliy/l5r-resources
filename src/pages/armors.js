import { MyTableArmorsPage } from "@/components/layout/MyTableArmorsPage";

import { armorCharacteristics } from "@/mockData/tableData/weaponsAndArmorCharacteristics";
import { armors } from "@/mockData/tableData/armors";
import { titleArmor } from "@/mockData/tableData/constants";

export default function Weapons() {
  return (
    <MyTableArmorsPage
      title={titleArmor}
      headers={Object.values(armorCharacteristics)}
      items={armors}
    />
  );
}
