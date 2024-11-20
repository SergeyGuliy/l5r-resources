import { useState } from "react";
import { LuX } from "react-icons/lu";
import { Box, Button, Group, Input } from "@chakra-ui/react";

import { generateLinkPath } from "@/helpers/generateLinkPath";

import MyLinks from "@/components/link/MyLinks";
import { InputGroup } from "@/components/ui/input-group";
import { groups, translations } from "@/mockData/routeData/constants";
import { titleArmor, titleWeapons } from "@/mockData/tableData/constants";

const group1 = [
  { title: translations.skills, link: generateLinkPath(groups.skills) },
  { title: translations.techniques, link: generateLinkPath(groups.techniques) },
  { title: translations.stances, link: generateLinkPath(groups.stances) },
  { title: "Действия в бою", link: "/", disabled: true },
];

const group2 = [
  { title: titleWeapons, link: "/weapons" },
  { title: titleArmor, link: "/armors" },
  { title: "Личные вещи", link: "/armors", disabled: true },
  {
    title: translations.weapArmProp,
    link: generateLinkPath(groups.weapArmProp),
  },
];

const group3 = [
  { title: translations.clans, link: generateLinkPath(groups.clans) },
  { title: translations.families, link: generateLinkPath(groups.families) },
  { title: translations.schools, link: generateLinkPath(groups.schools) },
  { title: "Генератор персонажа", link: "/constructor", disabled: true },
];

const group4 = [
  { title: translations.bushido, link: generateLinkPath(groups.bushido) },
  { title: translations.states, link: generateLinkPath(groups.states) },
  { title: "Местность", link: "/group", disabled: true },
  { title: translations.other, link: generateLinkPath(groups.other) },
];

// Спрятаные свойства
// { title: "Фигуры", link: "/group" },
// { title: "Преимущества и недостатки (стр 100-137)", link: "/group" },

export default function Home() {
  const [search, setSearch] = useState("");

  return (
    <Box display="flex" flexDirection="column">
      <Group mb={2}>
        <InputGroup
          flex="1"
          endElement={
            search && (
              <Box
                position="absolute"
                top="50%"
                right="0.5rem"
                transform="translateY(-50%)"
              >
                <Button
                  onClick={() => setSearch("")}
                  aria-label="Clear input"
                  size="sm"
                  variant="ghost"
                >
                  <LuX />
                </Button>
              </Box>
            )
          }
        >
          <Input
            disabled
            placeholder="Поиск..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </InputGroup>
      </Group>

      <MyLinks linksData={group1} />
      <MyLinks linksData={group2} />
      <MyLinks linksData={group3} />
      <MyLinks linksData={group4} />
    </Box>
  );
}
