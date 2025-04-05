import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
  reactStrictMode: true,
  redirects: async () => [
    {
      source: "/",
      destination: "/en",
      permanent: true,
    }
  ]
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
