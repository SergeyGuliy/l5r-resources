import React, { useMemo } from "react";

import { Table } from "@chakra-ui/react";
import { MyHoverCard } from "@/components/MyHoverCard";

import { _heroStats } from "@/mockData/routeData/other/heroStats/_heroStats";

const localHeroStats = {
  endurance: _heroStats.endurance,
  coldBlooded: _heroStats.coldBlooded,
  concentration: _heroStats.concentration,
  vigilance: _heroStats.vigilance,
  voidPoints: _heroStats.voidPoints,
};

export function MyAnswersStats({ accumulatedRings }) {
  const accumulatedStats = useMemo(
    () => ({
      endurance: (accumulatedRings.earth + accumulatedRings.fire) * 2,
      coldBlooded: (accumulatedRings.earth + accumulatedRings.water) * 2,
      concentration: accumulatedRings.fire + accumulatedRings.air,
      vigilance: Math.round(
        (accumulatedRings.air + accumulatedRings.water) / 2
      ),
      voidPoints: accumulatedRings.void,
    }),
    [
      accumulatedRings.air,
      accumulatedRings.earth,
      accumulatedRings.fire,
      accumulatedRings.water,
      accumulatedRings.void,
    ]
  );

  return (
    <>
      <Table.Root size="sm" showColumnBorder>
        <Table.ColumnGroup>
          <Table.Column width="20%" />
          <Table.Column width="20%" />
          <Table.Column width="20%" />
          <Table.Column width="20%" />
        </Table.ColumnGroup>
        <Table.Body>
          <Table.Row>
            <Table.Cell textAlign="center">
              <MyHoverCard cardData={localHeroStats.endurance} />
            </Table.Cell>
            <Table.Cell textAlign="center">
              {accumulatedStats.endurance}
            </Table.Cell>
            <Table.Cell textAlign="center">
              <MyHoverCard cardData={localHeroStats.coldBlooded} />
            </Table.Cell>
            <Table.Cell textAlign="center">
              {accumulatedStats.coldBlooded}
            </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell textAlign="center">
              <MyHoverCard cardData={localHeroStats.concentration} />
            </Table.Cell>
            <Table.Cell textAlign="center">
              {accumulatedStats.concentration}
            </Table.Cell>
            <Table.Cell textAlign="center">
              <MyHoverCard cardData={localHeroStats.vigilance} />
            </Table.Cell>
            <Table.Cell textAlign="center">
              {accumulatedStats.vigilance}
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>

      <Table.Root size="sm" showColumnBorder>
        <Table.ColumnGroup>
          <Table.Column width="40%" />
          <Table.Column width="40%" />
        </Table.ColumnGroup>
        <Table.Body>
          <Table.Row>
            <Table.Cell textAlign="center">
              <MyHoverCard cardData={localHeroStats.voidPoints} />
            </Table.Cell>
            <Table.Cell textAlign="center">
              {accumulatedStats.voidPoints}
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </>
  );
}
