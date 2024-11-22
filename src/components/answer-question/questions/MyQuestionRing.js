import { CheckboxGroup, HStack } from "@chakra-ui/react";
import { LuInfo } from "react-icons/lu";

import { CheckboxCard } from "@/components/ui/checkbox-card";
import MyHoverCard from "@/components/MyHoverCard";

import { _rings } from "@/mockData/routeData/other/rings/_rings";

export function MyQuestionRing({
  value,
  accumulatedRings,
  onCustomUpdateValue,
}) {
  const rings = Object.values(_rings).map((i) => ({
    label: i.title,
    value: i.key,
  }));

  return (
    <CheckboxGroup
      borderColor={value ? "transparent" : "border.error"}
      borderTopRadius="sm"
      borderWidth="1px"
    >
      <HStack gap="0" wrap={"wrap"} alignItems="stretch">
        {rings.map((ring, ringIndex) => (
          <CheckboxCard
            key={ringIndex}
            label={ring.label}
            colorPalette="blue"
            variant="subtle"
            size={"sm"}
            indicator={
              <MyHoverCard cardData={ring}>
                <LuInfo />
              </MyHoverCard>
            }
            checked={value === ring.value}
            disabled={value !== ring.value && accumulatedRings[ring.value] >= 3}
            cursor={
              value !== ring.value && accumulatedRings[ring.value] >= 3
                ? "no-drop"
                : "pointer"
            }
            onClick={() => {
              if (accumulatedRings[ring.value] <= 3)
                onCustomUpdateValue(ring.value);
            }}
          />
        ))}
      </HStack>
    </CheckboxGroup>
  );
}
