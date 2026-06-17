import type { NextConfig } from "next";

/**
 * Config pour un déploiement statique sur GitHub Pages.
 * Le site est servi depuis https://oussaid-bm.github.io/PortFolio/
 * - output: "export"  -> génère un site 100% statique dans /out
 * - basePath          -> préfixe toutes les routes par /PortFolio
 * - images.unoptimized -> l'optimiseur d'images Next ne tourne pas sans serveur
 */
const repoName = "PortFolio";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
