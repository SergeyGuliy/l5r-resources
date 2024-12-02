import { Table } from "@chakra-ui/react";
import { MyHoverCard } from "@/components/MyHoverCard";
import React from "react";
import { MyHtml } from "@/components/MyHtml";

export function MyTableWeapons({ headers, items }) {
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
          <Table.Column width="200px" />
          <Table.Column width="200px" />
          <Table.Column width="200px" />
          <Table.Column width="180px" />
          <Table.Column width="180px" />
          <Table.Column width="180px" />
          <Table.Column />
          <Table.Column />
          <Table.Column />
          <Table.Column width="120px" />
          <Table.Column width="120px" />
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
                <MyHoverCard cardData={i.weaponsCharacteristics_Category} />
              </Table.Cell>
              <Table.Cell textAlign="center">
                <MyHoverCard cardData={i.weaponsCharacteristics_Name} />
              </Table.Cell>
              <Table.Cell
                textAlign="center"
                className="weaponsCharacteristics_Skill"
              >
                <MyHoverCard cardData={i.weaponsCharacteristics_Skill} />
              </Table.Cell>
              <Table.Cell textAlign="center">
                {i.weaponsCharacteristics_Range}
              </Table.Cell>
              <Table.Cell textAlign="center">
                {i.weaponsCharacteristics_BaseDamage}
              </Table.Cell>
              <Table.Cell textAlign="center">
                {i.weaponsCharacteristics_Deadliness}
              </Table.Cell>
              <Table.Cell textAlign="center">
                <MyHtml content={i.weaponsCharacteristics_Grip} />
              </Table.Cell>
              <Table.Cell textAlign="center">
                {i.weaponsCharacteristics_Properties.map((j, jIndex) => (
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
