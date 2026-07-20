interface ImagePlaceholderProps {
  label?: string;
  className?: string;
}

export default function ImagePlaceholder({
  label = 'Image coming soon',
  className = '',
}: ImagePlaceholderProps) {
  return (
    <div
      className={`flex items-center justify-center rounded-xl border-2 border-dashed border-border-soft bg-bg-tint text-sm font-medium text-text-muted ${className}`}
    >
      {label}
    </div>
  );
}
