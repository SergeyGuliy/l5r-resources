import { useEffect, useMemo, useState } from "react";
import { Box, HStack } from "@chakra-ui/react";

import { MySearchFilter } from "@/components/search-filter/MySearchFilter";
import { MyCardList } from "@/components/card/MyCardList";
import { MyLinks } from "@/components/link/MyLinks";
import { MyPageTitle } from "@/components/MyPageTitle";

import { parseFilters } from "@/helpers/parseFilters";
import { useSearchAndFilterQuery } from "@/hooks/useSearchAndFilterQuery";

export function MyGroupPage({
  title,
  list,
  filterSettings,
  useTechLvls,
  useSearch,
  links,
  children,
}) {
  const {
    getQuerySearch,
    getQueryFilters,
    getQueryLvls,
    setQuerySearch,
    setQueryFilters,
    setQueryLvls,
  } = useSearchAndFilterQuery();

  const [defaultFilters, setDefaultFilters] = useState(
    parseFilters(filterSettings)
  );

  const [search, setSearch] = useState(getQuerySearch());
  const [filters, setFilters] = useState(getFilterFromQueryOrParsed());
  const [lvls, setLvls] = useState(getQueryLvls());

  function getFilterFromQueryOrParsed() {
    if (!filterSettings) return false;

    const parsedFilterSettings = parseFilters(filterSettings);
    const queryFilters = getQueryFilters();

    return parsedFilterSettings.map((pFilter) => {
      if (!queryFilters) return pFilter;

      const qFilter = queryFilters.find((i) => pFilter.group === i.group);

      return {
        ...pFilter,
        subGroups: pFilter.subGroups.map((i) => {
          const value = qFilter.subGroups?.find((j) => i.value === j.value);
          return {
            ...i,
            checked: value ? value.checked : i.value,
          };
        }),
      };
    });
  }

  useEffect(() => {
    setDefaultFilters(parseFilters(filterSettings));
    setFilters(getFilterFromQueryOrParsed());
  }, [filterSettings]);

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
      listToReturn = listToReturn.filter((i) =>
        i.rank > 0 ? lvls.includes(i.rank) : true
      );
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
    setQueryFilters(defaultFilters);
    setQueryLvls([]);
    setFilters(defaultFilters);
    setLvls([]);
  }

  function wrappedSetSearch(value) {
    setSearch(value);
    setQuerySearch(value);
  }

  function wrappedSetFilters(callback) {
    const value = callback(filters);
    setQueryFilters(value);
    setFilters(value);
  }

  function wrappedSetLvls(value) {
    setLvls(value);
    setQueryLvls(value);
  }

  return (
    <Box display="flex" flexDirection="column" w={"100%"} h={"100%"}>
      <MyPageTitle title={title} />

      {!!links?.length && <MyLinks linksData={links} />}

      <MySearchFilter
        useSearch={useSearch}
        search={search}
        wrappedSetSearch={wrappedSetSearch}
        isTouched={isTouched}
        filters={filters}
        wrappedSetFilters={wrappedSetFilters}
        clearFilters={clearFilters}
        useTechLvls={useTechLvls}
        lvls={lvls}
        wrappedSetLvls={wrappedSetLvls}
      />

      <HStack alignItems={"start"} overflow={"hidden"} top={"0"}>
        <MyCardList list={filteredTech} />
        {children}
      </HStack>
    </Box>
  );
}
