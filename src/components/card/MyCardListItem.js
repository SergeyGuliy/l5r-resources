import { useRouter } from "next/router";
import { Badge, Box, Card, HStack, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

import { translations } from "@/mockData/routeData/constants";
import { generateLinkPath } from "@/helpers/generateLinkPath";
import { useSearchAndFilterQuery } from "@/hooks/useSearchAndFilterQuery";

export function MyCardListItem({ data }) {
  const router = useRouter();
  const { getQuerySearch, getQueryFilters, getQueryLvls } =
    useSearchAndFilterQuery();

  function getLink() {
    if (["/[group]", "/[group]/[item]"].includes(router.pathname)) {
      const search = getQuerySearch();
      const filters = getQueryFilters();
      const lvls = getQueryLvls();

      const query = {};

      if (search) query.search = search;
      if (filters) query.filters = filters;
      if (lvls) query.lvls = lvls;

      return generateLinkPath([router.query.group, data.key], query);
    }
    return generateLinkPath([router.query.group, data.key]);
  }

  function navigate(e) {
    e.preventDefault();

    router.push(getLink());
  }

  return (
    <Box w={"100%"} h={"100%"}>
      <Link
        href={getLink()}
        onClick={navigate}
        style={{ display: "block", height: "100%" }}
      >
        <Card.Root
          p={3}
          h={"100%"}
          variant={data.isActive ? "subtle" : "elevated"}
          background={data.isActive ? "#122952" : ""}
        >
          <Stack
            direction="row"
            justifyContent={"space-between"}
            width={"100%"}
          >
            <Stack gap="0">
              <Text fontWeight="normal" textStyle="md">
                {data.title}
              </Text>
              <Stack direction="row" mt="2" wrap={"wrap"} maxW={"100%"}>
                {typeof data.rank === "number" && data.rank > 0 && (
                  <Badge variant="surface" size="md" colorPalette="blue">
                    Ранг: {data.rank}
                  </Badge>
                )}

                {!!translations[data.group] && (
                  <Badge variant="surface" size="md" colorPalette="green">
                    {translations[data.group]}
                  </Badge>
                )}

                {typeof data.subgroup === "string" &&
                  !!translations[data.subgroup] && (
                    <Badge variant="surface" size="md" colorPalette="teal">
                      {translations[data.subgroup]}
                    </Badge>
                  )}
                {typeof data.subgroup === "object" &&
                  !!data.subgroup.length &&
                  data.subgroup.map((i, key) => (
                    <Badge
                      key={key}
                      variant="surface"
                      size="md"
                      colorPalette="teal"
                    >
                      {translations[i]}
                    </Badge>
                  ))}
              </Stack>
            </Stack>
          </Stack>
        </Card.Root>
      </Link>
    </Box>
  );
}
