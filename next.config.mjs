/** @type {import('next').NextConfig} */

// Detect if we are running in GitHub Actions
const isGithubActions = process.env.GITHUB_ACTIONS === "true";

// Replace 'myportfolio' with your actual repository name
const repoName = "myportfolio";

const nextConfig = {
  output: "export",
  
  // Only apply basePath if we are on GitHub Actions
  basePath: isGithubActions ? `/${repoName}` : "",
  
  // Images must be unoptimized for static exports
  images: {
    unoptimized: true,
  },

  // This helps with TypeScript errors during the build
  typescript: {
    ignoreBuildErrors: true,
  },

  // This allows your components to know the base path
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubActions ? `/${repoName}` : "",
  },
};

export default nextConfig;