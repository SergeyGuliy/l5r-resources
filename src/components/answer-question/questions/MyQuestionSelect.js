import { CheckboxGroup, HStack } from "@chakra-ui/react";
import { CheckboxCard } from "@/components/ui/checkbox-card";

export function MyQuestionSelect({ value, items, onCustomUpdateValue }) {
  return (
    <CheckboxGroup
      borderColor={value ? "transparent" : "border.error"}
      borderTopRadius="sm"
      borderWidth="1px"
    >
      <HStack p={2} gap="1.5" wrap={"wrap"} alignItems="stretch">
        {items.map((item, itemIndex) => (
          <CheckboxCard
            key={itemIndex}
            label={item.label}
            colorPalette="blue"
            variant="subtle"
            size={"sm"}
            indicator=""
            checked={value === item.value}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onCustomUpdateValue(item.value);
            }}
          />
        ))}
      </HStack>
    </CheckboxGroup>
  );
}
