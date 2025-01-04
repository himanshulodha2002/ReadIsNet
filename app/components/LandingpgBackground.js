import React from "react";
import { BackgroundLines } from "./ui/background-lines";
import { ThreeDCardDemo } from "./card";
import Navbar from "./Navbar";
import Footer from "./Footer";

export function BackgroundLinesDemo() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <ThreeDCardDemo />
    </BackgroundLines>
  );
}
