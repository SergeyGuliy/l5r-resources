import React, { useMemo } from "react";

import { Table } from "@chakra-ui/react";
import MyHoverCard from "@/components/MyHoverCard";

import { _heroStats } from "@/mockData/routeData/other/heroStats/_heroStats";

const localHeroStats = {
  voidPoints: _heroStats.voidPoints,
  honor: _heroStats.honor,
  glory: _heroStats.glory,
  status: _heroStats.status,
};

export function MyAnswersOtherStats({
  accumulatedRings,
  accumulatedStatus,
  accumulatedGlory,
  accumulatedHonor,
}) {
  const accumulatedStats = useMemo(() => {
    return {
      voidPoints: accumulatedRings.void,
      honor: accumulatedHonor,
      glory: accumulatedGlory,
      status: accumulatedStatus,
    };
  }, [
    accumulatedGlory,
    accumulatedHonor,
    accumulatedRings.void,
    accumulatedStatus,
  ]);

  return (
    <Table.Root size="sm">
      <Table.Header>
        <Table.Row>
          {Object.values(localHeroStats).map((i) => (
            <Table.ColumnHeader key={i.key} textAlign="center" w={"25%"}>
              <MyHoverCard cardData={i} />
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
