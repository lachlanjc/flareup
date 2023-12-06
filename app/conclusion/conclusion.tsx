import Copy from "./conclusion.mdx";
import * as Scrollytelling from "../scrollytelling-client";
import Image from "next/image";
import imgDispersion from "./dispersion.jpg";

export default function Conclusion() {
  return (
    <Scrollytelling.Root start="top bottom" debug={{ label: "Conclusion" }}>
      <section className="max-w-screen relative overflow-y-hidden">
        {/* <Scrollytelling.Parallax
          tween={{
            start: 0,
            end: 100,
            movementY: { value: 1024, unit: "px" },
          }}
        > */}
        <Image
          src={imgDispersion}
          alt="Drawing"
          className="absolute inset-0 w-full object-bottom"
          style={{ objectPosition: "50% center" }}
          id="dispersion"
        />
        <div className="absolute left-0 right-0 top-0 h-[256px] bg-gradient-to-b from-white to-white/0" />
        {/* </Scrollytelling.Parallax> */}
        <div className="max-w-screen relative w-full bg-gradient-to-b from-transparent to-black/75">
          <div className="intro container relative mx-auto flex flex-col gap-10 pb-24 pt-[850px] text-3xl leading-10 tracking-tight">
            <Copy />
          </div>
        </div>
        <p className="absolute bottom-12 right-12 font-mono uppercase opacity-75">
          Artwork by Christopher Campbell
        </p>
      </section>
    </Scrollytelling.Root>
  );
}
