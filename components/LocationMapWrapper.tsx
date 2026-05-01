"use client";

import dynamic from "next/dynamic";

const LocationMap = dynamic(() => import("./LocationMap"), {
  ssr: false,
});

export default function LocationMapWrapper() {
  return <LocationMap />;
}
