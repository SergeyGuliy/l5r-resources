import { Grid } from "@chakra-ui/react";
import { MyLinksItem } from "@/components/link/MyLinksItem";

export function MyLinks({ linksData }) {
  return (
    <Grid templateColumns="repeat(24, 1fr)" gap={"5px"} mb={5}>
      {linksData.map((linkData, linkIndex) => (
        <MyLinksItem key={linkIndex} linkData={linkData} />
      ))}
    </Grid>
  );
}
