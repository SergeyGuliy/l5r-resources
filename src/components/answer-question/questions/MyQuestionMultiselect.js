import { useMemo } from "react";

import { Box, CheckboxGroup, HStack, Text } from "@chakra-ui/react";
import { CheckboxCard } from "@/components/ui/checkbox-card";
import { LuInfo } from "react-icons/lu";
import MyHoverCard from "@/components/MyHoverCard";

export function MyQuestionMultiselect({
  title,
  data,
  selectList = [],
  onUpdate,
}) {
  const isMaximusSelected = useMemo(() => {
    return selectList?.length >= data?.toSelect;
  }, [data?.toSelect, selectList?.length]);

  function localUpdate(event, key) {
    event.stopPropagation();
    event.preventDefault();

    if (selectList.includes(key)) {
      onUpdate(selectList.filter((i) => i !== key));
    } else {
      if (isMaximusSelected) return;
      onUpdate([...selectList, key]);
    }
  }

  if (!data?.toSelect || !data?.items?.length) return;
  return (
    <Box mb={2}>
      {title && (
        <Text textStyle={"md"} fontWeight="semibold" mb={3}>
          {title} {`(${selectList?.length} из ${data?.toSelect})`}
        </Text>
      )}

      <CheckboxGroup
        borderColor={isMaximusSelected ? "transparent" : "border.error"}
        borderTopRadius="sm"
        borderWidth="1px"
      >
        <HStack gap="0" wrap={"wrap"} alignItems="stretch">
          {data.items.map((data, ringIndex) => (
            <CheckboxCard
              flex="1 1 auto"
              key={ringIndex}
              label={data.title}
              colorPalette="blue"
              variant="subtle"
              size={"sm"}
              indicator={
                <MyHoverCard cardData={data}>
                  <LuInfo />
                </MyHoverCard>
              }
              checked={selectList && selectList.includes(data.key)}
              disabled={isMaximusSelected}
              onClick={(event) => localUpdate(event, data.key)}
            />
          ))}
        </HStack>
      </CheckboxGroup>
    </Box>
  );
}
