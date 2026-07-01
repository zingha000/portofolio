import useReveal from "../hooks/useReveal";

export default function Reveal({ children, className = "" }) {
  const [ref, visible] = useReveal();
  const revealClass = visible ? "reveal reveal-visible " + className : "reveal " + className;

  return (
    <div ref={ref} className={revealClass}>
      {children}
    </div>
  );
}