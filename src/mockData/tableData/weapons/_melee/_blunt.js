import { weaponsAndArmorData } from "@/mockData/routeData/other/weaponsAndArmorData";
import { _weapArmProp } from "@/mockData/routeData/weaponsAndArmorProperties/_weaponsAndArmorProperties";
import { weaponGroups } from "@/mockData/routeData/other/weaponGroups";

export const blunt = [
  {
    weaponsCharacteristics_Name: weaponsAndArmorData.Club,
    weaponsCharacteristics_Range: "0-1",
    weaponsCharacteristics_BaseDamage: 5,
    weaponsCharacteristics_Deadliness: 2,
    weaponsCharacteristics_Grip: `
    Одноручный: –
    <br>
    Двуручный: Урон +1
    `,
    weaponsCharacteristics_Properties: [_weapArmProp.Secular],
    weaponsAndArmorCharacteristics_Rare: 1,
    weaponsAndArmorCharacteristics_Price: "1 бу",
  },
  {
    weaponsCharacteristics_Name: weaponsAndArmorData.Hammer,
    weaponsCharacteristics_Range: "0-1",
    weaponsCharacteristics_BaseDamage: 5,
    weaponsCharacteristics_Deadliness: 2,
    weaponsCharacteristics_Grip: `
    Одноручный: –
    <br>
    Двуручный: Урон +2
    `,
    weaponsCharacteristics_Properties: [_weapArmProp.Secular],
    weaponsAndArmorCharacteristics_Rare: 4,
    weaponsAndArmorCharacteristics_Price: "3 бу",
  },
  {
    weaponsCharacteristics_Name: weaponsAndArmorData.Kiseru,
    weaponsCharacteristics_Range: "0",
    weaponsCharacteristics_BaseDamage: 2,
    weaponsCharacteristics_Deadliness: 2,
    weaponsCharacteristics_Grip: `
    Одноручный: –
    `,
    weaponsCharacteristics_Properties: [
      _weapArmProp.Secret,
      _weapArmProp.Secular,
    ],
    weaponsAndArmorCharacteristics_Rare: 5,
    weaponsAndArmorCharacteristics_Price: "1 коку",
  },
  {
    weaponsCharacteristics_Name: weaponsAndArmorData.Otsuchi,
    weaponsCharacteristics_Range: "1",
    weaponsCharacteristics_BaseDamage: 8,
    weaponsCharacteristics_Deadliness: 3,
    weaponsCharacteristics_Grip: `
    Двуручный: –
    `,
    weaponsCharacteristics_Properties: [
      _weapArmProp.Bulky,
      _weapArmProp.Combat,
    ],
    weaponsAndArmorCharacteristics_Rare: 8,
    weaponsAndArmorCharacteristics_Price: "30 коку",
  },
  {
    weaponsCharacteristics_Name: weaponsAndArmorData.Tetsubo,
    weaponsCharacteristics_Range: "1-2",
    weaponsCharacteristics_BaseDamage: 7,
    weaponsCharacteristics_Deadliness: 3,
    weaponsCharacteristics_Grip: `
    Двуручный: –
    `,
    weaponsCharacteristics_Properties: [
      _weapArmProp.Bulky,
      _weapArmProp.Combat,
      _weapArmProp.Strong,
    ],
    weaponsAndArmorCharacteristics_Rare: 5,
    weaponsAndArmorCharacteristics_Price: "20 коку",
  },
].map((i) => ({
  ...i,
  weaponsCharacteristics_Category: weaponGroups.BluntWeapons,
}));
