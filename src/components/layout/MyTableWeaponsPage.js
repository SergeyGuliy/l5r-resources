import { useMemo, useState } from "react";
import { Box } from "@chakra-ui/react";

import { MyPageTitle } from "@/components/MyPageTitle";
import { MyTableWeapons } from "@/components/MyTableWeapons";
import { MySearchFilter } from "@/components/search-filter/MySearchFilter";

import { weaponGroups } from "@/mockData/routeData/other/weaponGroups";
import { hiddenSpecial, hiddenUnarmed } from "@/mockData/routeData/constants";

export function MyTableWeaponsPage({ title, headers, items }) {
  function convert(items) {
    return items.map((i) => ({
      label: i.title,
      checked: true,
      value: i.key,
    }));
  }

  const defaultFilters = [
    {
      group: "melee",
      label: "Рукопашное оружие",
      subGroups: convert([
        weaponGroups.Swords,
        weaponGroups.Axes,
        weaponGroups.BluntWeapons,
        weaponGroups.HandWeapons,
        weaponGroups.PoleWeapons,
      ]),
    },
    {
      group: "range",
      label: "Дальнобойное оружие",
      subGroups: convert([weaponGroups.Bows, weaponGroups.Crossbows]),
    },
    {
      group: "special",
      label: "Особое оружие",
      subGroups: [{ checked: true, value: hiddenSpecial }],
    },
    {
      group: "unarmed",
      label: "Безоружные оружие",
      subGroups: [{ checked: true, value: hiddenUnarmed }],
    },
  ];

  const [search, setSearch] = useState();
  const [filters, setFilters] = useState(defaultFilters);

  const isTouched = useMemo(
    () => JSON.stringify(filters) !== JSON.stringify(defaultFilters),
    [filters]
  );

  const filterKeys = useMemo(() => {
    const toReturn = [];

    if (!filters) return toReturn;

    filters.forEach((group) =>
      group.subGroups.forEach(
        (subGroup) => subGroup.checked && toReturn.push(subGroup.value)
      )
    );

    return toReturn;
  }, [filters]);

  const filteredItems = useMemo(() => {
    let listToReturn = [...items];

    if (search?.length)
      listToReturn = listToReturn.filter((i) =>
        i.title.toUpperCase().includes(search.toUpperCase())
      );

    if (filters)
      listToReturn = listToReturn.filter((i) =>
        filterKeys.includes(i.weaponsCharacteristics_Category.key)
      );

    return listToReturn;
  }, [items, search, filters, filterKeys]);

  return (
    <Box display="flex" flexDirection="column" w={"100%"} h={"100%"}>
      <MyPageTitle title={title} />

      <MySearchFilter
        useSearch={true}
        search={search}
        wrappedSetSearch={(value) => setSearch(value)}
        isTouched={isTouched}
        filters={filters}
        wrappedSetFilters={(callback) => setFilters(callback(filters))}
        clearFilters={() => setFilters(defaultFilters)}
        useTechLvls={false}
      />

      <MyTableWeapons headers={headers} items={filteredItems} />
    </Box>
  );
}
