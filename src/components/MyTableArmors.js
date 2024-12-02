import { Table } from "@chakra-ui/react";
import { MyHoverCard } from "@/components/MyHoverCard";
import React from "react";
import { MyHtml } from "@/components/MyHtml";

export function MyTableArmors({ headers, items }) {
  if (!headers.length) return;
  if (!items.length) return;

  return (
    <Table.ScrollArea
      borderWidth="1px"
      borderTopRadius="sm"
      borderColor="border.disabled"
    >
      <Table.Root size="sm" stickyHeader showColumnBorder interactive>
        <Table.ColumnGroup>
          <Table.Column width="calc(33% - 50px)" />
          <Table.Column width="calc(33% - 50px)" />
          <Table.Column width="calc(33% - 50px)" />
          <Table.Column width="150px" />
          <Table.Column width="150px" />
        </Table.ColumnGroup>
        <Table.Header>
          <Table.Row bg="bg.subtle">
            {headers.map((i, iIndex) => (
              <Table.ColumnHeader key={iIndex} textAlign="center">
                <MyHoverCard cardData={i} />
              </Table.ColumnHeader>
            ))}
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {items.map((i, iIndex) => (
            <Table.Row key={iIndex}>
              <Table.Cell textAlign="center">
                <MyHoverCard cardData={i.armorCharacteristics_Name} />
              </Table.Cell>
              <Table.Cell textAlign="center">
                <MyHtml content={i.armorCharacteristics_Resistance} />
              </Table.Cell>
              <Table.Cell textAlign="center">
                {i.armorCharacteristics_Properties.map((j, jIndex) => (
                  <div key={jIndex}>
                    <MyHoverCard cardData={j} />
                  </div>
                ))}
              </Table.Cell>
              <Table.Cell textAlign="center">
                {i.weaponsAndArmorCharacteristics_Rare}
              </Table.Cell>
              <Table.Cell textAlign="center">
                {i.weaponsAndArmorCharacteristics_Price}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Table.ScrollArea>
  );
}
