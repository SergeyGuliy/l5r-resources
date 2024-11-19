import { MyCardListItem } from "@/components/card/MyCardListItem";
import { Grid, GridItem } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useMemo } from "react";

export default function MyCardList({ list }) {
  const router = useRouter();

  const dynamicWidthGrid = useMemo(() => {
    if (router.query.item)
      return {
        base: "100%",
        sm: "100%",
        md: "calc(50% - 8px)",
        lg: "calc(50% - 8px)",
        xl: "calc(50% - 8px)",
        "2xl": "calc(34% - 8px)",
      };
    return {
      base: "100%",
      sm: "100%",
      md: "100%",
      lg: "100%",
      xl: "100%",
      "2xl": "100%",
    };
  }, [router.query.item]);

  const dynamicWidthColumnCount = useMemo(() => {
    if (router.query.item)
      return {
        base: "12",
        sm: "12",
        md: "12",
        lg: "12",
        xl: "12",
        "2xl": "12",
      };
    return {
      base: "12",
      sm: "12",
      md: "12",
      lg: "6",
      xl: "6",
      "2xl": "4",
    };
  }, [router.query.item]);

  return (
    <Grid
      maxHeight="100%"
      overflow={"auto"}
      w={dynamicWidthGrid}
      templateColumns="repeat(12, 1fr)"
      gap={"8px"}
    >
      {list.map((data, index) => (
        <GridItem key={index} colSpan={dynamicWidthColumnCount}>
          <MyCardListItem data={data} />
        </GridItem>
      ))}
    </Grid>
  );
}
