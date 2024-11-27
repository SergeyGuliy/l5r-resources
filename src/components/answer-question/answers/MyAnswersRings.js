import { Box, Table } from "@chakra-ui/react";
import { _rings } from "@/mockData/routeData/other/rings/_rings";

import React, { useMemo } from "react";
import { MyHoverCard } from "@/components/MyHoverCard";
import { MyQuestionRing } from "@/components/answer-question/questions/MyQuestionRing";

import IconEarth from "@/static/images/icons/earth.svg";
import IconFire from "@/static/images/icons/fire.svg";
import IconWater from "@/static/images/icons/water.svg";
import IconAir from "@/static/images/icons/air.svg";
import IconVoid from "@/static/images/icons/void.svg";

console.log(IconAir);

export function MyAnswersRings({ accumulatedRings, swapRings, setSwapRings }) {
  const moreThat4Ring = useMemo(() => {
    const moteThat4Key = Object.entries(accumulatedRings).find((i) => i[1] > 3);

    return moteThat4Key && moteThat4Key[0];
  }, [accumulatedRings]);

  return (
    <>
      <Box position="relative" mx="auto" w="300px" h="300px">
        <Box></Box>
        <MyHoverCard
          cardData={_rings.earth}
          showText={false}
          hoverTarget={
            <img src={IconEarth.src} alt="" height="100px" width="100px" />
          }
        />
        <MyHoverCard
          cardData={_rings.fire}
          showText={false}
          hoverTarget={
            <img src={IconFire.src} alt="" height="100px" width="100px" />
          }
        />
        <MyHoverCard
          cardData={_rings.water}
          showText={false}
          hoverTarget={
            <img src={IconWater.src} alt="" height="100px" width="100px" />
          }
        />
        <MyHoverCard
          cardData={_rings.air}
          showText={false}
          hoverTarget={
            <img src={IconAir.src} alt="" height="100px" width="100px" />
          }
        />
        <MyHoverCard
          cardData={_rings.void}
          showText={false}
          hoverTarget={
            <img src={IconVoid.src} alt="" height="100px" width="100px" />
          }
        />
      </Box>

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
