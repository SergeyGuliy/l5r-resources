import { MyPageTitle } from "@/components/MyPageTitle";
import { Box } from "@chakra-ui/react";
import MyTable from "@/components/MyTable";

export function MyTablePage({ title, headers, items }) {
  return (
    <Box display="flex" flexDirection="column" w={"100%"} h={"100%"}>
      <MyPageTitle title={title} />

      {/*<MySearchFilter*/}
      {/*  useSearch={useSearch}*/}
      {/*  search={search}*/}
      {/*  setSearch={setSearch}*/}
      {/*  isTouched={isTouched}*/}
      {/*  filters={filters}*/}
      {/*  setFilters={setFilters}*/}
      {/*  clearFilters={clearFilters}*/}
      {/*  useTechLvls={useTechLvls}*/}
      {/*  lvls={lvls}*/}
      {/*  setLvls={setLvls}*/}
      {/*/>*/}
      <MyTable headers={headers} items={items} />
    </Box>
  );
}
