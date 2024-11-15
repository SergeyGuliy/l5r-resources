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
          {items.map((item, index) => (
            <Table.Row key={index}>
              <Table.Cell>{item.name}</Table.Cell>
              <Table.Cell>{item.category}</Table.Cell>
              <Table.Cell textAlign="end">{item.price}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Table.ScrollArea>
  );
}
