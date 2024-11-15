import { Table } from "@chakra-ui/react";
import MyHoverCard from "@/components/MyHoverCard";
import "@/static/styles/table.css";

export default function MyTableWeapons({ headers, items }) {
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
              <Table.Cell
                textAlign="center"
                dangerouslySetInnerHTML={{
                  __html: i.weaponsCharacteristics_Grip,
                }}
              />
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
