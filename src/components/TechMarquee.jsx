import { useRef, useEffect } from "react";
import { marqueeIcons } from "../data/techstack";

export default function TechMarquee() {
  const trackRef = useRef(null);
  const posX = useRef(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startPos = useRef(0);
  const didDrag = useRef(false);
  const animRef = useRef(null);
  const lastTime = useRef(null);
  const speed = 40;

  const loopIcons = [...marqueeIcons, ...marqueeIcons];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const totalWidth = track.scrollWidth / 2;

    const normalize = (pos) => {
      let p = pos % totalWidth;
      if (p > 0) p -= totalWidth;
      return p;
    };

    const animate = (timestamp) => {
      if (lastTime.current === null) lastTime.current = timestamp;
      const delta = (timestamp - lastTime.current) / 1000;
      lastTime.current = timestamp;

      if (!isDragging.current) {
        posX.current -= speed * delta;
      }

      posX.current = normalize(posX.current);
      track.style.transform = "translateX(" + posX.current + "px)";
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  const onMouseMoveHandler = (e) => {
    if (!isDragging.current) return;
    const dx = e.pageX - startX.current;
    if (Math.abs(dx) > 4) didDrag.current = true;
    posX.current = startPos.current + dx;
  };

  const onMouseUpHandler = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    trackRef.current.style.cursor = "grab";
    window.removeEventListener("mousemove", onMouseMoveHandler);
    window.removeEventListener("mouseup", onMouseUpHandler);
  };

  const onMouseDown = (e) => {
    isDragging.current = true;
    didDrag.current = false;
    startX.current = e.pageX;
    startPos.current = posX.current;
    trackRef.current.style.cursor = "grabbing";
    window.addEventListener("mousemove", onMouseMoveHandler);
    window.addEventListener("mouseup", onMouseUpHandler);
  };

  const handleClick = (e, url) => {
    if (didDrag.current) { e.preventDefault(); return; }
    window.open(url, "_blank", "noopener noreferrer");
  };

  return (
    <div className="relative overflow-hidden glass rounded-2xl py-6">
      <div
        ref={trackRef}
        className="flex gap-8 w-max cursor-grab select-none"
        onMouseDown={onMouseDown}
      >
        {loopIcons.map((icon, i) => (
          <button
            key={icon.slug + i}
            onClick={(e) => handleClick(e, icon.url)}
            title={icon.label}
            className="flex flex-col items-center gap-2 group shrink-0"
          >
            <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-200">
              <img
                src={"https://cdn.simpleicons.org/" + icon.slug}
                alt={icon.label}
                className="w-7 h-7"
                loading="lazy"
                draggable="false"
              />
            </div>
            <span className="font-mono text-[10px] text-gray-400 group-hover:text-[#1591DC] transition-colors duration-200">
              {icon.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}