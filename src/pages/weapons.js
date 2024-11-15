import { MyTableWeaponsPage } from "@/components/layout/MyTableWeaponsPage";

import { weaponsCharacteristics } from "@/mockData/hoverData/weaponsAndArmorCharacteristics";
import { weapons } from "@/mockData/tables/weapons";

const title = "Оружие";
const headers = Object.values(weaponsCharacteristics);

export default function Weapons() {
  return <MyTableWeaponsPage title={title} headers={headers} items={weapons} />;
}
