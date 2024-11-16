import { groups } from "@/mockData/routeData/constants";
import { _shujiEarth } from "@/mockData/routeData/techniques/_shuji/_shujiEarth";
import { _shujiAir } from "@/mockData/routeData/techniques/_shuji/_shujiAir";
import { _shujiFire } from "@/mockData/routeData/techniques/_shuji/_shujiFire";
import { _shujiWater } from "@/mockData/routeData/techniques/_shuji/_shujiWater";
import { _shujiVoid } from "@/mockData/routeData/techniques/_shuji/_shujiVoid";

export const shuji = {
  ..._shujiEarth,
  ..._shujiAir,
  ..._shujiFire,
  ..._shujiWater,
  ..._shujiVoid,
};

export const shujiFilterSettings = {
  group: groups.shuji,
  subGroups: [
    groups.shujiEarth,
    groups.shujiWater,
    groups.shujiAir,
    groups.shujiFire,
    groups.shujiVoid,
  ],
};
