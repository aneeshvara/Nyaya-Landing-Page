import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://github.com/amsanaa-senthil/Nyaya',
        permanent: false,
      },
      {
        source: '/instagram',
        destination: 'https://www.instagram.com/nyaya.lk/',
        permanent: false,
      },
      {
        source: '/linkedin',
        destination: 'https://www.linkedin.com/company/nyayalk',
        permanent: false,
      },
    ]
  },
};

export default nextConfig;
