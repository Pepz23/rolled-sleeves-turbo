import { createClient } from 'contentful'

import { useKitchens } from 'stores/kitchen'
import { useProjects } from 'stores/project'
import { usePosts } from 'stores/post'
import { usePages } from 'stores/page'
import type { Kitchen } from 'types/kitchen'
import type { Project } from 'types/project'
import type { Post } from 'types/post'
import type { Page } from 'types/page'

export const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
})

export const getAllKitchens = async () => {
    const res = await client.getEntries({
        content_type: 'kitchen',
    })

    if (!res) {
        throw new Error('Failed to fetch data')
    }

    const kitchens = res.items

    useKitchens.setState({ kitchens: kitchens as Kitchen[] })

    return kitchens as Kitchen[]
}

export const getKitchenBySlug = async (slug: string) => {
    const res = await client.getEntries({
        content_type: 'kitchen',
        'fields.slug': slug,
    })

    if (!res) {
        throw new Error('Failed to fetch data')
    }

    const kitchen = res.items[0]

    useKitchens.setState({ kitchen: kitchen as Kitchen })

    return kitchen as Kitchen
}

export const getAllProjects = async () => {
    const res = await client.getEntries({
        content_type: 'project',
    })

    if (!res) {
        throw new Error('Failed to fetch data')
    }

    const projects = res.items

    useProjects.setState({ projects: projects as Project[] })

    return projects as Project[]
}

export const getProjectBySlug = async (slug: string) => {
    const res = await client.getEntries({
        content_type: 'project',
        'fields.slug': slug,
    })

    if (!res) {
        throw new Error('Failed to fetch data')
    }

    const project = res.items[0]

    useProjects.setState({ project: project as Project })

    return project as Project
}

export const getAllPosts = async () => {
    const res = await client.getEntries({
        content_type: 'blogPost',
    })

    if (!res) {
        throw new Error('Failed to fetch data')
    }

    const posts = res.items

    usePosts.setState({ posts: posts as Post[] })

    return posts as Post[]
}

export const getPostBySlug = async (slug: string) => {
    const res = await client.getEntries({
        content_type: 'blogPost',
        'fields.slug': slug,
    })

    if (!res) {
        throw new Error('Failed to fetch data')
    }

    const post = res.items[0]

    usePosts.setState({ post: post as Post })

    return post as Post
}

export const getAllPages = async () => {
    const res = await client.getEntries({
        content_type: 'page',
    })

    if (!res) {
        throw new Error('Failed to fetch data')
    }

    const pages = res.items

    usePages.setState({ pages: pages as Page[] })

    return pages as Page[]
}

export const getPageBySlug = async (slug: string) => {
    const res = await client.getEntries({
        content_type: 'page',
        'fields.slug': slug,
    })

    if (!res) {
        throw new Error('Failed to fetch data')
    }

    const page = res.items[0]

    usePages.setState({ page: page as Page })

    return page as Page
}
