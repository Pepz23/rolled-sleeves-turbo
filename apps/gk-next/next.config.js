module.exports = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.ctfassets.net',
            },
            {
                protocol: 'https',
                hostname: 'assets.ctfassets.net',
            },
            {
                protocol: 'https',
                hostname: 'downloads.ctfassets.net',
            },
            {
                protocol: 'https',
                hostname: 'img.youtube.com',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'tailwindui.com',
            },
        ],
    },
    async redirects() {
        return [
            {
                source: '/how-to-choose-the-right-handleless-kitchen',
                destination: '/blog/how-to-choose-the-right-handleless-kitchen',
                permanent: true,
            },
            {
                source: '/new-product-spotlight-fluted-glazed-doors',
                destination: '/blog/new-product-spotlight-fluted-glazed-doors',
                permanent: true,
            },
            {
                source: '/fitted-kitchens-guide-top-3-tips',
                destination: '/blog/fitted-kitchens-guide-top-3-tips',
                permanent: true,
            },
            { source: '/our-projects', destination: '/our-work', permanent: true },
            { source: '/news/', destination: '/blog', permanent: true },
            { source: '/modern_kitchens/unity/', destination: '/', permanent: true },
            { source: '/modern_kitchens/alpina-matt/', destination: '/', permanent: true },
            { source: '/modern_kitchens/alpina-gloss/', destination: '/', permanent: true },
            { source: '/modern_kitchens/alpina-textured/', destination: '/', permanent: true },
            { source: '/modern_kitchens/porter-matt/', destination: '/', permanent: true },
            { source: '/modern_kitchens/porter-gloss/', destination: '/', permanent: true },
            { source: '/modern_kitchens/remo-gloss/', destination: '/', permanent: true },
            { source: '/modern_kitchens/remo-matt/', destination: '/', permanent: true },
            {
                source: '/modern_kitchens/fitzroy-paint-to-order/',
                destination: '/',
                permanent: true,
            },
            { source: '/worktops/', destination: '/', permanent: true },
            { source: '/worktops/quartz/', destination: '/', permanent: true },
            { source: '/worktops/solid-surface/', destination: '/', permanent: true },
            { source: '/worktops/granite/', destination: '/', permanent: true },
            { source: '/worktops/ultra-compact/', destination: '/', permanent: true },
            { source: '/traditional_kitchens/belsay/', destination: '/', permanent: true },
            {
                source: '/traditional_kitchens/hunton/',
                destination: '/kitchen-ranges/traditional-kitchens/hunton',
                permanent: true,
            },
            {
                source: '/traditional_kitchens/1909-shaker/',
                destination: '/kitchen-ranges/traditional-kitchens/1909-shaker',
                permanent: true,
            },
            {
                source: '/traditional_kitchens/1909-slab/',
                destination: '/kitchen-ranges/modern-kitchens/1909-slab',
                permanent: true,
            },
            {
                source: '/traditional_kitchens/1909-ovolo/',
                destination: '/kitchen-ranges/traditional-kitchens/1909-ovolo',
                permanent: true,
            },
            {
                source: '/traditional_kitchens/mornington-beaded-stocked/',
                destination: '/',
                permanent: true,
            },
            {
                source: '/traditional_kitchens/milbourne-stocked/',
                destination: '/',
                permanent: true,
            },
            {
                source: '/traditional_kitchens/mornington-shaker/',
                destination: '/',
                permanent: true,
            },
            {
                source: '/traditional_kitchens/broadoak-stocked/',
                destination: '/',
                permanent: true,
            },
            { source: '/kitchen-design-croydon/', destination: '/', permanent: true },
            {
                source: '/handleless-kitchens/',
                destination: '/kitchen-ranges/handleless-kitchens',
                permanent: true,
            },
            {
                source: '/real_kitchens/hillworth-road-brixton/',
                destination: '/our-work/hillworth-road-brixton',
                permanent: true,
            },
            {
                source: '/real_kitchens/ruxley-lane-epsom/',
                destination: '/our-work/ruxley-lane',
                permanent: true,
            },
            {
                source: '/real_kitchens/recreation-road-bromley/',
                destination: '/our-work/recreation-road-bromley',
                permanent: true,
            },
            {
                source: '/real_kitchens/westfield-avenue-sanderstead/',
                destination: '/our-work/westfield-avenue-sanderstead',
                permanent: true,
            },
            { source: '/bora/', destination: '/', permanent: true },
            { source: '/quooker/', destination: '/', permanent: true },
        ]
    },
}
