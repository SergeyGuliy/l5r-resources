import { MyTablePage } from "@/components/layout/MyTablePage";

import { weaponsAndArmorCharacteristics } from "@/mockData/hoverData/weaponsAndArmorCharacteristics";
import { weapons } from "@/mockData/weapons";

const title = "Оружие";
const headers = Object.values(weaponsAndArmorCharacteristics);

export default function Weapons() {
  return <MyTablePage title={title} headers={headers} items={weapons} />;
}
