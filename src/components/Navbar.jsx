import { useState, useEffect } from "react";
import { smoothScrollTo } from "../utils/scroll";

const links = [
  { label: "Tech Stack", href: "#techstack" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = links.map((l) => document.querySelector(l.href));
      const current = sections.find((sec) => {
        if (!sec) return false;
        const rect = sec.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      if (current) {
        setActive("#" + current.id);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navOuterClass = scrolled
  ? "fixed top-0 left-0 right-0 z-50 w-full glass-nav-soft transition-all duration-300"
  : "fixed top-0 left-0 right-0 z-50 w-full glass-nav transition-all duration-300";

  const navInnerClass = "max-w-6xl mx-auto px-6 md:px-16 py-4 flex items-center justify-between";

  const logoWrapClass = "w-11 h-11 md:w-12 md:h-12 rounded-full overflow-hidden bg-white flex items-center justify-center shadow-sm";
  const logoImgClass = "w-full h-full object-cover";
  const menuWrapClass = "hidden md:flex items-center gap-8";
  const ctaClass = "text-sm font-medium px-4 py-2 rounded-full bg-[#1591DC] text-white hover:bg-[#0f76b8] transition-colors duration-200";

  const handleClick = (href) => (e) => {
    e.preventDefault();
    smoothScrollTo(href);
  };

  return (
    <nav className={navOuterClass}>
      <div className={navInnerClass}>
        <div className={logoWrapClass}>
          <img src="logo.webp" alt="Logo" className={logoImgClass} />
        </div>

        <div className={menuWrapClass}>
          {links.map((link) => {
            const isActive = active === link.href;
            const baseLinkColor = scrolled ? "text-gray-500" : "text-[#475569]";
            const linkClass = isActive
              ? "text-sm font-medium transition-colors duration-200 text-[#1591DC]"
              : "text-sm font-medium transition-colors duration-200 " + baseLinkColor + " hover:text-[#1591DC]";

            return (
              <a key={link.href} href={link.href} onClick={handleClick(link.href)} className={linkClass}>
                {link.label}
              </a>
            );
          })}
        </div>

        <a href="#contact" onClick={handleClick("#contact")} className={ctaClass}>
          Hire Me
        </a>
      </div>
    </nav>
  );
}