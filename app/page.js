import Image from "next/image";
import Hero from "./Sections/Hero"
import Navbar from "./Components/Navbar";
import About from "./Sections/About";
import Head from 'next/head';
import Services from "./Sections/Services";
import Portfolio from "./Sections/Portfolio";
import Testimonial from "./Sections/Testimonial";
import Contact from "./Sections/Contact";
import Footer from "./Sections/Footer";
import Skills from "./Sections/Skills";
// import Experience from "./Sections/experience";

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
     <Testimonial/>
     <Skills/>
     {/* <Experience/> */}
     <Contact/>
     <Footer/>
    </main>
    </>
  )
}
