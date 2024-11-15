import { MyPageTitle } from "@/components/MyPageTitle";
import { Box } from "@chakra-ui/react";
import MyTable from "@/components/MyTable";

export function MyTablePage({ title, headers, items }) {
  return (
    <Box display="flex" flexDirection="column" w={"100%"} h={"100%"}>
      <MyPageTitle title={title} />

      <MyTable headers={headers} items={items} />
    </Box>
  );
}
