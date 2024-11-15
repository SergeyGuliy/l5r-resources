import { MyTableArmorsPage } from "@/components/layout/MyTableArmorsPage";

import { armorCharacteristics } from "@/mockData/hoverData/weaponsAndArmorCharacteristics";
import { armors } from "@/mockData/armors";

const title = "Броня";
const headers = Object.values(armorCharacteristics);

export default function Weapons() {
  return <MyTableArmorsPage title={title} headers={headers} items={armors} />;
}
