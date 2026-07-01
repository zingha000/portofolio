export default function ProjectCard({ project }) {
  const isLarge = project.size === "large";

  const cardClass = isLarge
    ? "glass rounded-3xl p-8 md:col-span-2 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
    : "glass rounded-3xl p-8 hover:-translate-y-1 hover:shadow-xl transition-all duration-300";

  const roleClass = "font-mono text-xs text-[#1591DC] uppercase tracking-wide";
  const nameClass = "font-display text-2xl font-bold text-[#0F172A] mt-1";
  const blockLabelClass = "font-mono text-[10px] text-gray-400 uppercase tracking-wide mt-4";
  const blockTextClass = "text-sm text-[#475569] mt-1 leading-relaxed";
  const techWrapClass = "flex flex-wrap gap-2 mt-5";
  const techBadgeClass = "font-mono text-xs px-3 py-1 rounded-full bg-[#C4E2F5]/60 text-[#1591DC]";
  const linkClass = "inline-block mt-6 text-sm font-semibold text-[#1591DC] hover:underline";

  return (
    <div className={cardClass}>
      <p className={roleClass}>{project.role}</p>
      <h3 className={nameClass}>{project.name}</h3>

      <p className={blockLabelClass}>Problem</p>
      <p className={blockTextClass}>{project.problem}</p>

      <p className={blockLabelClass}>Solution</p>
      <p className={blockTextClass}>{project.solution}</p>

      <p className={blockLabelClass}>Result</p>
      <p className={blockTextClass}>{project.result}</p>

      <div className={techWrapClass}>
        {project.tech.map((t) => (
          <span key={t} className={techBadgeClass}>
            {t}
          </span>
        ))}
      </div>

      {project.link && (
        <a href={project.link} className={linkClass}>
          View project →
        </a>
      )}
    </div>
  );
}