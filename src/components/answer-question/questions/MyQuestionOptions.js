import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "@/components/ui/select";
import { useMemo } from "react";
import { Box, Button } from "@chakra-ui/react";
import { LuX } from "react-icons/lu";
import { InputGroup } from "@/components/ui/input-group";
import { MyHoverCard } from "@/components/MyHoverCard";

export function MyQuestionOptions({
  placeholder,
  invalid = false,
  disabled = false,
  list,
  value = "",
  onCustomUpdateValue,
}) {
  const localValue = useMemo(() => [value], [value]);
  return (
    <InputGroup
      w={"100%"}
      endElement={
        value && (
          <Box
            position="absolute"
            top="50%"
            right="2rem"
            transform="translateY(-50%)"
          >
            <Button
              onClick={() => onCustomUpdateValue("")}
              aria-label="Clear input"
              size="xsm"
              variant="ghost"
            >
              <LuX />
            </Button>
          </Box>
        )
      }
    >
      <SelectRoot
        mt={1}
        size="sm"
        disabled={disabled || list.items.length === 0}
        invalid={invalid}
        collection={list}
        value={localValue}
        onValueChange={(e) => onCustomUpdateValue(e.value[0])}
      >
        <SelectTrigger>
          <SelectValueText placeholder={placeholder}>
            {(items) => {
              const item = items[0];
              return (
                <Box mr={"auto"}>
                  {item.label}
                  {item.data && (
                    <MyHoverCard cardData={item.data}>
                      <span />
                    </MyHoverCard>
                  )}
                </Box>
              );
            }}
          </SelectValueText>
        </SelectTrigger>
        <SelectContent>
          {list.items.map((item) => (
            <SelectItem
              item={item}
              key={item.value}
              justifyContent="flex-start"
            >
              <Box mr={"auto"}>
                {item.label}
                {item.data && (
                  <MyHoverCard cardData={item.data}>
                    <span />
                  </MyHoverCard>
                )}
              </Box>
            </SelectItem>
          ))}
        </SelectContent>
      </SelectRoot>
    </InputGroup>
  );
}
