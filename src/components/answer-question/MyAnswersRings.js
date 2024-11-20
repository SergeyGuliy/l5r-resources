import { Table } from "@chakra-ui/react";
import { _rings } from "@/mockData/routeData/other/rings/_rings";

import React from "react";
import MyHoverCard from "@/components/MyHoverCard";

export function MyAnswersRings({ accumulatedRings }) {
  return (
    <Table.Root size="sm">
      <Table.Header>
        <Table.Row>
          {Object.values(_rings).map((i) => (
            <Table.ColumnHeader key={i.key} textAlign="center" w={"20%"}>
              <MyHoverCard cardData={i} />
            </Table.ColumnHeader>
          ))}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          {Object.values(accumulatedRings).map((val, index) => (
            <Table.Cell key={index} textAlign="center">
              {val}
            </Table.Cell>
          ))}
        </Table.Row>
      </Table.Body>
    </Table.Root>
  );
}
