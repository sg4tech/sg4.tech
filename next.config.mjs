const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const pagesBasePath = process.env.PAGES_BASE_PATH ?? (isGitHubActions && repositoryName ? `/${repositoryName}` : "");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  ...(pagesBasePath
    ? {
        basePath: pagesBasePath,
        assetPrefix: pagesBasePath
      }
    : {})
};

export default nextConfig;
