import TerminalsMap from "./terminals";
import Systemic from "./systemic.mdx";
import Terminals from "./terminals.mdx";
import * as Scrollytelling from "../scrollytelling-client";
import Marquee from "../marquee/marquee";

import Image from "next/image";
import imgTanker from "./tanker.webp";
import imgFacility1 from "./facility1.webp";
import imgFacility2 from "./facility2.webp";
import imgInfra from "./infrastructure.webp";

export default function Exporting() {
  return (
    <>
      <Scrollytelling.Root
        key="distribution"
        start="bottom 10%"
        debug={{ label: "Distribution Marquee" }}
      >
        <Marquee>exporting</Marquee>
      </Scrollytelling.Root>
      <div className="intro container mx-auto flex flex-col gap-10 py-24 text-3xl leading-10 tracking-tight">
        <Systemic />
      </div>
      <TerminalsMap />
      <div className="intro container mx-auto flex flex-col gap-10 py-24 text-3xl leading-10 tracking-tight">
        <Terminals />
      </div>
      <div className="grid grid-cols-2 gap-8 px-8">
        <Image src={imgFacility1} alt="facility 1" placeholder="blur" />
        <Image src={imgFacility2} alt="facility 2" placeholder="blur" />
        <Image src={imgInfra} alt="Infrastructure" placeholder="blur" />
        <Image src={imgTanker} alt="tanker" placeholder="blur" />
      </div>

      <p className="col-span-2 mt-8 text-center font-mono uppercase opacity-75">
        Photographs by Jon Shapley / Houston Chronicle in Cameron, LA
      </p>
    </>
  );
}
