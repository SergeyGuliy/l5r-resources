import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "@/components/ui/select";
import { useMemo } from "react";

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
        <SelectValueText placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {list.items.map((item) => (
          <SelectItem item={item} key={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectRoot>
  );
}
