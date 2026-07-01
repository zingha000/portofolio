export default function Button({ children, href, variant = "primary" }) {
  const base =
    "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm transition-all duration-200";
  const styles =
    variant === "primary"
      ? "bg-[#1591DC] text-white hover:bg-[#0f76b8]"
      : "bg-white text-[#1591DC] border border-[#1591DC] hover:bg-[#C4E2F5]/40";

  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
    </a>
  );
}