import { CheckboxGroup, HStack } from "@chakra-ui/react";

import { CheckboxCard } from "@/components/ui/checkbox-card";

import { _rings } from "@/mockData/routeData/other/rings/_rings";
import { MyHoverCard } from "@/components/MyHoverCard";

export function MyQuestionRing({
  value,
  accumulatedRings,
  onCustomUpdateValue,
  otherSelectedRing = "",
}) {
  const rings = Object.values(_rings).map((i) => ({
    label: i.title,
    value: i.key,
  }));

  function isInvalid(ring) {
    const localInvalid =
      value !== ring.value && accumulatedRings[ring.value] >= 3;

    const otherInvalid = otherSelectedRing && otherSelectedRing === ring.value;

    return localInvalid || otherInvalid;
  }

  const getCursor = (ring) => (isInvalid(ring) ? "no-drop" : "pointer");

  const onClick = (e, ring) => {
    e.preventDefault();
    e.stopPropagation();
    return !isInvalid(ring) && onCustomUpdateValue(ring.value);
  };

  return (
    <CheckboxGroup
      borderColor={value ? "transparent" : "border.error"}
      borderTopRadius="sm"
      borderWidth="1px"
    >
      <HStack p={2} gap="1.5" wrap={"wrap"} alignItems="stretch">
        {rings.map((ring, ringIndex) => (
          <CheckboxCard
            key={ringIndex}
            label={<MyHoverCard cardData={_rings[ring.value]} />}
            colorPalette="blue"
            variant="subtle"
            size={"sm"}
            indicator=""
            checked={value === ring.value}
            disabled={isInvalid(ring)}
            cursor={getCursor(ring)}
            onClick={(e) => onClick(e, ring)}
          />
        ))}
      </HStack>
    </CheckboxGroup>
  );
}
