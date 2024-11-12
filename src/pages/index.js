import { InputGroup } from "@/components/ui/input-group";
import { Box, Button, Group, Input } from "@chakra-ui/react";
import { LuX } from "react-icons/lu";
import { useState } from "react";
import MyLinks from "@/components/link/MyLinks";

const linksData = [
  { name: "Техники", link: "/techniques" },
  { name: "Стойки", link: "/group" },
  { name: "Кланы", link: "/group" },
  { name: "Семьи", link: "/group" },
  { name: "Школы", link: "/group" },
  { name: "Броня", link: "/group" },
  { name: "Оружие", link: "/group" },
  { name: "Свойства предметов", link: "/group" },
  { name: "Состояния", link: "/group" },
  { name: "Местность", link: "/group" },
  { name: "Фигуры", link: "/group" },
];

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
