import { weaponsAndArmorData } from "@/mockData/routeData/other/weaponsAndArmorData";
import { _weapArmProp } from "@/mockData/routeData/weaponsAndArmorProperties/_weaponsAndArmorProperties";
import { weaponGroups } from "@/mockData/routeData/other/weaponGroups";

export const axes = [
  {
    weaponsCharacteristics_Name: weaponsAndArmorData.Masakari,
    weaponsCharacteristics_Range: "0-1",
    weaponsCharacteristics_BaseDamage: 3,
    weaponsCharacteristics_Deadliness: 4,
    weaponsCharacteristics_Grip: `
    Одноручный: –
    <br>
    Двуручный: Смертоносность +2
    `,
    weaponsCharacteristics_Properties: [_weapArmProp.Secular],
    weaponsAndArmorCharacteristics_Rare: 5,
    weaponsAndArmorCharacteristics_Price: "3 бу",
  },
  {
    weaponsCharacteristics_Name: weaponsAndArmorData.Ono,
    weaponsCharacteristics_Range: "1-2",
    weaponsCharacteristics_BaseDamage: 5,
    weaponsCharacteristics_Deadliness: 6,
    weaponsCharacteristics_Grip: `
    Двуручный: -
    `,
    weaponsCharacteristics_Properties: [_weapArmProp.Combat],
    weaponsAndArmorCharacteristics_Rare: 7,
    weaponsAndArmorCharacteristics_Price: "5 коку",
  },
].map((i) => ({
  ...i,
  weaponsCharacteristics_Category: weaponGroups.Axes,
}));
