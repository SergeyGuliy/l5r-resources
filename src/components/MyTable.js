import { Box, Table } from "@chakra-ui/react";
import MyHoverCard from "@/components/MyHoverCard";

export default function MyTable({ headers, items }) {
  console.log(headers);
  if (!headers.length) return;
  if (!items.length) return;

  return (
    <Table.ScrollArea
      showColumnBorder
      borderWidth="1px"
      rounded="md"
      height="500px"
    >
      <Table.Root size="sm" stickyHeader>
        <Table.Header>
          <Table.Row bg="bg.subtle">
            {headers.map((i, index) => (
              <Table.ColumnHeader key={index} textAlign="center">
                <MyHoverCard cardData={i} />
              </Table.ColumnHeader>
            ))}
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {items.map((i, index) => (
            <Table.Row key={index}>
              <Table.Cell textAlign="center">
                <MyHoverCard
                  cardData={i.weaponsAndArmorCharacteristics_Category}
                />
              </Table.Cell>
              <Table.Cell textAlign="center">
                <MyHoverCard cardData={i.weaponsAndArmorCharacteristics_Name} />
              </Table.Cell>
              <Table.Cell textAlign="center">
                <MyHoverCard
                  cardData={i.weaponsAndArmorCharacteristics_Skill}
                />
              </Table.Cell>
              <Table.Cell textAlign="center">
                {i.weaponsAndArmorCharacteristics_BaseDamage}
              </Table.Cell>
              <Table.Cell textAlign="center">
                {i.weaponsAndArmorCharacteristics_BaseDamage}
              </Table.Cell>
              <Table.Cell textAlign="center">
                {i.weaponsAndArmorCharacteristics_Deadliness}
              </Table.Cell>
              <Table.Cell
                textAlign="center"
                dangerouslySetInnerHTML={{
                  __html: i.weaponsAndArmorCharacteristics_Grip,
                }}
              />
              <Table.Cell textAlign="center">
                {i.weaponsAndArmorCharacteristics_Properties.map((j) => (
                  <>
                    <MyHoverCard cardData={j} />
                    <br />
                  </>
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
