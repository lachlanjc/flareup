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
import imgWells from "../intro/wells.jpeg";

export default function Extraction() {
  return (
    <Scrollytelling.Root
      key="extraction"
      start="top bottom"
      debug={{ label: "Extraction" }}
    >
      <section id="extraction" className="max-w-screen relative">
        <div className="relative -mb-[200px]">
          <Marquee>extraction</Marquee>
        </div>
        <Scrollytelling.Parallax
          tween={{
            start: 25,
            end: 67,
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
          <p className="col-span-2 -mb-8 text-right font-mono uppercase opacity-75">
            Photographs by Steven Rubin in Pennsylvania
          </p>
          <div className="intro flex flex-col gap-10 text-3xl leading-10 tracking-tight">
            <Copy />
          </div>
          <Image src={imgWaste} alt="Waste" placeholder="blur" />
          <Image src={imgPipeline} alt="Pipeline" placeholder="blur" />
          <Image src={imgTubing} alt="Tubing" placeholder="blur" className="" />
          {/* <Image src={imgCompressor} alt="Compressor" placeholder="blur" /> */}
          <div className="intro container mx-auto flex flex-col justify-center gap-10 py-8 text-3xl leading-10 tracking-tight">
            <p>
              Pennsylvania saw a massive boom of fracking starting in the late
              2000s, kicked off after a Penn State scientist estimated how much
              gas could profitably be unearthed.
            </p>
            <p>
              The state now has over <code>200,000</code> oil &amp; gas wells,
              making it the second largest gas producer in the country. The
              nearest active fracking to my house is <code>15 miles</code> /{" "}
              <code>25 km</code> away. No one told me about that.
            </p>
          </div>
          <figure>
            <Image
              src={imgWells}
              placeholder="blur"
              alt="Map of wells"
              className="invert"
            />
            <figcaption className="mt-4 flex justify-between font-mono text-base font-medium text-gray-400">
              <span>Every dot is an oil or gas well.</span>
              <span>MAP BY FRACTRACKER</span>
            </figcaption>
          </figure>

          {/* <Image src={imgWater} alt="Water" placeholder="blur" /> */}
        </div>
      </section>
    </Scrollytelling.Root>
  );
}
