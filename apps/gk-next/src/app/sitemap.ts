import { getAllKitchens, getAllPosts, getAllProjects } from 'utils/contentful/client'

export default async function sitemap() {
    const allPosts = await getAllPosts()
    const posts = allPosts.map((post) => ({
        url: `https://www.garrettkitchens.co.uk/blog/${post.fields.slug}`,
        lastModified: post.sys.updatedAt,
    }))

    const allKitchens = await getAllKitchens()
    const kitchens = allKitchens.map((kitchen) => {
        const kitchenType = kitchen.fields.type.includes('Traditional') ? 'traditional' : 'modern'

        return {
            url: `https://www.garrettkitchens.co.uk/kitchen-ranges/${kitchenType}-kitchens/${kitchen.fields.slug}`,
            lastModified: kitchen.sys.updatedAt,
        }
    })

    const allProjects = await getAllProjects()
    const projects = allProjects.map((project) => ({
        url: `https://www.garrettkitchens.co.uk/our-work/${project.fields.slug}`,
        lastModified: project.sys.updatedAt,
    }))

    const routes = [
        '',
        '/appliances',
        '/blog',
        '/book-a-free-survey',
        '/contact-us',
        '/customer-care',
        '/finance',
        '/kitchen-ranges',
        '/kitchen-ranges/handleless-kitchens',
        '/kitchen-ranges/in-frame-kitchens',
        '/kitchen-ranges/modern-kitchens',
        '/kitchen-ranges/traditional-kitchens',
        '/our-process',
        '/our-work',
        '/privacy-policy',
        '/request-a-free-brochure',
        '/visit-showroom',
        '/why-us',
        '/worktops',
    ].map((route) => ({
        url: `https://www.garrettkitchens.co.uk${route}`,
        lastModified: new Date().toISOString(),
    }))

    return [...routes, ...posts, ...kitchens, ...projects]
}
