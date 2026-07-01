import { useState, useEffect } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const duration = 600;
    const startY = window.scrollY;
    let startTime = null;

    const easeInOutQuad = (t) => {
      return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    };

    const step = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutQuad(progress);

      window.scrollTo(0, startY - startY * eased);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  const wrapClass = visible
    ? "fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 opacity-100 translate-y-0"
    : "fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 opacity-0 translate-y-4 pointer-events-none";

  const btnClass = "flex items-center gap-2 px-5 py-3 rounded-full glass shadow-lg text-sm font-medium text-[#1591DC] hover:bg-white/80 transition-colors duration-200";

  return (
    <div className={wrapClass}>
      <button onClick={scrollToTop} className={btnClass} aria-label="Kembali ke atas">
        <span>↑</span>
        <span>Kembali ke Atas</span>
      </button>
    </div>
  );
}