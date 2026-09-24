import Link from "next/link"

export default function NotFound() {
  return (
    <div className="container py-20">
      <h1 className="font-serif text-4xl md:text-5xl">That page is not on this site.</h1>
      <p className="measure mt-4">
        The address may have changed. Try the services, the work, or search.
      </p>
      <ul className="mt-6 space-y-2">
        <li>
          <Link className="underline underline-offset-4" href="/what-we-do">
            What we do
          </Link>
        </li>
        <li>
          <Link className="underline underline-offset-4" href="/work">
            Work
          </Link>
        </li>
        <li>
          <Link className="underline underline-offset-4" href="/search">
            Search
          </Link>
        </li>
      </ul>
    </div>
  )
}
