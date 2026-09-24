/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/works", destination: "/work", permanent: true },
      { source: "/works/healthcare/felicity-lims", destination: "/work/felicity-lims", permanent: true },
      { source: "/works/healthcare/felicity-lablink", destination: "/work/felicity-lablink", permanent: true },
      { source: "/works/analytics/beakdash", destination: "/work/beakdash", permanent: true },
      { source: "/works/markets/mql5-products", destination: "/work", permanent: true },
      { source: "/blog", destination: "/insights", permanent: true },
    ]
  },
}

export default nextConfig
