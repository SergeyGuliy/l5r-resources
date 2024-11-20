import { Text } from "@chakra-ui/react";

export function MyPageTitle({ title }) {
  return (
    <Text textStyle="xl" mb={2} top={"0"}>
      {title}
    </Text>
  );
}
