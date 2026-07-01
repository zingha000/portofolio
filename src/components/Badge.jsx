export default function Badge({ children }) {
  return (
    <span className="font-mono text-xs px-3 py-1 rounded-full bg-[#C4E2F5] text-[#1591DC] border border-[#4BB8FA]/30">
      {children}
    </span>
  );
}