import { _swordsData } from "@/mockData/otherData/weaponsAndArmorData/_meleeWeapons/_swordsData";
import { _axesData } from "@/mockData/otherData/weaponsAndArmorData/_meleeWeapons/_axesData";
import { _bluntData } from "@/mockData/otherData/weaponsAndArmorData/_meleeWeapons/_bluntData";
import { _handData } from "@/mockData/otherData/weaponsAndArmorData/_meleeWeapons/_handData";
import { _poleData } from "@/mockData/otherData/weaponsAndArmorData/_meleeWeapons/_poleData";

export const meleeWeapons = {
  ..._swordsData,
  ..._axesData,
  ..._bluntData,
  ..._handData,
  ..._poleData,
};
