import { experience } from "../data/experience";
import Reveal from "../components/Reveal";

export default function Experience() {
  const sectionClass = "section max-w-4xl";
  const eyebrowClass = "font-mono text-sm text-[#1591DC] tracking-widest mb-2";
  const titleClass = "font-display text-3xl md:text-4xl font-semibold text-[#0F172A] mb-12 tracking-tight";
  const timelineClass = "relative border-l-2 border-[#C4E2F5] pl-8 space-y-10";
  const dotClass = "absolute -left-[9px] w-4 h-4 rounded-full bg-[#1591DC] border-4 border-white";
  const yearClass = "font-mono text-xs text-[#1591DC] tracking-wide";
  const roleTitleClass = "font-display text-lg font-semibold text-[#0F172A] mt-1";
  const orgClass = "text-sm text-[#475569]";
  const descClass = "text-sm text-[#475569] mt-2 leading-relaxed";
  const achievementClass = "font-mono text-xs text-[#1591DC] mt-2 inline-block";

  return (
    <section id="experience" className={sectionClass}>
      <Reveal>
        <p className={eyebrowClass}>SYS.03 — EXPERIENCE</p>
        <h2 className={titleClass}>How I got here</h2>
      </Reveal>

      <div className={timelineClass}>
        {experience.map((exp, i) => (
          <Reveal key={i}>
            <div className="relative">
              <span className={dotClass} />
              <p className={yearClass}>{exp.year}</p>
              <h3 className={roleTitleClass}>{exp.title}</h3>
              <p className={orgClass}>{exp.org}</p>
              <p className={descClass}>{exp.description}</p>
              {exp.achievement && (
                <span className={achievementClass}>★ {exp.achievement}</span>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}