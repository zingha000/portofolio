import { profile } from "../data/profile";
import Reveal from "../components/Reveal";
import { smoothScrollTo } from "../utils/scroll";

export default function Hero() {
  const sectionClass = "section-hero";
  const wrapClass = "relative flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 md:items-center";

  const eyebrowClass = "font-mono text-sm text-[#1591DC] tracking-widest mb-3";
  const nameClass = "font-display text-display-xl font-semibold text-[#0F172A] tracking-tight";
  const roleClass = "text-body text-[#475569] mt-2 font-medium";
  const taglineClass = "text-body text-[#475569] mt-4 max-w-md";
  const ctaWrapClass = "flex flex-wrap gap-4 mt-7";
  const primaryBtnClass =
    "px-6 py-3 rounded-2xl bg-[#1591DC] text-white text-sm font-medium hover:bg-[#0f76b8] transition-colors duration-200 shadow-[0_8px_24px_rgba(21,145,220,0.25)]";
  const secondaryBtnClass =
    "px-6 py-3 rounded-2xl glass text-[#0F172A] text-sm font-medium hover:bg-white/80 transition-colors duration-200";

  const photoWrapClass = "relative flex justify-center md:justify-end mt-8 md:mt-0";
  const shapeBgClass =
    "absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-72 md:w-96 md:h-96 rounded-full bg-[#C4E2F5]/50 -z-10";

  const cardClass =
    "glass rounded-xl p-3 absolute bottom-2 right-0 md:-right-4 w-44 md:w-52 shadow-lg";
  const cardRowClass = "py-1.5 border-b border-gray-200/60 last:border-0";
  const cardLabelClass = "font-mono text-[9px] text-[#1591DC] uppercase tracking-wide";
  const cardValueClass = "text-xs font-semibold text-[#0F172A] mt-0.5";

  const statsWrapClass = "grid grid-cols-3 gap-3 md:gap-4 mt-12 md:mt-16";
  const statCardClass = "glass rounded-2xl py-5 text-center";
  const statNumberClass = "font-display text-xl md:text-3xl font-semibold text-[#1591DC]";
  const statLabelClass = "text-xs text-[#475569] mt-1";

  const handleProjectsClick = (e) => {
    e.preventDefault();
    smoothScrollTo("#projects");
  };

  return (
    <section id="home" className={sectionClass}>
      <Reveal className={wrapClass}>
        <div>
          <p className={eyebrowClass}>SYS.00 — PROFILE</p>
          <h1 className={nameClass}>{profile.name}</h1>
          <p className={roleClass}>{profile.role}</p>
          <p className={taglineClass}>{profile.description}</p>
          <div className={ctaWrapClass}>
            <a href="#projects" onClick={handleProjectsClick} className={primaryBtnClass}>
              View Projects
            </a>
            <a href="/cv.pdf" download="Acep-Ega-CV.pdf" className={secondaryBtnClass}>
              Download CV
            </a>
          </div>
        </div>

        <div className={photoWrapClass}>
          <span className="motif-frame w-64 h-64 md:w-80 md:h-80 -top-4 -right-4 hidden md:block" />
          <span className="motif-dot top-0 right-8 hidden md:block" />
          <span className="motif-dot bottom-8 right-0 hidden md:block" />

          <div className="relative inline-block">
            <div className={shapeBgClass} />
            <img
              src="profile.webp"
              alt={profile.name}
              className="relative w-72 h-96 md:w-96 md:h-[500px] object-cover object-top"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
            <div
              className="relative w-52 h-64 md:w-72 md:h-80 glass rounded-3xl flex flex-col items-center justify-center"
              style={{ display: "none" }}
            >
              <p className="font-mono text-xs text-gray-400">PHOTO</p>
              <p className="text-xs text-gray-400 mt-1">profile.png</p>
            </div>

            <div className={cardClass}>
              <div className={cardRowClass}>
                <p className={cardLabelClass}>Focus</p>
                <p className={cardValueClass}>Magang/Project starup</p>
              </div>
              <div className={cardRowClass}>
                <p className={cardLabelClass}>Stack</p>
                <p className={cardValueClass}>React, PHP, Javascript</p>
              </div>
              <div className={cardRowClass}>
                <p className={cardLabelClass}>Experience</p>
                <p className={cardValueClass}>2 years</p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal className={statsWrapClass}>
        <div className={statCardClass}>
          <p className={statNumberClass}>5+</p>
          <p className={statLabelClass}>Projects</p>
        </div>
        <div className={statCardClass}>
          <p className={statNumberClass}>2</p>
          <p className={statLabelClass}>Years</p>
        </div>
        <div className={statCardClass}>
          <p className={statNumberClass}>10+</p>
          <p className={statLabelClass}>Technologies</p>
        </div>
      </Reveal>
    </section>
  );
}
