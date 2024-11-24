import { Table } from "@chakra-ui/react";
import { _rings } from "@/mockData/routeData/other/rings/_rings";

import React, { useMemo } from "react";
import { MyHoverCard } from "@/components/MyHoverCard";
import { MyQuestionRing } from "@/components/answer-question/questions/MyQuestionRing";

export function MyAnswersRings({ accumulatedRings, swapRings, setSwapRings }) {
  const moreThat4Ring = useMemo(() => {
    const moteThat4Key = Object.entries(accumulatedRings).find((i) => i[1] > 3);

    return moteThat4Key && moteThat4Key[0];
  }, [accumulatedRings]);

  return (
    <>
      <Table.Root size="sm" showColumnBorder>
        <Table.ColumnGroup>
          <Table.Column width="20%" />
          <Table.Column width="20%" />
          <Table.Column width="20%" />
          <Table.Column width="20%" />
          <Table.Column width="20%" />
        </Table.ColumnGroup>
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

      {(moreThat4Ring || swapRings.toBeDecreased) && (
        <>
          <span style={{ fontWeight: 700 }}>
            {`Кольцо ${_rings[moreThat4Ring]?.title || swapRings.toBeDecreased} выше 4 ранга. Замените на другое.`}
          </span>
          <MyQuestionRing
            value={swapRings.toBeIncreased}
            onCustomUpdateValue={(toBeIncreased) =>
              setSwapRings({
                toBeDecreased: moreThat4Ring || swapRings.toBeDecreased,
                toBeIncreased,
              })
            }
            accumulatedRings={accumulatedRings}
          />
        </>
      )}
    </>
  );
}
