declare module "@splinetool/react-spline" {
  import React from "react";

  interface SplineProps {
    scene: string;
    className?: string;
    style?: React.CSSProperties;
    onLoad?: () => void;
    onMouseDown?: (event: MouseEvent) => void;
    onMouseUp?: (event: MouseEvent) => void;
    onMouseMove?: (event: MouseEvent) => void;
    onMouseEnter?: (event: MouseEvent) => void;
    onMouseLeave?: (event: MouseEvent) => void;
  }

  const Spline: React.FC<SplineProps>;
  export default Spline;
}
