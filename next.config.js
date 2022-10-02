/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

// module.exports = nextConfig

module.exports = (_phase, { defaultConfig }) => {
  const plugins = [withStaticImport, withBundleAnalyzer, withCustomWebpack]
  return plugins.reduce((acc, plugin) => plugin(acc), { ...defaultConfig, ...config })
}
