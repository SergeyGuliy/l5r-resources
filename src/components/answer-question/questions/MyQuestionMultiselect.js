import { useMemo } from "react";

import { Card, CheckboxGroup, HStack, Text } from "@chakra-ui/react";
import { CheckboxCard } from "@/components/ui/checkbox-card";
import { LuInfo } from "react-icons/lu";
import MyHoverCard from "@/components/MyHoverCard";

export function MyQuestionMultiselect({
  title,
  dataToShow,
  selectList = [],
  onUpdate,
}) {
  const isMaximusSelected = useMemo(() => {
    return selectList?.length >= dataToShow?.toSelect;
  }, [dataToShow?.toSelect, selectList?.length]);

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

  const questionState = useMemo(() => {
    if (isMaximusSelected) return "border.disabled";
    return "border.error";
  }, [isMaximusSelected]);

  if (!dataToShow?.toSelect || !dataToShow?.items?.length) return;

  return (
    <Card.Root mb={2} p={3} borderColor={questionState}>
      <Text textStyle={"md"} fontWeight="semibold" mb={3}>
        {title} {`(${selectList?.length} из ${dataToShow?.toSelect})`}
      </Text>
      <CheckboxGroup>
        <HStack gap="1" wrap={"wrap"} alignItems="stretch">
          {dataToShow.items.map((data, ringIndex) => (
            <CheckboxCard
              flex="1 1 auto"
              key={ringIndex}
              label={data.title}
              colorPalette="teal"
              variant="subtle"
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
    </Card.Root>
  );
}
