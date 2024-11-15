import { renderToString } from "react-dom/server";
import MyHoverCard from "@/components/MyHoverCard";

import { weaponsAndArmorData } from "@/mockData/hoverData/weaponsAndArmorData";
import { weaponsAndArmorProperties } from "@/mockData/hoverData/weaponsAndArmorProperties";
import { weaponGroups } from "@/mockData/hoverData/weaponGroups";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

export const hand = [
  {
    weaponsAndArmorCharacteristics_Name: weaponsAndArmorData.Jitte,
    weaponsAndArmorCharacteristics_Range: "0",
    weaponsAndArmorCharacteristics_BaseDamage: 3,
    weaponsAndArmorCharacteristics_Deadliness: 2,
    weaponsAndArmorCharacteristics_Grip: `
    Одноручный: –
    `,
    weaponsAndArmorCharacteristics_Properties: [
      weaponsAndArmorProperties.Secret,
      weaponsAndArmorProperties.Grasping,
    ],
    weaponsAndArmorCharacteristics_Rare: 5,
    weaponsAndArmorCharacteristics_Price: "5 бу",
  },
  {
    weaponsAndArmorCharacteristics_Name: weaponsAndArmorData.Knife,
    weaponsAndArmorCharacteristics_Range: "0",
    weaponsAndArmorCharacteristics_BaseDamage: 2,
    weaponsAndArmorCharacteristics_Deadliness: 4,
    weaponsAndArmorCharacteristics_Grip: `
    Одноручный: –
    <br>
    Двуручный: Смертоносность +2
    `,
    weaponsAndArmorCharacteristics_Properties: [
      weaponsAndArmorProperties.Secret,
      weaponsAndArmorProperties.Secular,
      weaponsAndArmorProperties.RazorSharp,
    ],
    weaponsAndArmorCharacteristics_Rare: 1,
    weaponsAndArmorCharacteristics_Price: "1 коку",
  },
  {
    weaponsAndArmorCharacteristics_Name: weaponsAndArmorData.Nunchucks,
    weaponsAndArmorCharacteristics_Range: "0-1",
    weaponsAndArmorCharacteristics_BaseDamage: 4,
    weaponsAndArmorCharacteristics_Deadliness: 2,
    weaponsAndArmorCharacteristics_Grip: `
    Одноручный: –
    <br>
    Двуручный: ${renderToString(
      <ChakraProvider value={defaultSystem}>
        <MyHoverCard cardData={weaponsAndArmorProperties.Grasping} />
      </ChakraProvider>
    )}
    `,
    weaponsAndArmorCharacteristics_Properties: [],
    weaponsAndArmorCharacteristics_Rare: 6,
    weaponsAndArmorCharacteristics_Price: "1 коку",
  },
  {
    weaponsAndArmorCharacteristics_Name: weaponsAndArmorData.Tessen,
    weaponsAndArmorCharacteristics_Range: "0-1",
    weaponsAndArmorCharacteristics_BaseDamage: 4,
    weaponsAndArmorCharacteristics_Deadliness: 3,
    weaponsAndArmorCharacteristics_Grip: `
    Одноручный: –
    `,
    weaponsAndArmorCharacteristics_Properties: [
      weaponsAndArmorProperties.Ceremonial,
      weaponsAndArmorProperties.Secret,
    ],
    weaponsAndArmorCharacteristics_Rare: 7,
    weaponsAndArmorCharacteristics_Price: "15 коку",
  },
].map((i) => ({
  ...i,
  weaponsAndArmorCharacteristics_Category: weaponGroups.HandWeapons,
}));
