import { MyTableWeaponsPage } from "@/components/layout/MyTableWeaponsPage";

import { weaponsCharacteristics } from "@/mockData/otherData/weaponsAndArmorCharacteristics";
import { weapons } from "@/mockData/tableData/weapons";

const title = "Оружие";
const headers = Object.values(weaponsCharacteristics);

export default function Weapons() {
  return <MyTableWeaponsPage title={title} headers={headers} items={weapons} />;
}
