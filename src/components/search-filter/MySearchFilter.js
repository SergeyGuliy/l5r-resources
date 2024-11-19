import { Button, Group, IconButton } from "@chakra-ui/react";
import { LuFilter, LuFilterX } from "react-icons/lu";

import { MySearch } from "@/components/search-filter/MySearch";
import { useState } from "react";
import { MyFilterDialog } from "@/components/search-filter/MyFilterDialog";

export default function MySearchFilter({
  useSearch,
  search,
  setSearch,
  isTouched,
  filters,
  setFilters,
  clearFilters,
  useTechLvls,
  lvls,
  setLvls,
}) {
  const [open, setOpen] = useState(false);

  function localSetSearch(value) {
    setSearch(value);
    const url = new URL(window.location.href);
    url.searchParams.set("search", value); // Set or update the 'search' query parameter
    window.history.replaceState({}, "", url);
  }

  return (
    <Group mb={2}>
      <MySearch
        search={search}
        setSearch={(value) => localSetSearch(value)}
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
          setFilters={setFilters}
          useTechLvls={useTechLvls}
          lvls={lvls}
          setLvls={setLvls}
        />
      )}
    </Group>
  );
}
