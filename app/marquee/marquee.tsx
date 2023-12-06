import clsx from "clsx";
import s from "./marquee.module.css";
import * as Scrollytelling from "../scrollytelling-client";

// Copied from https://github.com/basementstudio/scrollytelling/blob/main/website/src/app/sections/lab-cylinder/intro/index.tsx

export default function MarqueeSection({ children }: { children: string }) {
  return (
    <div
      className="max-w-screen relative h-[40vh] overflow-x-hidden overflow-y-visible bg-black"
      id={children}
    >
      <div className={s.marquees}>
        <Marquee className={s.marquee1} orange children={children} />
        <Marquee className={s.marquee2} reverse children={children} />
        <Scrollytelling.Animation
          tween={[
            {
              start: 0,
              end: 100,
              target: `#${children} .${s.marquee1} [data-marquee-animation-container]`,
              to: { x: -1000, ease: "linear" },
            },
            {
              start: 0,
              end: 100,
              target: `#${children} .${s.marquee2} [data-marquee-animation-container]`,
              to: { x: 1000, ease: "linear" },
            },
          ]}
        />
      </div>
    </div>
  );
}

function Marquee({
  reverse,
  orange,
  className,
  children,
}: PropsWithChildren<{
  reverse?: boolean;
  orange?: boolean;
  className?: string;
}>) {
  return (
    <div
      className={clsx(s.marqueeContainer, className)}
      style={{
        ["--marquee-color" as string]: orange
          ? "var(--color-orange)"
          : "var(--color-white)",
      }}
    >
      <div
        className={clsx(s.marqueeAnimationContainer, reverse && s.reverse)}
        data-marquee-animation-container
      >
        {Array.from({ length: 10 }, (_, i) => (
          <div key={i} className={s.marqueeItem}>
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}
