module.exports = {
  experimental: {
    instrumentationHook: true,
    esmExternals: "loose",
    serverComponentsExternalPackages: ["mongoose"], // <-- and this
  },
};
