"use client";

import { navItems } from "@/data";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import RecentProjects from "@/components/RecentProjects";
import Skills from "@/components/Skills";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} className="fixed top-10 z-[5000] p-4" />
        <Hero />
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
