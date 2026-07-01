export default function SectionLabel({ index, title }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span className="font-mono text-sm text-[#1591DC] tracking-widest">
        SYS.{index}
      </span>
      <span className="font-mono text-sm text-gray-400 uppercase tracking-widest">
        {title}
      </span>
      <span className="flex-1 h-px bg-gray-200" />
    </div>
  );
}