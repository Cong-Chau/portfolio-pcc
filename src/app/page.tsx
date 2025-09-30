"use client";
import Header from "@/components/sessions/Header";
import Landing from "@/components/sessions/Landing";
import About from "@/components/sessions/About";
import Skills from "@/components/sessions/Skills";
import Projects from "@/components/sessions/Projects";
import Contact from "@/components/sessions/Contact";
export default function Home() {
  return (
    <div className="select-none">
      <Header />
      <Landing />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
