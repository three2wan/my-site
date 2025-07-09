"use client";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TodoList from "./components/TodoList";

export type Section =
  | "Hero"
  | "About"
  | "Skills"
  | "Projects"
  | "Contact"
  | "Todo List";

const SECTIONS: Section[] = [
  "Hero",
  "About",
  "Skills",
  "Projects",
  "Contact",
  "Todo List",
];

function renderSection(
  section: Section,
  setActiveSection: (s: Section) => void
) {
  switch (section) {
    case "Hero":
      return <Hero setActiveSection={setActiveSection} />;
    case "About":
      return <About />;
    case "Skills":
      return <Skills />;
    case "Projects":
      return <Projects />;
    case "Contact":
      return <Contact />;
    case "Todo List":
      return <TodoList />;
    default:
      return null;
  }
}

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>("Hero");

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar
        sections={SECTIONS}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 gap-12">
        {renderSection(activeSection, setActiveSection)}
      </main>
      <Footer />
    </div>
  );
}
