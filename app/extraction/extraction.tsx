import Marquee from "../marquee/marquee";
import Image from "next/image";
import * as Scrollytelling from "../scrollytelling-client";

import Copy from "./extraction.mdx";
import imgWellpad from "./wellpad.jpg";
import imgPipeline from "./pipeline.jpg";
import imgCompressor from "./compressor.jpg";
import imgWater from "./water.jpg";
import imgWaste from "./waste.jpg";
import imgTubing from "./tubing.jpg";

export default function Extraction() {
  return (
    <Scrollytelling.Root key="extraction" debug={{ label: "Extraction" }}>
      <section id="extraction" className="max-w-screen relative">
        <div className="relative -mb-[200px]">
          <Marquee>extraction</Marquee>
        </div>
        <Scrollytelling.Parallax
          tween={{
            start: 0,
            end: 50,
            movementY: { value: -200, unit: "px" },
          }}
        >
          <Image
            src={imgWellpad}
            alt="Wellpad"
            placeholder="blur"
            // className="-z-1 absolute inset-0 w-full object-cover"
            className="w-full object-cover"
            id="wellpad"
          />
        </Scrollytelling.Parallax>
        <div className="container relative z-10 mx-auto mb-[25vh] mt-12 grid grid-cols-2 gap-x-12 gap-y-16">
          <div className="intro container mx-auto flex flex-col gap-10 text-3xl leading-10 tracking-tight">
            <Copy />
          </div>
          <Image src={imgWaste} alt="Waste" placeholder="blur" />
          <Image src={imgPipeline} alt="Pipeline" placeholder="blur" />
          <Image src={imgCompressor} alt="Compressor" placeholder="blur" />
          <div className="intro container mx-auto flex flex-col justify-center gap-10 py-12 text-3xl leading-10 tracking-tight">
            <p>
              Pennsylvania saw a massive boom of fracking starting in the late
              2000s, kicked off by a State College scientist estimating how much
              gas could profitably be unearthed.
            </p>
          </div>
          <Image src={imgTubing} alt="Tubing" placeholder="blur" className="" />
          <Image src={imgWater} alt="Water" placeholder="blur" />

          <div className="intro container mx-auto flex flex-col justify-center gap-10 py-12 text-3xl leading-10 tracking-tight">
            <p>
              In fifth grade, I learned at school how fracking works. The next
              town over sold more of its water supply to fracking than the town
              used.
            </p>
            <p>
              In eighth grade, I joined a scientific group to regularly measure
              water quality across the county near fracking wells.
            </p>
          </div>
          <p className="mono col-span-2 text-center uppercase opacity-75">
            Photographs by Steven Rubin in Pennsylvania
          </p>
        </div>
      </section>
    </Scrollytelling.Root>
  );
}
