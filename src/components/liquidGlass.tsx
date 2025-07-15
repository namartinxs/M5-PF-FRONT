"use client";

import React from "react";
import Typewriter from "./typewriter";

export default function GlassCard() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex relative h-[100vh] w-[50vw] items-center justify-between p-[50px]
        bg-white/30 backdrop-blur-[7.5px] border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.18)]
        z-10"
      >
        <Typewriter></Typewriter>
      </div>
    </div>
  );
}
