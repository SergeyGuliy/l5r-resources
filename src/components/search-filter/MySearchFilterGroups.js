import { Button, Stack } from "@chakra-ui/react";
import { Switch } from "@/components/ui/switch";
import { hiddenFilter } from "@/mockData/routeData/constants";

export function MySearchFilterGroups({
  filter,
  groupIndex,
  wrappedSetFilters,
}) {
  const allChecked = filter.subGroups.every((value) => value.checked);
  const indeterminate =
    filter.subGroups.some((value) => value.checked) && !allChecked;

  function onCheckedGroup({ checked }) {
    wrappedSetFilters((current) => {
      const newValues = [...current];
      newValues[groupIndex] = {
        ...newValues[groupIndex],
        subGroups: newValues[groupIndex].subGroups.map((subGroup) => ({
          ...subGroup,
          checked,
        })),
      };

      return newValues;
    });
  }

  function onCheckedSubGroup(checked, subGroupIndexToUpdate) {
    wrappedSetFilters((current) => {
      const newValues = [...current];
      newValues[groupIndex] = {
        ...newValues[groupIndex],
        subGroups: newValues[groupIndex].subGroups.map(
          (subGroup, subGroupIndex) => {
            return subGroupIndexToUpdate !== subGroupIndex
              ? subGroup
              : { ...subGroup, checked };
          }
        ),
      };

      return newValues;
    });
  }

  if (!filter.subGroups?.length) return;

  return (
    <>
      {!filter.hidden && (
        <Switch
          checked={indeterminate ? "indeterminate" : allChecked}
          colorPalette={"blue"}
          onCheckedChange={(e) => onCheckedGroup(e)}
          size="md"
          my={0}
        >
          {filter.label}
        </Switch>
      )}

      {!!filter.subGroups.length && (
        <Stack warp={"wrap"} direction="row" mb={4}>
          {filter.subGroups.map((subGroup, subGroupIndexToUpdate) => {
            if (hiddenFilter.includes(subGroup.value)) return;

            return (
              <Button
                size="xs"
                key={subGroup.value}
                colorPalette={subGroup.checked ? "blue" : "blue"}
                variant={subGroup.checked ? "solid" : "outline"}
                onClick={() =>
                  onCheckedSubGroup(!subGroup.checked, subGroupIndexToUpdate)
                }
              >
                {subGroup.label}
              </Button>
            );
          })}
        </Stack>
      )}
    </>
  );
}
