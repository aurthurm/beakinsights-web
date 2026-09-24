export const team = [
  {
    slug: "aurthur-musendame",
    name: "Aurthur Musendame",
    summary:
      "Aurthur Musendame is the person publicly named on the Beak Insights website. A detailed practice biography, qualifications list, and selected-engagement record are not published here.",
    url: "https://www.aurthurm.com",
  },
] as const

export function getPerson(slug: string) {
  return team.find((person) => person.slug === slug)
}
