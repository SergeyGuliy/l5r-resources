import { Table } from "@chakra-ui/react";
import { MyHoverCard } from "@/components/MyHoverCard";

export function MyTableArmors({ headers, items }) {
  if (!headers.length) return;
  if (!items.length) return;

  return (
    <Table.ScrollArea showColumnBorder borderWidth="1px" rounded="md">
      <Table.Root size="sm" stickyHeader>
        <Table.Header>
          <Table.Row bg="bg.subtle">
            {headers.map((i, iIndex) => (
              <Table.ColumnHeader
                key={iIndex}
                textAlign="center"
                maxW={i.width}
                minW={i.width}
              >
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
              <Table.Cell
                textAlign="center"
                dangerouslySetInnerHTML={{
                  __html: i.armorCharacteristics_Resistance,
                }}
              />
              <Table.Cell textAlign="center">
                {i.armorCharacteristics_Properties.map((j, jIndex) => (
                  <span key={jIndex}>
                    <MyHoverCard cardData={j} />
                    &nbsp;
                  </span>
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
