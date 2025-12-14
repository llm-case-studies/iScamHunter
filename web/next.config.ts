import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Allow loading images from local public during dev if needed, 
  // but standard public folder works without domain config.
  // We might want experimental features later.
  // Force restart to load new Prisma Client
};

export default nextConfig;
