import { profile } from "../data/profile";
import Reveal from "../components/Reveal";
import { smoothScrollTo } from "../utils/scroll";

export default function Hero() {
  const sectionClass = "section-hero";
  const wrapClass = "relative grid md:grid-cols-2 gap-12 items-center";
  const eyebrowClass = "font-mono text-sm text-[#1591DC] tracking-widest mb-4";
  const nameClass = "font-display text-display-xl font-semibold text-[#0F172A] tracking-tight";
  const roleClass = "text-body text-[#475569] mt-3 font-medium";
  const taglineClass = "text-body text-[#475569] mt-5 max-w-md";
  const ctaWrapClass = "flex flex-wrap gap-4 mt-8";
  const primaryBtnClass =
    "px-6 py-3 rounded-2xl bg-[#1591DC] text-white text-sm font-medium hover:bg-[#0f76b8] transition-colors duration-200 shadow-[0_8px_24px_rgba(21,145,220,0.25)]";
  const secondaryBtnClass =
    "px-6 py-3 rounded-2xl glass text-[#0F172A] text-sm font-medium hover:bg-white/80 transition-colors duration-200";

  const visualWrapClass = "relative flex justify-center md:justify-end";
  const photoFrameClass =
    "relative w-64 h-64 md:w-80 md:h-80 rounded-[28px] glass overflow-hidden flex items-center justify-center";
  const photoPlaceholderClass = "text-center px-6";

  const cardClass = "glass rounded-2xl p-6 absolute -bottom-8 -left-6 md:-left-10 w-64";
  const cardRowClass = "py-3 border-b border-gray-200/60 last:border-0";
  const cardLabelClass = "font-mono text-[10px] text-[#1591DC] uppercase tracking-wide";
  const cardValueClass = "text-sm font-semibold text-[#0F172A] mt-1";

  const statsWrapClass = "grid grid-cols-3 gap-4 mt-20";
  const statCardClass = "glass rounded-2xl py-6 text-center";
  const statNumberClass = "font-display text-2xl md:text-3xl font-semibold text-[#1591DC]";
  const statLabelClass = "text-xs md:text-sm text-[#475569] mt-1";

  const handleProjectsClick = (e) => {
    e.preventDefault();
    smoothScrollTo("#projects");
  };

  return (
    <section id="home" className={sectionClass}>
      <Reveal className={wrapClass}>
        <div>
          <p className={eyebrowClass}>ZINGHA — PROFILE</p>
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

        <div className={visualWrapClass}>
          <span className="motif-frame w-72 h-72 -top-6 -right-6 hidden md:block" />
          <span className="motif-dot top-2 right-10 hidden md:block" />
          <span className="motif-dot bottom-10 right-2 hidden md:block" />

          <div className={photoFrameClass}>
            <img
              src="/profile.png"
              alt={profile.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
            <div
              className={photoPlaceholderClass}
              style={{ display: "none", flexDirection: "column", alignItems: "center" }}
            >
              <p className="font-mono text-xs text-gray-400">PHOTO</p>
              <p className="text-xs text-gray-400 mt-1">profile.png</p>
            </div>
          </div>

          <div className={cardClass}>
            <div className={cardRowClass}>
              <p className={cardLabelClass}>Focus</p>
              <p className={cardValueClass}>OurKost & FindFutsall</p>
            </div>
            <div className={cardRowClass}>
              <p className={cardLabelClass}>Stack</p>
              <p className={cardValueClass}>Kotlin, Laravel, MySQL</p>
            </div>
            <div className={cardRowClass}>
              <p className={cardLabelClass}>Experience</p>
              <p className={cardValueClass}>2 years</p>
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
          <p className={statLabelClass}>Years Learning</p>
        </div>
        <div className={statCardClass}>
          <p className={statNumberClass}>10+</p>
          <p className={statLabelClass}>Technologies</p>
        </div>
      </Reveal>
    </section>
  );
}
