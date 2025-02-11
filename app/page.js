import Image from "next/image";
import Hero from "./Sections/Hero"
import Navbar from "./Components/Navbar";

export default function Home() {
  return (
    <header className="bg-hero">
       <Navbar />
      <Hero />
    </header>
  )
}
