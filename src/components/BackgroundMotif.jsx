export default function BackgroundMotif() {
  const wrapClass = "fixed inset-0 -z-10 overflow-hidden pointer-events-none";

  return (
    <div className={wrapClass}>
      <span className="motif-frame w-48 h-48 top-[8%] left-[4%] rotate-12 opacity-60" />
      <span className="motif-frame w-32 h-32 top-[28%] right-[6%] -rotate-6 opacity-50" />
      <span className="motif-frame w-56 h-56 top-[55%] left-[2%] rotate-3 opacity-40" />
      <span className="motif-frame w-40 h-40 top-[75%] right-[8%] rotate-12 opacity-50" />
      <span className="motif-frame w-24 h-24 top-[92%] left-[15%] -rotate-12 opacity-40" />

      <span className="motif-dot top-[12%] left-[20%]" />
      <span className="motif-dot top-[34%] right-[20%]" />
      <span className="motif-dot top-[48%] left-[10%]" />
      <span className="motif-dot top-[62%] right-[14%]" />
      <span className="motif-dot top-[80%] left-[24%]" />
      <span className="motif-dot top-[88%] right-[28%]" />
    </div>
  );
}