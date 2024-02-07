"use client";
import Map from "../intro/map";
import Intro from "./intro/intro.mdx";
import Marquee from "../marquee/marquee";
import * as Scrollytelling from "../scrollytelling-client";
import Extraction from "../extraction/extraction";
import Exporting from "../distribution/exporting";
// import { useEffect } from "react";
import Conclusion from "../conclusion/conclusion";
import Consumption from "../consumption/consumption";

export default function Pres() {
  return (
    <>
      <style>{`
        #extraction .intro,
        .intro p, .bridge p { display: none; }
        .bridge [role="img"] { zoom: 1.5; margin-inline: auto; }
        .marquee { height: 50vh; zoom: 2; }
        .bridge { height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; }
        img[alt="Map of gas import terminals"] {
          max-width: 80%;
        }
        #conclusion .intro p { display: block; opacity: 0; }
      `}</style>
      <Map />
      <Extraction />
      <Exporting />
      <Consumption />
      <Conclusion />
    </>
  );
}
