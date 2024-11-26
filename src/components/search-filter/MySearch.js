import { InputGroup } from "@/components/ui/input-group";
import { Box, Button, Input } from "@chakra-ui/react";
import { LuX } from "react-icons/lu";

export function MySearch({ useSearch, search, setSearch }) {
  if (!useSearch) return;

  return (
    <InputGroup
      mb={2}
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
        placeholder="Поиск..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </InputGroup>
  );
}
