// import { Alert } from "@/components/ui/alert";
import { Stack } from "@chakra-ui/react";

export function MyAlerts() {
  return (
    <Stack
      gap="2"
      width={"400px"}
      position={"fixed"}
      zIndex={1}
      right={"10px"}
      bottom={"10px"}
    >
      {/*<Alert*/}
      {/*  status="error"*/}
      {/*  title="There was an error processing your request"*/}
      {/*/>*/}
      {/*<Alert*/}
      {/*  status="info"*/}
      {/*  title="Chakra is going live on August 30th. Get ready!"*/}
      {/*/>*/}
      {/*<Alert*/}
      {/*  status="warning"*/}
      {/*  title="Seems your account is about expire, upgrade now"*/}
      {/*/>*/}
      {/*<Alert status="success" title="Data uploaded to the server. Fire on!" />*/}
    </Stack>
  );
}
