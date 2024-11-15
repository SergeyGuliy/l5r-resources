import { InputGroup } from "@/components/ui/input-group";
import { Box, Button, Group, Input } from "@chakra-ui/react";
import { LuX } from "react-icons/lu";
import { useState } from "react";
import MyLinks from "@/components/link/MyLinks";
import { groups, translations } from "@/mockData/routeData/constants";
import { generateLinkPath } from "@/helpers/generateLinkPath";

const linksData = [
  { title: translations.techniques, link: generateLinkPath(groups.techniques) },
  { title: translations.skills, link: generateLinkPath(groups.skills) },
  { title: translations.stances, link: generateLinkPath(groups.stances) },
  { title: translations.states, link: generateLinkPath(groups.states) },

  // { title: "Кланы", link: "/group" },
  // { title: "Семьи", link: "/group" },
  // { title: "Школы", link: "/group" },

  { title: "Оружие", link: "/weapons" },
  { title: "Броня", link: "/armors" },

  { title: "Действия в бою", link: "/group" },

  // { title: "Преимущества и недостатки (стр 100-137)", link: "/group" },
  // { title: "Принципы Бусидо", link: "/group" },

  { title: "Другое", link: "/other" },
];

// Спрятаные свойства
// { title: "Фигуры", link: "/group" },
// { title: "Свойства предметов", link: "/group" },
// { title: "Описание оружия", link: "/group" },
// { title: "Местность", link: "/group" },
// { title: "Кольца", link: "/group" },

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
