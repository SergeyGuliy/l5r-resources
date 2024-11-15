import { Button, HStack } from "@chakra-ui/react";
import { allLvls } from "@/mockData/routeData/constants";

export default function MySearchFilterLvls({ lvls, setLvls }) {
  function toggleLvl(lvlToToggle) {
    lvls.includes(lvlToToggle)
      ? setLvls(lvls.filter((i) => i !== lvlToToggle))
      : setLvls([...lvls, lvlToToggle]);
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
