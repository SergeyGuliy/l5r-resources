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
      <Box className={"star-elements"}>
        <Box className={"star-element star-element__earth"}>
          <MyHoverCard
            cardData={_rings.earth}
            showText={false}
            hoverTarget={
              <img src={IconEarth.src} alt="" height="100%" width="100%" />
            }
          />
          <Box className={"star-element__value"}>{accumulatedRings.earth}</Box>
          <Box className={"star-element__text"}>Земля</Box>
        </Box>
        <Box className={"star-element star-element__air"}>
          <MyHoverCard
            cardData={_rings.air}
            showText={false}
            hoverTarget={
              <img src={IconAir.src} alt="" height="100%" width="100%" />
            }
          />
          <Box className={"star-element__value"}>{accumulatedRings.air}</Box>
          <Box className={"star-element__text"}>Воздух</Box>
        </Box>
        <Box className={"star-element star-element__water"}>
          <MyHoverCard
            cardData={_rings.water}
            showText={false}
            hoverTarget={
              <img src={IconWater.src} alt="" height="100%" width="100%" />
            }
          />
          <Box className={"star-element__value"}>{accumulatedRings.water}</Box>
          <Box className={"star-element__text"}>Вода</Box>
        </Box>
        <Box className={"star-element star-element__fire"}>
          <MyHoverCard
            cardData={_rings.fire}
            showText={false}
            hoverTarget={
              <img src={IconFire.src} alt="" height="100%" width="100%" />
            }
          />
          <Box className={"star-element__value"}>{accumulatedRings.fire}</Box>
          <Box className={"star-element__text"}>Огонь</Box>
        </Box>
        <Box className={"star-element star-element__void"}>
          <MyHoverCard
            cardData={_rings.void}
            showText={false}
            hoverTarget={
              <img src={IconVoid.src} alt="" height="100%" width="100%" />
            }
          />
          <Box className={"star-element__value"}>{accumulatedRings.void}</Box>
          <Box className={"star-element__text"}>Пустота</Box>
        </Box>
      </Box>

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
