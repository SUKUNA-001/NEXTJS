"use client";
import Header from "./component/Header";
import Hero from "./component/Hero";
import About from "./component/about";
import Experience from "./component/Experience";
import Skills from "./component/Skills";
import Project from "./component/Project";
import Contact from "./component/Contact";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory
    overflow-y-scroll overflow-x-hidden z-0 scrollbar  scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB02] ">
      
      <Header/>

    <section id="hero" className="snap-start">
      <Hero/>
    </section>

    <section id="about" className="snap-center">
      <About/>
    </section>

    <section id="experience" className="snap-center">
      <Experience/>
    </section>
      
      <section id="skills" className=" snap-start">
      <Skills/>
      </section>

      <section id="projects" className="snap-center">
        <Project/>
      </section>

      <section id="contact" className="snap-start">
        <Contact/>
      </section>

      <Link href="hero">
      <footer className="sticky bottom-5 w-full cursor-pointer">
        <div className="flex items-center justify-center">
          <img 
          className=" h-10 w-10 rounded-full filter grayscale hover:grayscale-0
          cursor-pointer" 
          src="/h.png"
          alt="PHOTO PLEASE!!!!!"/>
        </div>
        </footer>
        </Link>
    </div>
  );
}
