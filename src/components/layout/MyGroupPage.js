import MySearchFilter from "@/components/search-filter/MySearchFilter";
import MyCardList from "@/components/card/MyCardList";
import { Box, HStack } from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import MyLinks from "@/components/link/MyLinks";
import { parseFilters } from "@/helpers/parseFilters";
import { MyPageTitle } from "@/components/MyPageTitle";

export default function MyGroupPage({
  title,
  list,
  filterGroups,
  useTechLvls,
  useSearch,
  links,
  children,
}) {
  const [defaultFilters, setDefaultFilters] = useState(
    parseFilters(filterGroups)
  );
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState(defaultFilters);
  const [lvls, setLvls] = useState([]);

  useEffect(() => {
    setDefaultFilters(parseFilters(filterGroups));
    setFilters(parseFilters(filterGroups));
  }, [filterGroups]);

  const isTouched = useMemo(() => {
    if (lvls.length) return true;
    return JSON.stringify(filters) !== JSON.stringify(defaultFilters);
  }, [lvls.length, filters, defaultFilters]);

  const filterKeys = useMemo(() => {
    const toReturn = [];

    if (!filters) return [];

    filters.forEach((group) =>
      group.subGroups.forEach(
        (subGroup) => subGroup.checked && toReturn.push(subGroup.value)
      )
    );

    return toReturn;
  }, [filters]);

  const filteredTech = useMemo(() => {
    let listToReturn = [...list];

    if (useTechLvls && lvls.length) {
      listToReturn = listToReturn.filter((i) => lvls.includes(i.rank));
    }

    if (useSearch && search.length) {
      listToReturn = listToReturn.filter((i) =>
        i.title.toUpperCase().includes(search.toUpperCase())
      );
    }

    if (filters) {
      listToReturn = listToReturn.filter((i) =>
        filterKeys.includes(i.subgroup)
      );
    }

    return listToReturn;
  }, [list, useTechLvls, lvls, useSearch, search, filters, filterKeys]);

  function clearFilters() {
    setFilters(defaultFilters);
    setLvls([]);
  }

  return (
    <Box display="flex" flexDirection="column" w={"100%"} h={"100%"}>
      <MyPageTitle title={title} />

      {!!links?.length && <MyLinks linksData={links} />}

      <MySearchFilter
        useSearch={useSearch}
        search={search}
        setSearch={setSearch}
        isTouched={isTouched}
        filters={filters}
        setFilters={setFilters}
        clearFilters={clearFilters}
        useTechLvls={useTechLvls}
        lvls={lvls}
        setLvls={setLvls}
      />

      <HStack alignItems={"start"} overflow={"hidden"} top={"0"}>
        <MyCardList list={filteredTech} />
        {children}
      </HStack>
    </Box>
  );
}
