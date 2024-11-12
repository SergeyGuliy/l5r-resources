import MySearchFilter from "@/components/search-filter/MySearchFilter";
import MyCardList from "@/components/card/MyCardList";
import { Box, HStack, Text } from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import { translations } from "@/mockData/constants";
import MyLinks from "@/components/link/MyLinks";

function parseFilters(filters) {
  return filters.map((i) => ({
    techGroup: i.techGroup,
    label: translations[i.techGroup],
    subGroups: i.subGroups?.length
      ? i.subGroups.map((j) => ({
          label: translations[j],
          checked: true,
          value: j,
        }))
      : [],
  }));
}

export default function MyPage({
  title,
  tech,
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
    console.warn(filterGroups);
    setDefaultFilters(parseFilters(filterGroups));
    setFilters(parseFilters(filterGroups));
  }, [filterGroups]);

  const isTouched = useMemo(() => {
    if (lvls.length) return true;
    return JSON.stringify(filters) !== JSON.stringify(defaultFilters);
  }, [lvls.length, filters, defaultFilters]);

  const filterKeys = useMemo(() => {
    const toReturn = [];

    filters.forEach((group) =>
      group.subGroups.forEach(
        (subGroup) => subGroup.checked && toReturn.push(subGroup.value)
      )
    );

    return toReturn;
  }, [filters]);

  const filteredTech = useMemo(() => {
    let techToReturn = [...tech];

    if (lvls.length) {
      techToReturn = techToReturn.filter((i) => lvls.includes(i.rank));
    }

    if (search.length) {
      techToReturn = techToReturn.filter((i) =>
        i.name.toUpperCase().includes(search.toUpperCase())
      );
    }

    // if (filterKeys.length) {
    techToReturn = techToReturn.filter((i) => filterKeys.includes(i.subgroup));
    // }

    return techToReturn;
  }, [tech, lvls, search, filterKeys]);

  function clearFilters() {
    setFilters(defaultFilters);
    setLvls([]);
  }

  return (
    <Box display="flex" flexDirection="column" w={"100%"} h={"100%"}>
      <Text textStyle="xl" mb={5} top={"0"}>
        {title}
      </Text>

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
        <MyCardList tech={filteredTech} />
        {children}
      </HStack>
    </Box>
  );
}
