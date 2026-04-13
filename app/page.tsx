"use client";

import { navItems } from "@/data";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import RecentProjects from "@/components/RecentProjects";
import Skills from "@/components/Skills";

import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex flex-col justify-center items-center overflow-hidden w-full mx-auto">
      <div className="w-full">
        <FloatingNav navItems={navItems} className="fixed top-10 z-[5000] p-4" />
        <Hero />
      </div>

      <div className="max-w-7xl w-full mx-auto sm:px-10 px-5">
        <About />
        <Experience />
        <Skills />
        <RecentProjects />
        <Education />
        <Certifications />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
