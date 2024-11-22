import { CheckboxGroup, HStack } from "@chakra-ui/react";
import { LuInfo } from "react-icons/lu";

import { CheckboxCard } from "@/components/ui/checkbox-card";
import MyHoverCard from "@/components/MyHoverCard";

import { _rings } from "@/mockData/routeData/other/rings/_rings";

function Indicator(ring) {
  return (
    <MyHoverCard cardData={ring}>
      <LuInfo />
    </MyHoverCard>
  );
}

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

  function getCursor(ring) {
    return isInvalid(ring) ? "no-drop" : "pointer";
  }

  const onClick = (ring) => !isInvalid(ring) && onCustomUpdateValue(ring.value);

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
            indicator={Indicator(ring)}
            checked={value === ring.value}
            disabled={isInvalid(ring)}
            cursor={getCursor(ring)}
            onClick={() => onClick(ring)}
          />
        ))}
      </HStack>
    </CheckboxGroup>
  );
}
