import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogHeader,
  DialogRoot,
  DialogTitle,
} from "@/components/ui/dialog";
import { Stack } from "@chakra-ui/react";
import MySearchFilterGroups from "@/components/search-filter/MySearchFilterGroups";
import MySearchFilterLvls from "@/components/search-filter/MySearchFilterLvls";

export function MyFilterDialog({
  open,
  setOpen,
  filters,
  wrappedSetFilters,
  useTechLvls,
  lvls,
  wrappedSetLvls,
}) {
  return (
    <DialogRoot
      lazyMount
      open={open}
      onOpenChange={(e) => setOpen(e.open)}
      size={{
        base: "full",
        lg: "xl",
      }}
      centered={true}
      placement={"center"}
      scrollBehavior="inside"
      height={"auto"}
    >
      <DialogContent minHeight={{ lg: "unset" }}>
        <DialogHeader>
          <DialogTitle>Фильтр</DialogTitle>
          <DialogCloseTrigger />
        </DialogHeader>

        <DialogBody flex={"unset"}>
          <Stack>
            {filters.map((filter, groupIndex) => (
              <MySearchFilterGroups
                filter={filter}
                key={groupIndex}
                groupIndex={groupIndex}
                wrappedSetFilters={wrappedSetFilters}
              />
            ))}
            {useTechLvls && (
              <MySearchFilterLvls lvls={lvls} wrappedSetLvls={wrappedSetLvls} />
            )}
          </Stack>
        </DialogBody>
      </DialogContent>
    </DialogRoot>
  );
}
