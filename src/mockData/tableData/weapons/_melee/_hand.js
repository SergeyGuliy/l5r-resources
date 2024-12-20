import { weaponsAndArmorData } from "@/mockData/routeData/other/weaponsAndArmorData";
import { _weapArmProp } from "@/mockData/routeData/weaponsAndArmorProperties/_weaponsAndArmorProperties";
import { weaponGroups } from "@/mockData/routeData/other/weaponGroups";

export const hand = [
  {
    weaponsCharacteristics_Name: weaponsAndArmorData.Jitte,
    weaponsCharacteristics_Range: "0",
    weaponsCharacteristics_BaseDamage: 3,
    weaponsCharacteristics_Deadliness: 2,
    weaponsCharacteristics_Grip: `
    Одноручный: –
    `,
    weaponsCharacteristics_Properties: [
      _weapArmProp.Secret,
      _weapArmProp.Grasping,
    ],
    weaponsAndArmorCharacteristics_Rare: 5,
    weaponsAndArmorCharacteristics_Price: "5 бу",
  },
  {
    weaponsCharacteristics_Name: weaponsAndArmorData.Knife,
    weaponsCharacteristics_Range: "0",
    weaponsCharacteristics_BaseDamage: 2,
    weaponsCharacteristics_Deadliness: 4,
    weaponsCharacteristics_Grip: `
    Одноручный: –
    <br>
    Двуручный: Смертоносность +2
    `,
    weaponsCharacteristics_Properties: [
      _weapArmProp.Secret,
      _weapArmProp.Secular,
      _weapArmProp.RazorSharp,
    ],
    weaponsAndArmorCharacteristics_Rare: 1,
    weaponsAndArmorCharacteristics_Price: "1 коку",
  },
  {
    weaponsCharacteristics_Name: weaponsAndArmorData.Nunchucks,
    weaponsCharacteristics_Range: "0-1",
    weaponsCharacteristics_BaseDamage: 4,
    weaponsCharacteristics_Deadliness: 2,
    weaponsCharacteristics_Grip: `
    Одноручный: –
    <br>
    Двуручный: <span style="text-decoration:underline">Хватающее</span>
    `,
    weaponsCharacteristics_Properties: [],
    weaponsAndArmorCharacteristics_Rare: 6,
    weaponsAndArmorCharacteristics_Price: "1 коку",
  },
  {
    weaponsCharacteristics_Name: weaponsAndArmorData.Tessen,
    weaponsCharacteristics_Range: "0-1",
    weaponsCharacteristics_BaseDamage: 4,
    weaponsCharacteristics_Deadliness: 3,
    weaponsCharacteristics_Grip: `
    Одноручный: –
    `,
    weaponsCharacteristics_Properties: [
      _weapArmProp.Ceremonial,
      _weapArmProp.Secret,
    ],
    weaponsAndArmorCharacteristics_Rare: 7,
    weaponsAndArmorCharacteristics_Price: "15 коку",
  },
].map((i) => ({
  ...i,
  weaponsCharacteristics_Category: weaponGroups.HandWeapons,
}));
