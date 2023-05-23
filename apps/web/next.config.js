/** @type {import("next").NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ["ui"],
  experimental: {
    esmExternals: "loose",
    appDir: true,
    serverActions: true,
    serverComponentsExternalPackages: ["mongoose", "@typegoose/typegoose", "mongodb", "ui", "arch"]
  },
  webpack: (config) => {
    config.experiments = { ...config.experiments, topLevelAwait: true }
    config.resolve.fallback = {
      "aws-crt": false,
      "kerberos": false,
      "snappy": false,
      "aws-4": false,
      "mongodb-client-encryption": false,
      "@aws-sdk/credential-providers": false,
      "@mongodb-js/zstd": false,
    };
    return config;
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "Authorization, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  }
};
