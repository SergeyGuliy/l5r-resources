import { MyTablePage } from "@/components/layout/MyTablePage";
import { propertiesOfWeapons } from "@/mockData/hoverData/propertiesOfWeapons";

const title = "Оружие";
const headers = Object.values(propertiesOfWeapons);

const example = [
  {
    propertiesOfWeapons_Category: "Laptop",
    propertiesOfWeapons_Name: "Laptop",
    propertiesOfWeapons_Skill: "Laptop",
    propertiesOfWeapons_BaseDamage: 1,
    propertiesOfWeapons_Deadliness: 1,
    propertiesOfWeapons_Grip: 1,
    propertiesOfWeapons_Properties: 1,
    propertiesOfWeapons_Rare: 1,
    propertiesOfWeapons_Price: 1,
  },
];

const swords = [
  {
    propertiesOfWeapons_Category: "Laptop",
    propertiesOfWeapons_Name: "Laptop",
    propertiesOfWeapons_Skill: "Laptop",
    propertiesOfWeapons_BaseDamage: 1,
    propertiesOfWeapons_Deadliness: 1,
    propertiesOfWeapons_Grip: 1,
    propertiesOfWeapons_Properties: 1,
    propertiesOfWeapons_Rare: 1,
    propertiesOfWeapons_Price: 1,
  },
];

const items = [...swords];

export default function Weapons() {
  return <MyTablePage title={title} headers={headers} items={items} />;
}
