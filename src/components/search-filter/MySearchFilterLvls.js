import { Button, HStack } from "@chakra-ui/react";
import { allLvls } from "@/mockData/routeData/constants";

export function MySearchFilterLvls({ lvls, wrappedSetLvls }) {
  function toggleLvl(lvlToToggle) {
    lvls.includes(lvlToToggle)
      ? wrappedSetLvls(lvls.filter((i) => i !== lvlToToggle))
      : wrappedSetLvls([...lvls, lvlToToggle]);
  }

  return (
    <>
      <p>Ранг техники</p>

      <HStack>
        {allLvls.map((lvl) => (
          <Button
            size="xs"
            key={lvl}
            colorPalette={lvls.includes(lvl) ? "blue" : "blue"}
            variant={lvls.includes(lvl) ? "solid" : "outline"}
            onClick={() => toggleLvl(lvl)}
          >
            {lvl}
          </Button>
        ))}
      </HStack>
    </>
  );
}
