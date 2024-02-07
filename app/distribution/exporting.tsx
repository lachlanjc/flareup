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

export interface DonutProps
  extends Omit<
    React.ComponentPropsWithRef<"svg">,
    "opacity" | "color" | "css" | "sx" | "max" | "min"
  > {
  value: number;
  min?: number;
  max?: number;
  title?: string;
  size?: string | number;
}

/**
 * Single value SVG donut chart
 * adapted from https://theme-ui.com/components/donut/
 */

function Donut({
  size = 128,
  strokeWidth = 2,
  value = 0,
  min = 0,
  max = 1,
  title,
  ...props
}: DonutProps) {
  const r =
    16 -
    (typeof strokeWidth === "number" ? strokeWidth : parseFloat(strokeWidth));
  const C = 2 * r * Math.PI;
  const offset = C - ((value - min) / (max - min)) * C;

  const svgProps = {
    strokeWidth,

    viewBox: "0 0 32 32",
    width: size,
    height: size,

    fill: "none",
    stroke: "currentcolor",
  };

  return (
    <svg
      role="img"
      aria-valuenow={value}
      aria-valuemin={min}
      aria-valuemax={max}
      {...(svgProps as {})}
      {...props}
    >
      {title && <title>{title}</title>}
      <circle cx={16} cy={16} r={r} opacity={1 / 8} />
      <circle
        cx={16}
        cy={16}
        r={r}
        strokeDasharray={C}
        strokeDashoffset={offset}
        transform="rotate(-90 16 16)"
        style={{ transition: "1s stroke-dashoffset ease 1s" }}
        className="stroke-accent"
      />
    </svg>
  );
}

export default function Exporting() {
  return (
    <Scrollytelling.Root
      start="top bottom"
      end="bottom top"
      debug={{ label: "Exporting" }}
    >
      <section id="exporting" className="max-w-screen">
        <Marquee>exporting</Marquee>
        <div className="intro container relative mx-auto mb-36 flex flex-col gap-10 text-3xl leading-10 tracking-tight">
          <Systemic />
          <div className="absolute -bottom-12 right-0 grid h-[300px] w-[300px] place-content-center">
            <Donut value={0.4} size={300} className="absolute" />
            <div className="flex max-w-[220px] flex-col gap-2 text-center">
              <span className="font-mono text-6xl">40%</span>
              <span className="font-mono text-base opacity-75">
                of global shipping is shipping fossil fuels
              </span>
            </div>
          </div>
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
      </section>
    </Scrollytelling.Root>
  );
}
