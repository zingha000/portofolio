import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const allTech = ["All", ...new Set(projects.flatMap((p) => p.tech))];

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.tech.includes(filter));

  const sectionClass = "px-6 md:px-16 py-24 max-w-6xl mx-auto";
  const eyebrowClass = "font-mono text-sm text-[#1591DC] tracking-widest mb-2";
  const titleClass = "font-display text-3xl md:text-4xl font-semibold text-[#0F172A] mb-10 tracking-tight";
  const filterWrapClass = "flex flex-wrap gap-2 mb-10";
  const gridClass = "grid md:grid-cols-2 gap-6";

  return (
    <section id="projects" className={sectionClass}>
      <Reveal>
        <p className={eyebrowClass}>SYS.02 — FEATURED PROJECTS</p>
        <h2 className={titleClass}>Things I've built</h2>
      </Reveal>

      <div className={filterWrapClass}>
        {allTech.map((tech) => {
          const isActive = filter === tech;
          const filterClass = isActive
            ? "font-mono text-xs px-4 py-2 rounded-full bg-[#1591DC] text-white transition-colors duration-200"
            : "font-mono text-xs px-4 py-2 rounded-full glass text-[#475569] hover:text-[#1591DC] transition-colors duration-200";

          return (
            <button key={tech} onClick={() => setFilter(tech)} className={filterClass}>
              {tech}
            </button>
          );
        })}
      </div>

      <div className={gridClass}>
        {filtered.map((project) => (
          <Reveal key={project.id}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}