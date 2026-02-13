// Next.js config for the memory camera app.
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isProd = process.env.NODE_ENV === "production";

const basePath = isProd && repo ? `/${repo}` : "";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath ? `${basePath}/` : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath
  }
};

module.exports = nextConfig;
