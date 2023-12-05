"use client";
import Map from "./intro/map";
import Intro from "./intro/intro.mdx";
import Marquee from "./marquee/marquee";
import * as Scrollytelling from "./scrollytelling-client";
import Extraction from "./extraction/extraction";
import Exporting from "./distribution/exporting";
// import { useEffect } from "react";
import Conclusion from "./conclusion/conclusion";
import Consumption from "./consumption/consumption";

export default function Home() {
  // useEffect(() => {
  //   setInterval(() => {
  //     window.scroll({
  //       top: window.scrollY + 250,
  //       behavior: "smooth",
  //     });
  //   }, 1);
  // }, []);
  return (
    <>
      <Map />
      <section className="max-w-screen relative overflow-y-hidden">
        <div className="z-1 max-w-screen relative w-full bg-gradient-to-b from-transparent to-black">
          <main className="intro container mx-auto flex flex-col gap-10 py-24 text-3xl leading-10 tracking-tight">
            <Intro />
          </main>
        </div>
      </section>
      <Extraction />
      <Exporting />
      <Consumption />
      <Conclusion />
    </>
  );
}
