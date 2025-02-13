import Image from "next/image";
import Hero from "./Sections/Hero"
import Navbar from "./Components/Navbar";
import About from "./Sections/About";
import Head from 'next/head';
import Services from "./Sections/Services";
import Portfolio from "./Sections/Portfolio";

export default function Home() {
  return (
    <>
    <Head>
      <title>Joseph Portfolio</title>
      <meta name="description" content="A unique developer" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <header className="bg-hero">
       <Navbar />
      <Hero />
    </header>
    <main>
     <About/>
     <Services/>
     <Portfolio />
    </main>
    </>
  )
}
