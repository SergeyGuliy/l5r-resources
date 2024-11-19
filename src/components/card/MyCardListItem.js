import { useRouter } from "next/router";
import { Badge, Box, Card, HStack, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

import { translations } from "@/mockData/routeData/constants";
import { generateLinkPath } from "@/helpers/generateLinkPath";
import { useSearchAndFilterQuery } from "@/hooks/useSearchAndFilterQuery";

export function MyCardListItem({ data }) {
  const router = useRouter();
  const { getQuerySearch, getQueryFilters } = useSearchAndFilterQuery();

  function getLink() {
    if (["/[group]", "/[group]/[item]"].includes(router.pathname)) {
      const search = getQuerySearch();
      const filters = getQueryFilters();

      const query = {};

      if (search) query.search = search;
      if (filters) query.filters = filters;

      return generateLinkPath([router.query.group, data.key], query);
    }
    return generateLinkPath([router.query.group, data.key]);
  }

  function navigate(e) {
    e.preventDefault();

    router.push(getLink());
  }

  return (
    <Box width={"100%"}>
      <Link href={getLink()} onClick={navigate}>
        <Card.Root p={3} variant={data.isActive ? "subtle" : "elevated"}>
          <Stack
            direction="row"
            justifyContent={"space-between"}
            width={"100%"}
          >
            <Stack gap="0">
              <Text fontWeight="normal" textStyle="md" truncate>
                {data.title}
              </Text>
              <HStack mt="2">
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

                {!!translations[data.subgroup] && (
                  <Badge variant="surface" size="md" colorPalette="teal">
                    {translations[data.subgroup]}
                  </Badge>
                )}
              </HStack>
            </Stack>
          </Stack>
        </Card.Root>
      </Link>
    </Box>
  );
}
