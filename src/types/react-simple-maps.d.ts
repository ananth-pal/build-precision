declare module "react-simple-maps" {
  import type { CSSProperties, ReactNode, SVGProps } from "react";

  type GeoStyle = { default?: CSSProperties; hover?: CSSProperties; pressed?: CSSProperties };

  export interface RsmGeography {
    rsmKey: string;
    [key: string]: unknown;
  }

  export function ComposableMap(props: {
    projection?: string;
    projectionConfig?: { scale?: number; center?: [number, number]; rotate?: [number, number, number] };
    width?: number;
    height?: number;
    style?: CSSProperties;
    className?: string;
    children?: ReactNode;
  }): JSX.Element;

  export function Geographies(props: {
    geography: string | object;
    children: (args: { geographies: RsmGeography[] }) => ReactNode;
  }): JSX.Element;

  export function Geography(props: { geography: RsmGeography; style?: GeoStyle; className?: string }): JSX.Element;

  export function Marker(
    props: { coordinates: [number, number]; children?: ReactNode } & Omit<SVGProps<SVGGElement>, "children">,
  ): JSX.Element;
}
