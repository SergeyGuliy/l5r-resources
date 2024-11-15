import { MyTableWeaponsPage } from "@/components/layout/MyTableWeaponsPage";

import { weaponsAndArmorCharacteristics } from "@/mockData/hoverData/weaponsAndArmorCharacteristics";
import { weapons } from "@/mockData/weapons";

const title = "Оружие";
const headers = Object.values(weaponsAndArmorCharacteristics);

export default function Weapons() {
  return <MyTableWeaponsPage title={title} headers={headers} items={weapons} />;
}
