"use client";
import { renderToString } from "react-dom/server";

import success from "@/static/images/icons/success.svg";
import explosive from "@/static/images/icons/explosive.svg";
import opportunity from "@/static/images/icons/opportunity.svg";
import strife from "@/static/images/icons/strife.svg";

import air from "@/static/images/icons/air.svg";
import earth from "@/static/images/icons/earth.svg";
import fire from "@/static/images/icons/fire.svg";
import water from "@/static/images/icons/water.svg";
import voidR from "@/static/images/icons/void.svg";

function MyIcon({ name }) {
  const link = {
    success: success,
    explosive: explosive,
    opportunity: opportunity,
    strife: strife,

    air: air,
    earth: earth,
    fire: fire,
    water: water,
    void: voidR,
  }[name].src;

  const title = {
    success: "Успех",
    explosive: "Взрывной успех",
    opportunity: "Возможность",
    strife: "Смятение",

    air: "Воздух",
    earth: "Земля",
    fire: "Огонь",
    water: "Вода",
    void: "Пустота",
  }[name];

  return (
    <img
      width={18}
      height={18}
      style={{ display: "inline" }}
      title={title}
      src={link}
      alt={title}
    />
  );
}

export const iconSuccess = renderToString(<MyIcon name="success" />);
export const iconExplosive = renderToString(<MyIcon name="explosive" />);
export const iconOpportunity = renderToString(<MyIcon name="opportunity" />);
export const iconStrife = renderToString(<MyIcon name="strife" />);

export const iconAir = renderToString(<MyIcon name="air" />);
export const iconEarth = renderToString(<MyIcon name="earth" />);
export const iconFire = renderToString(<MyIcon name="fire" />);
export const iconWater = renderToString(<MyIcon name="water" />);
export const iconVoid = renderToString(<MyIcon name="void" />);
