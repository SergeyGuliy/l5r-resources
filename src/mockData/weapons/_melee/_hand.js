import { renderToString } from "react-dom/server";
import MyHoverCard from "@/components/MyHoverCard";

import { weaponsAndArmorData } from "@/mockData/hoverData/weaponsAndArmorData";
import { weaponsAndArmorProperties } from "@/mockData/hoverData/weaponsAndArmorProperties";
import { weaponGroups } from "@/mockData/hoverData/weaponGroups";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

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
      weaponsAndArmorProperties.Secret,
      weaponsAndArmorProperties.Grasping,
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
      weaponsAndArmorProperties.Secret,
      weaponsAndArmorProperties.Secular,
      weaponsAndArmorProperties.RazorSharp,
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
    Двуручный: ${renderToString(
      <ChakraProvider value={defaultSystem}>
        <MyHoverCard cardData={weaponsAndArmorProperties.Grasping} />
      </ChakraProvider>
    )}
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
      weaponsAndArmorProperties.Ceremonial,
      weaponsAndArmorProperties.Secret,
    ],
    weaponsAndArmorCharacteristics_Rare: 7,
    weaponsAndArmorCharacteristics_Price: "15 коку",
  },
].map((i) => ({
  ...i,
  weaponsCharacteristics_Category: weaponGroups.HandWeapons,
}));
