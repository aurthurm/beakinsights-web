export function BrandFigure({
  src,
  alt,
  caption,
  width,
  height,
  framed = false,
  captionClassName = "mt-4 text-sm text-slate",
}: {
  src: string
  alt: string
  caption?: string
  width: number
  height: number
  framed?: boolean
  captionClassName?: string
}) {
  return (
    <figure className={framed ? "border border-border bg-white p-4 sm:p-6" : undefined}>
      <img src={src} alt={alt} width={width} height={height} className="h-auto w-full" />
      {caption ? <figcaption className={captionClassName}>{caption}</figcaption> : null}
    </figure>
  )
}

export function BrandIcon({ name, className = "h-10 w-10" }: { name: string; className?: string }) {
  return <img src={`/brand/icons/${name}.svg`} alt="" width={24} height={24} className={className} />
}
