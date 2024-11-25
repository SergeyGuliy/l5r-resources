import React, { useMemo } from "react";

import { Table } from "@chakra-ui/react";
import { MyHoverCard } from "@/components/MyHoverCard";

import { _heroStats } from "@/mockData/routeData/other/heroStats/_heroStats";

const localHeroStats = {
  honor: _heroStats.honor,
  glory: _heroStats.glory,
  status: _heroStats.status,
  money: "Стартовые деньги",
};

export function MyAnswersOtherStats({
  accumulatedStatus,
  accumulatedGlory,
  accumulatedHonor,
  selectedFamily,
}) {
  const accumulatedStats = useMemo(() => {
    return {
      honor: accumulatedHonor,
      glory: accumulatedGlory,
      status: accumulatedStatus,
      money: selectedFamily?.startMoney || "",
    };
  }, [
    accumulatedGlory,
    accumulatedHonor,
    accumulatedStatus,
    selectedFamily?.startMoney,
  ]);

  return (
    <Table.Root size="sm" showColumnBorder>
      <Table.ColumnGroup>
        <Table.Column width="25%" />
        <Table.Column width="25%" />
        <Table.Column width="25%" />
        <Table.Column width="25%" />
      </Table.ColumnGroup>
      <Table.Header>
        <Table.Row>
          {Object.values(localHeroStats).map((i, index) => (
            <Table.ColumnHeader key={index} textAlign="center">
              {typeof i === "string" ? i : <MyHoverCard cardData={i} />}
            </Table.ColumnHeader>
          ))}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          {Object.keys(localHeroStats).map((val, index) => (
            <Table.Cell key={index} textAlign="center">
              {accumulatedStats[val]}
            </Table.Cell>
          ))}
        </Table.Row>
      </Table.Body>
    </Table.Root>
  );
}
