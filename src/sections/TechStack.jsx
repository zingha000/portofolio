import { useState } from "react";
import { techStack } from "../data/techstack";
import TechMarquee from "../components/TechMarquee";
import Reveal from "../components/Reveal";

export default function TechStack() {
  const [activeTab, setActiveTab] = useState(techStack[0].category);

  const sectionClass = "section";  const eyebrowClass = "font-mono text-sm text-[#1591DC] tracking-widest mb-2";
  const titleClass = "font-display text-3xl md:text-4xl font-semibold text-[#0F172A] mb-10 tracking-tight";
  const tabWrapClass = "flex flex-wrap gap-2 mb-8 mt-16";
  const gridClass = "grid sm:grid-cols-2 gap-4";
  const skillCardClass = "glass rounded-2xl p-5 flex items-center gap-4";
  const skillIconClass = "w-10 h-10 rounded-lg bg-white/70 flex items-center justify-center shrink-0";
  const skillNameClass = "font-display font-medium text-[#0F172A] text-sm";
  const skillMetaClass = "text-xs text-[#475569] mt-1";
  const favoriteClass = "font-mono text-[10px] px-2 py-1 rounded-full bg-[#1591DC] text-white ml-2";
  const levelDotsWrapClass = "flex gap-1 mt-2";

  const activeGroup = techStack.find((g) => g.category === activeTab);

  const levelToDots = (level) => {
    if (level === "Confident") return 3;
    if (level === "Comfortable") return 2;
    return 1;
  };

  return (
    <section id="techstack" className={sectionClass}>
      <Reveal>
        <p className={eyebrowClass}>SYS.01 — TECH STACK</p>
        <h2 className={titleClass}>What I work with</h2>
        <TechMarquee />
      </Reveal>

      <div className={tabWrapClass}>
        {techStack.map((group) => {
          const isActive = group.category === activeTab;
          const tabClass = isActive
            ? "px-5 py-2 rounded-full text-sm font-medium bg-[#1591DC] text-white transition-colors duration-200"
            : "px-5 py-2 rounded-full text-sm font-medium glass text-[#475569] hover:text-[#1591DC] transition-colors duration-200";

          return (
            <button
              key={group.category}
              onClick={() => setActiveTab(group.category)}
              className={tabClass}
            >
              {group.category}
            </button>
          );
        })}
      </div>

      <div className={gridClass}>
        {activeGroup.skills.map((skill) => {
          const dots = levelToDots(skill.level);

          return (
            <div key={skill.name} className={skillCardClass}>
              <div className={skillIconClass}>
                <img
                  src={"https://cdn.simpleicons.org/" + skill.icon + "/1591DC"}
                  alt={skill.name}
                  className="w-5 h-5"
                />
              </div>
              <div>
                <div className="flex items-center">
                  <span className={skillNameClass}>{skill.name}</span>
                  {skill.favorite && <span className={favoriteClass}>Favorite</span>}
                </div>
                <p className={skillMetaClass}>
                  {skill.years} {skill.years > 1 ? "years" : "year"} · {skill.level}
                </p>
                <div className={levelDotsWrapClass}>
                  {[1, 2, 3].map((i) => {
                    const dotClass = i <= dots
                      ? "w-2 h-2 rounded-full bg-[#1591DC]"
                      : "w-2 h-2 rounded-full bg-gray-200";
                    return <span key={i} className={dotClass} />;
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}