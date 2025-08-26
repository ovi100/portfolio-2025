export default function Bar({
  label,
  width,
  name,
}: {
  label?: string;
  width: string;
  name: string;
}) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm">
        <span className="text-neutral-300">{name}</span>
        {label && <span className="text-neutral-400">{label}</span>}
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <div className={`h-full bg-brand-500 rounded-full ${width}`} />
      </div>
    </div>
  );
}
