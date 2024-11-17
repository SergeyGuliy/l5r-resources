import { InputGroup } from "@/components/ui/input-group";
import { Box, Button, Group, Input } from "@chakra-ui/react";
import { LuX } from "react-icons/lu";
import { useState } from "react";
import MyLinks from "@/components/link/MyLinks";
import { groups, translations } from "@/mockData/routeData/constants";
import { generateLinkPath } from "@/helpers/generateLinkPath";
import { titleArmor, titleWeapons } from "@/mockData/tableData/constants";

const a = [
  { title: translations.techniques, link: generateLinkPath(groups.techniques) },
  { title: translations.skills, link: generateLinkPath(groups.skills) },
  { title: translations.stances, link: generateLinkPath(groups.stances) },
];

const b = [
  { title: titleWeapons, link: "/weapons" },
  { title: titleArmor, link: "/armors" },
  {
    title: translations.weapArmProp,
    link: generateLinkPath(groups.weapArmProp),
  },
];

const c = [{ title: "Действия в бою", link: "/group" }];

const d = [
  // { title: "Кланы", link: "/group" },
  // { title: "Семьи", link: "/group" },
  // { title: "Школы", link: "/group" },
];

const e = [
  { title: translations.bushido, link: generateLinkPath(groups.bushido) },
  { title: translations.rings, link: generateLinkPath(groups.rings) },
  { title: translations.states, link: generateLinkPath(groups.states) },
  { title: translations.other, link: generateLinkPath(groups.other) },
];

// Спрятаные свойства
// { title: "Фигуры", link: "/group" },
// { title: "Местность", link: "/group" },
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

      {/*<MyLinks linksData={d} />*/}
      <MyLinks linksData={a} />
      <MyLinks linksData={b} />
      <MyLinks linksData={c} />
      <MyLinks linksData={e} />
    </Box>
  );
}
