import React from "react";
import Features from "./features/features";
import Service from "./services/services";
import Stats from "./stats/stats";

export default function Landing() {
  return (
    <div>
      <Stats />
      <Features />
      <Service/>
    </div>
  );
}
