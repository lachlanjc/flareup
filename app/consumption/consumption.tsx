import Marquee from "../marquee/marquee";
import Copy from "./consumption.mdx";
import * as Scrollytelling from "../scrollytelling-client";

export default function Consumption() {
  return (
    <Scrollytelling.Root start="top bottom" debug={{ label: "Consumption" }}>
      <section
        id="consumption"
        className="max-w-screen relative mt-24 overflow-y-hidden"
      >
        <Marquee>importing</Marquee>
        <div className="intro container mx-auto my-24 flex flex-col gap-10 text-3xl leading-10 tracking-tight">
          <Copy />
        </div>
        <footer className="w-full bg-white py-24 text-black">
          <div className="bridge container mx-auto px-24">
            <p
              className="mb-10 text-3xl leading-10 tracking-tight"
              style={{ maxWidth: "38ch" }}
            >
              You’ll hear propaganda regularly about how “natural” gas is a
              “cleaner” or “bridge” fuel—including from Democrats. Burning it
              does emit less pollution than coal, but new research shows that
              when the impact of shipping is included, fossil gas produces up to{" "}
              <code>2.7x</code> more carbon emissions than coal.
            </p>
            <div
              className="mb-32 mt-16 grid w-[48rem] grid-cols-[2fr_3fr_3fr] grid-rows-[auto_180px] items-center justify-center gap-x-8"
              role="img"
              aria-label="Visualization of carbon emission equivalencies of coal (1x), LNG shipped short distance (1.2x), and LNG shipped long distance (2.7x)"
            >
              <strong className="mb-auto text-center text-2xl tracking-tight">
                Coal
              </strong>
              <div className="mb-8 flex flex-col gap-2 text-center">
                <strong className="text-2xl tracking-tight">Fossil gas</strong>
                <small className="font-mono text-base uppercase opacity-50">
                  shipped short distance
                </small>
              </div>
              <div className="mb-8 flex flex-col gap-2 text-center">
                <strong className="text-2xl tracking-tight">Fossil gas</strong>
                <small className="font-mono text-base uppercase opacity-50">
                  shipped long distance
                </small>
              </div>
              <span className="inline-block h-16 w-16 justify-self-center rounded-full bg-black/50" />
              <span
                className="mono bg-accent inline-block grid h-16 w-16 place-content-center justify-self-center rounded-full text-xl text-white"
                style={{ transform: "scale(1.15)", fontWeight: 600 }}
              >
                1.2× 
              </span>
              <span
                className="mono bg-accent inline-block grid h-16 w-16 place-content-center justify-self-center rounded-full text-xl text-white"
                style={{ transform: "scale(1.65)", fontWeight: 525 }}
              >
                2.7× 
              </span>

              {/* </div>
              <div className="flex flex-col gap-2">
                <header className="css-1h9kuou">
                  <strong className="css-1y5d2gg">Global average</strong>
                  <span className="css-17qcmm4">MT CO₂/person</span>
                </header> */}
              {/* <strong className="css-10scmmg">4.35</strong> */}
              {/* </div> */}
            </div>
            <p
              className="text-5xl leading-tight tracking-tighter"
              style={{ maxWidth: "30ch" }}
            >
              If the proposed export terminals are all built, they will be
              associated with an extra 3.2 billion tons of greenhouse-gas
              emissions annually—comparable to the emissions of the entire E.U.
            </p>
          </div>
        </footer>
      </section>
    </Scrollytelling.Root>
  );
}
