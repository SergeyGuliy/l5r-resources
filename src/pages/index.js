import { Box } from "@chakra-ui/react";

import { genLinkPath } from "@/helpers/genLinkPath";

import { MyLinks } from "@/components/link/MyLinks";
import { groups, text } from "@/mockData/routeData/constants";
import { titleArmor, titleWeapons } from "@/mockData/tableData/constants";
import { MyGlobalSearch } from "@/components/MyGlobalSearch";
import { MyPageWrapper } from "@/components/MyPageWrapper";
const linksData = [
  [
    { title: text.skills, link: genLinkPath(groups.skills) },
    { title: text.techniques, link: genLinkPath(groups.techniques) },
    { title: text.stances, link: genLinkPath(groups.stances) },
    { title: text.conflictActions, link: genLinkPath(groups.conflictActions) },
  ],
  [
    { title: titleWeapons, link: "/weapons" },
    { title: titleArmor, link: "/armors" },
    { title: "Личные вещи", link: "/armors", disabled: true },
    { title: text.weapArmProp, link: genLinkPath(groups.weapArmProp) },
  ],
  [
    { title: text.clans, link: genLinkPath(groups.clans) },
    { title: text.families, link: genLinkPath(groups.families) },
    { title: text.schools, link: genLinkPath(groups.schools) },
    { title: "Конструктор персонажа", link: "/constructor" },
  ],
  [
    { title: text.bushido, link: genLinkPath(groups.bushido) },
    { title: text.states, link: genLinkPath(groups.states) },
    { title: text.terrain, link: genLinkPath(groups.terrain) },
    { title: text.other, link: genLinkPath(groups.other) },
  ],
];

export default function Home() {
  const col = { base: 24, sm: 12, md: 6, lg: 6, xl: 6, "2xl": 6 };

  return (
    <MyPageWrapper>
      <Box
        display="flex"
        flexDirection="column"
        maxW={"1100px"}
        mx={"auto"}
        overflow={"auto"}
        h={"100%"}
        pt={2}
      >
        <MyGlobalSearch />

        {linksData.map((links, index) => (
          <MyLinks key={index} linksData={links} colSpan={col} />
        ))}
      </Box>
    </MyPageWrapper>
  );
}
