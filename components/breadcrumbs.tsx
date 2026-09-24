import Link from "next/link"
import { JsonLd } from "@/components/json-ld"
import { site } from "@/content/site"

export function Breadcrumbs({ items }: { items: { name: string; href: string }[] }) {
  const trail = [{ name: "Home", href: "/" }, ...items]
  return (
    <>
      <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
        <ol className="flex flex-wrap gap-2">
          {trail.map((item, index) => {
            const last = index === trail.length - 1
            return (
              <li key={item.href} className="flex items-center gap-2">
                {index > 0 ? <span aria-hidden="true">/</span> : null}
                {last ? (
                  <span aria-current="page">{item.name}</span>
                ) : (
                  <Link href={item.href} className="underline-offset-4 hover:underline">
                    {item.name}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: trail.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: new URL(item.href, site.url).toString(),
          })),
        }}
      />
    </>
  )
}
