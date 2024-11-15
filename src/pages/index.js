import { InputGroup } from "@/components/ui/input-group";
import { Box, Button, Group, Input } from "@chakra-ui/react";
import { LuX } from "react-icons/lu";
import { useState } from "react";
import MyLinks from "@/components/link/MyLinks";
import { groups, translations } from "@/mockData/routeData/constants";
import { generateLinkPath } from "@/helpers/generateLinkPath";

const linksData = [
  { name: translations.techniques, link: generateLinkPath(groups.techniques) },
  { name: translations.skills, link: generateLinkPath(groups.skills) },
  { name: translations.stances, link: generateLinkPath(groups.stances) },
  { name: translations.states, link: generateLinkPath(groups.states) },

  // { name: "Кланы", link: "/group" },
  // { name: "Семьи", link: "/group" },
  // { name: "Школы", link: "/group" },

  { name: "Оружие", link: "/weapons" },
  { name: "Броня", link: "/armors" },

  // { name: "Действия в бою", link: "/group" },

  // { name: "Преимущества и недостатки (стр 100-137)", link: "/group" },
  // { name: "Принципы Бусидо", link: "/group" },

  { name: "Другое", link: "/other" },
];

// Спрятаные свойства
// { name: "Фигуры", link: "/group" },
// { name: "Свойства предметов", link: "/group" },
// { name: "Описание оружия", link: "/group" },
// { name: "Местность", link: "/group" },
// { name: "Кольца", link: "/group" },

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

      <MyLinks linksData={linksData} />
    </Box>
  );
}
