"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/** Current year, computed on the client (avoids a static build-time year). */
export default function Year() {
  const year = useSyncExternalStore(
    subscribe,
    () => new Date().getFullYear(),
    () => null
  );
  return <>{year ?? ""}</>;
}
