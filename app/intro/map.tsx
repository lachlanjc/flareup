import { useRef, useState } from "react";
import * as Scrollytelling from "../scrollytelling-client";

import Map, { MapRef, Marker, MarkerProps } from "react-map-gl";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiaGFja2NsdWIiLCJhIjoiY2pscGI1eGdhMGRyNzN3bnZvbGY5NDBvZSJ9.Zm4Zduj94TrgU8h890M7gA";

const [BER_LAT, BER_LNG] = [52.52, 13.405];
const [SCE_LAT, SCE_LNG] = [40.7934, -77.86];
type Markers = Array<MarkerProps & { key: string }>;

const initialViewState = {
  latitude: BER_LAT,
  longitude: BER_LNG,
  zoom: 2,
  bearing: 0,
  pitch: 20,
};

const initialMarkers: Markers = [
  {
    latitude: BER_LAT,
    longitude: BER_LNG,
    key: "Berlin",
  },
];

const HEADLINES = [
  "Here we are, in Berlin.",
  "I grew up in a small college town in the Northeastern U.S. called State College, PA.",
] as const;

export default function AnimatedMap() {
  const mapRef = useRef<MapRef | null>(null);
  const rootRef = useRef<HTMLDivElement | null>(null);

  const [headline, setHeadline] = useState<string>(HEADLINES[0]);
  const [activeMarkers, setActiveMarkers] = useState<Markers>(initialMarkers);

  return (
    <Scrollytelling.Root key="map" end="+=500" debug={{ label: "Intro Map" }}>
      <Scrollytelling.Pin childHeight="100vh" pinSpacerHeight="200vh" top={0}>
        <Scrollytelling.Waypoint
          at={33}
          label="State College transition"
          onCall={() => {
            console.log("intro trigger");
            setHeadline(HEADLINES[1]);
            mapRef.current?.flyTo({
              center: [SCE_LNG, SCE_LAT],
              zoom: 5.9,
              duration: 8000,
            });
            setTimeout(() => {
              setActiveMarkers([
                {
                  latitude: SCE_LAT,
                  longitude: SCE_LNG,
                  key: "State College",
                },
              ]);
            }, 4000);
          }}
          onReverseCall={() => {
            console.log("reverse intro");
            setHeadline(HEADLINES[0]);
            setActiveMarkers(initialMarkers);
            mapRef.current?.flyTo({
              center: [BER_LNG, BER_LAT],
              zoom: initialViewState.zoom,
              duration: 6000,
            });
          }}
        />
        <div className="relative h-[200vh] w-screen" ref={rootRef}>
          <style>{`.mapboxgl-canvas, .mapboxgl-marker { position: absolute !important; }`}</style>
          <Map
            ref={mapRef}
            initialViewState={initialViewState}
            mapStyle="mapbox://styles/mapbox/satellite-streets-v12"
            mapboxAccessToken={MAPBOX_TOKEN}
            style={{
              width: "100%",
              height: "100vh",
              overflowY: "hidden",
              position: "absolute",
              inset: 0,
            }}
            cooperativeGestures
            scrollZoom={false}
            boxZoom={false}
          >
            {activeMarkers.map((marker, i) => (
              <Marker
                anchor="bottom"
                {...marker}
                key={marker.key}
                style={{ position: "relative" }}
              >
                <svg
                  className="fill-current text-red-500"
                  width={32}
                  height={32}
                  viewBox="0 0 24 24"
                >
                  <title>{marker.key}</title>
                  <path
                    d={`M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`}
                  />
                </svg>
              </Marker>
            ))}
            <div className="z-1 absolute bottom-0 left-0 right-0 h-[25vh] bg-gradient-to-b from-transparent to-black/75" />
            <h2
              className="z-2 absolute bottom-16 left-2/4 -translate-x-1/2 text-center text-lg tracking-tight text-white md:max-w-2xl md:text-4xl"
              style={{ textShadow: "0 2px 4px rgba(0,0,0,0.75)" }}
            >
              {headline}
            </h2>
          </Map>
        </div>
      </Scrollytelling.Pin>
    </Scrollytelling.Root>
  );
}
