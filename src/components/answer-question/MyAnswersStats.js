import React, { useMemo } from "react";

import { Table } from "@chakra-ui/react";
import MyHoverCard from "@/components/MyHoverCard";

import { _heroStats } from "@/mockData/routeData/other/heroStats/_heroStats";

const localHeroStats = {
  endurance: _heroStats.endurance,
  coldBlooded: _heroStats.coldBlooded,
  concentration: _heroStats.concentration,
  vigilance: _heroStats.vigilance,
};

export function MyAnswersStats({ accumulatedRings }) {
  const accumulatedStats = useMemo(() => {
    return {
      endurance: (accumulatedRings.earth + accumulatedRings.fire) * 2,
      coldBlooded: (accumulatedRings.earth + accumulatedRings.water) * 2,
      concentration: accumulatedRings.fire + accumulatedRings.air,
      vigilance: Math.round(
        (accumulatedRings.air + accumulatedRings.water) / 2
      ),
    };
  }, [
    accumulatedRings.air,
    accumulatedRings.earth,
    accumulatedRings.fire,
    accumulatedRings.water,
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
