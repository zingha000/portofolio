import { marqueeIcons } from "../data/techstack";

export default function TechMarquee() {
  const wrapClass = "relative overflow-hidden glass rounded-2xl py-8";
  const trackClass = "flex gap-12 marquee-track w-max";
  const iconWrapClass = "flex items-center justify-center w-14 h-14 rounded-xl bg-white/70";

  const loopIcons = [...marqueeIcons, ...marqueeIcons];

  return (
    <div className={wrapClass}>
      <div className={trackClass}>
        {loopIcons.map((slug, i) => (
          <div key={slug + i} className={iconWrapClass}>
            <img
              src={"https://cdn.simpleicons.org/" + slug + "/1591DC"}
              alt={slug}
              className="w-7 h-7"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}