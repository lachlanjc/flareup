import Copy from "./conclusion.mdx";
import * as Scrollytelling from "../scrollytelling-client";
import Image from "next/image";
import imgDispersion from "./dispersion.jpg";

export default function Conclusion() {
  return (
    <Scrollytelling.Root start="top bottom" debug={{ label: "Conclusion" }}>
      <section
        id="conclusion"
        className="max-w-screen relative overflow-y-hidden pb-[640px] pt-[320px]"
      >
        <Scrollytelling.Parallax
          tween={{
            start: 25,
            end: 100,
            movementY: { value: 320, unit: "px" },
          }}
        >
          <Image
            src={imgDispersion}
            alt="Drawing"
            className="absolute inset-0 w-full"
            id="dispersion"
          />
        </Scrollytelling.Parallax>
        <div className="absolute left-0 right-0 top-0 h-[240px] bg-gradient-to-b from-white to-white/0 mix-blend-overlay" />
        <div className="max-w-screen relative w-full bg-gradient-to-b from-transparent to-black/0">
          <div
            className="intro relative mx-auto flex flex-col gap-10 pb-24 pt-[240px] text-3xl leading-10 tracking-tight"
            style={{
              maxWidth: 768,
              textShadow: "0 1px 3px rgba(0,0,0,1),0 2px 8px rgba(0,0,0,0.8)",
            }}
          >
            <Copy />
          </div>
        </div>
        <p
          className="absolute bottom-12 right-12 font-mono uppercase"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Artwork by Christopher Campbell
        </p>
      </section>
    </Scrollytelling.Root>
  );
}
