import { MyTableArmorsPage } from "@/components/layout/MyTableArmorsPage";

import { armorCharacteristics } from "@/mockData/otherData/weaponsAndArmorCharacteristics";
import { armors } from "@/mockData/tableData/armors";

const title = "Броня";
const headers = Object.values(armorCharacteristics);

export default function Weapons() {
  return <MyTableArmorsPage title={title} headers={headers} items={armors} />;
}
