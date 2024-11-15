import { MyPageTitle } from "@/components/MyPageTitle";
import { Box } from "@chakra-ui/react";
import MyTableArmors from "@/components/MyTableArmors";

export function MyTableArmorsPage({ title, headers, items }) {
  return (
    <Box display="flex" flexDirection="column" w={"100%"} h={"100%"}>
      <MyPageTitle title={title} />

      <MyTableArmors headers={headers} items={items} />
    </Box>
  );
}
