import React from "react";
import Features from "./features/features";
import Hero from "./hero/hero";
import Service from "./services/services";
import Stats from "./stats/stats";

export default function Landing() {
  return (
    <div>
      <Hero/>
      <Stats />
      <Features />
      <Service/>
    </div>
  );
}
