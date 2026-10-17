"use client";

import { useEffect, useRef } from "react";

/** Fixed full-viewport WebGL planet. The three.js scene is loaded client-side only. */
export default function PlanetCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let dispose: (() => void) | undefined;
    let cancelled = false;
    import("../lib/planetScene").then(({ createPlanetScene }) => {
      if (!cancelled && ref.current) dispose = createPlanetScene(ref.current);
    });
    return () => {
      cancelled = true;
      dispose?.();
    };
  }, []);

  return <canvas ref={ref} className="planet-canvas" />;
}
