import { Box, Button, Group, Input } from "@chakra-ui/react";
import { InputGroup } from "@/components/ui/input-group";
import { LuX } from "react-icons/lu";
import { useState } from "react";

function ClearIcon({ search, setSearch }) {
  if (!search) return;

  return (
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
  );
}

export function MyGlobalSearch() {
  const [search, setSearch] = useState("");

  return (
    <Group mb={2}>
      <InputGroup
        flex="1"
        endElement={<ClearIcon search={search} setSearch={setSearch} />}
      >
        <Input
          disabled
          placeholder="Поиск..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </InputGroup>
    </Group>
  );
}
