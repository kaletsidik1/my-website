import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // During CI/builds (for example on Vercel) you can opt to skip ESLint
  // to avoid failing the entire build for lint-only issues. This is useful
  // when you prefer linting to run in PR checks or locally but not block
  // production builds. See discussion in repository.
  eslint: {
    ignoreDuringBuilds: true,
  },

  // (Optional) tune image cache TTL if you're using the Next.js image optimizer.
  images: {
    minimumCacheTTL: 60,
  },
};

export default nextConfig;
