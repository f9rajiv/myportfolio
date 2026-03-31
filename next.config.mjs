/** @type {import('next').NextConfig} */
// Step 1: Detect GitHub Actions build (used by GitHub Pages workflow).
const isGithubActionsBuild = process.env.GITHUB_ACTIONS === "true";
// Step 2: Set repo path only for GitHub Pages builds.
const basePath = isGithubActionsBuild ? "/myportfolio" : "";

const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Step 3: Apply dynamic path so local dev works at "/" and Pages works at "/myportfolio".
  basePath,
  assetPrefix: basePath ? `${basePath}/` : "",
  // Step 4: Expose the same base path to client components for asset/link helpers.
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  
};

export default nextConfig;
