import Marquee from "../marquee/marquee";
import Copy from "./consumption.mdx";
import * as Scrollytelling from "../scrollytelling-client";

export default function Consumption() {
  return (
    <Scrollytelling.Root debug={{ label: "Consumption" }}>
      <section className="max-w-screen relative overflow-y-hidden">
        <Marquee>importing</Marquee>
        <div className="intro container mx-auto flex flex-col gap-10 py-24 text-3xl leading-10 tracking-tight">
          <Copy />
        </div>
      </section>
    </Scrollytelling.Root>
  );
}
