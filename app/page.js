import Image from "next/image";
import { ThreeDCardDemo } from "./components/card";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BackgroundLinesDemo } from "./components/LandingpgBackground";

export default function Home() {
  return (
    <div className="h-screen bg-custom-pattern bg-cover bg-center">
      <BackgroundLinesDemo />
    </div>
  );
}
