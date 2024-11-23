import { Button, Group, IconButton } from "@chakra-ui/react";
import { LuFilter, LuFilterX } from "react-icons/lu";

import { MySearch } from "@/components/search-filter/MySearch";
import { useState } from "react";
import { MyFilterDialog } from "@/components/search-filter/MyFilterDialog";

export function MySearchFilter({
  useSearch,
  search,
  wrappedSetSearch,
  isTouched,
  filters,
  wrappedSetFilters,
  clearFilters,
  useTechLvls,
  lvls,
  wrappedSetLvls,
}) {
  const [open, setOpen] = useState(false);

  return (
    <Group mb={2}>
      <MySearch
        search={search}
        setSearch={(value) => wrappedSetSearch(value)}
        useSearch={useSearch}
      />

      {filters && (
        <Button
          variant="solid"
          colorPalette={isTouched ? "orange" : "blue"}
          onClick={() => setOpen(true)}
          mb={5}
        >
          Фильтр
          <LuFilter />
        </Button>
      )}

      {isTouched && filters && (
        <IconButton
          variant="solid"
          colorPalette={"orange"}
          mb={5}
          onClick={() => clearFilters()}
        >
          <LuFilterX />
        </IconButton>
      )}

      {filters && (
        <MyFilterDialog
          open={open}
          setOpen={setOpen}
          filters={filters}
          wrappedSetFilters={wrappedSetFilters}
          useTechLvls={useTechLvls}
          lvls={lvls}
          wrappedSetLvls={wrappedSetLvls}
        />
      )}
    </Group>
  );
}
