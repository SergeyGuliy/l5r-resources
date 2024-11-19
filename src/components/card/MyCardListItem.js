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
        <Card.Root p={3}>
          <Stack
            direction="row"
            justifyContent={"space-between"}
            width={"100%"}
          >
            <Stack gap="0">
              <Text fontWeight="semibold" textStyle="sm">
                {data.title}
              </Text>
              <HStack mt="2">
                {!!translations[data.group] && (
                  <Badge variant="surface" size="md">
                    {translations[data.group]}
                  </Badge>
                )}

                {!!translations[data.subgroup] && (
                  <Badge variant="surface" size="md">
                    {translations[data.subgroup]}
                  </Badge>
                )}
              </HStack>
            </Stack>
            {typeof data.rank === "number" && data.rank > 0 && (
              <Stack gap="0">
                <Text color="fg.muted" textStyle="sm">
                  Ранг: {data.rank}
                </Text>
              </Stack>
            )}
          </Stack>
        </Card.Root>
      </Link>
    </Box>
  );
}
