type Props = { label: string; body: string; images: string[] };

export default function MarketCard({ label, body, images }: Props) {
  const src = images[0];

  return (
    <div className="space-y-3">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted border border-border rounded">
        <img
          src={src}
          alt={label}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <h3 className="text-lg font-semibold">{label}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
    </div>
  );
}
