// @ts-nocheck
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import worldData from "@/assets/world-110m.json";

type City = {
  name: string;
  coords: [number, number]; // [lng, lat]
  anchor?: "start" | "middle" | "end";
  dy?: number;
  dx?: number;
};

const chennai: City = { name: "Chennai", coords: [80.27, 13.08], anchor: "start", dx: 8, dy: 4 };

const referenceCities: City[] = [
  { name: "New Delhi", coords: [77.2, 28.61], anchor: "end", dx: -6, dy: 4 },
  { name: "Mumbai", coords: [72.87, 19.07], anchor: "end", dx: -6, dy: 4 },
  { name: "Bengaluru", coords: [77.59, 12.97], anchor: "end", dx: -6, dy: 4 },
  { name: "Colombo", coords: [79.85, 6.93], anchor: "start", dx: 6, dy: 10 },
  { name: "Dubai", coords: [55.27, 25.2], anchor: "end", dx: -6, dy: 4 },
  { name: "Singapore", coords: [103.82, 1.35], anchor: "start", dx: 6, dy: 4 },
];

export default function ChennaiLocatorMap() {
  return (
    <figure className="w-full max-w-2xl mx-auto">
      <div className="w-full border border-border rounded-md bg-card overflow-hidden">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ scale: 360, center: [78, 18] }}
          width={900}
          height={340}
          style={{ width: "100%", height: "auto", display: "block" }}
        >
          <Geographies geography={worldData}>
            {({ geographies }: any) =>
              geographies.map((geo: any) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: "hsl(var(--muted))",
                      stroke: "hsl(var(--border))",
                      strokeWidth: 0.5,
                      outline: "none",
                    },
                    hover: {
                      fill: "hsl(var(--muted))",
                      stroke: "hsl(var(--border))",
                      strokeWidth: 0.5,
                      outline: "none",
                    },
                    pressed: {
                      fill: "hsl(var(--muted))",
                      stroke: "hsl(var(--border))",
                      strokeWidth: 0.5,
                      outline: "none",
                    },
                  }}
                />
              ))
            }
          </Geographies>

          {referenceCities.map((c) => (
            <Marker key={c.name} coordinates={c.coords}>
              <circle r={3} fill="hsl(var(--foreground))" opacity={0.55} />
              <text
                textAnchor={c.anchor ?? "start"}
                x={c.dx ?? 6}
                y={c.dy ?? 4}
                style={{
                  fontFamily: "inherit",
                  fontSize: 10,
                  fill: "hsl(var(--muted-foreground))",
                }}
              >
                {c.name}
              </text>
            </Marker>
          ))}

          <Marker coordinates={chennai.coords}>
            <circle r={6} fill="hsl(var(--primary))" stroke="hsl(var(--background))" strokeWidth={1.5} />
            <text
              textAnchor={chennai.anchor}
              x={chennai.dx}
              y={chennai.dy}
              style={{
                fontFamily: "inherit",
                fontSize: 12,
                fontWeight: 600,
                fill: "hsl(var(--foreground))",
              }}
            >
              Chennai, India
            </text>
          </Marker>
        </ComposableMap>
      </div>
      <figcaption className="text-xs text-muted-foreground mt-2">
        Headquartered in Chennai on India's south-east coast — a deep-water port with direct sea and air links across Asia, the Middle East, and Australia.
      </figcaption>
    </figure>
  );
}
