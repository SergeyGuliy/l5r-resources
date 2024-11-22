import { Alert } from "@/components/ui/alert";
import { Stack } from "@chakra-ui/react";
import { useAlerts } from "@/providers/AlertProvider";

export function MyAlerts() {
  const { alerts, removeAlert } = useAlerts();

  return (
    <Stack
      gap="2"
      width={"400px"}
      position={"fixed"}
      zIndex={1}
      right={"10px"}
      bottom={"10px"}
    >
      {alerts.map((alert, key) => (
        <Alert
          className={`alert ${
            alert.fading ? "alert-fade-out" : "alert-fade-in"
          }`}
          key={key}
          status={alert.status}
          title={alert.title}
          onClick={() => removeAlert(key)}
        />
      ))}
    </Stack>
  );
}
