import { useMemo } from "react";

import { _clans } from "@/mockData/clansFamiliesSchools/clans/_clans";
import { _families } from "@/mockData/clansFamiliesSchools/families";
import { _schools } from "@/mockData/clansFamiliesSchools/schools";
import { _rings } from "@/mockData/routeData/other/rings/_rings";

export function useAnswersSelected(answers) {
  const selectedClan = useMemo(() => {
    return _clans[answers[1]];
  }, [answers]);
  const selectedFamily = useMemo(() => {
    return _families[answers[2]];
  }, [answers]);
  const selectedSchool = useMemo(() => {
    return _schools[answers[3].key];
  }, [answers]);
  const selectedRing = useMemo(() => {
    return _rings[answers[4]];
  }, [answers]);

  return {
    selectedClan,
    selectedFamily,
    selectedSchool,
    selectedRing,
  };
}
