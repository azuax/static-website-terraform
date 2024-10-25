/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    output: "export",
};

// module.exports = nextConfig;
module.exports = {
    output: "export",
    images: {
        unoptimized: true,
    },
};
