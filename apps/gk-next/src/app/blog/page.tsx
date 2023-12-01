import Breadcrumbs from 'components/breadcrumbs/Breadcrumbs'
import PostStoreInitializer from 'components/util/PostStoreInitializer'
import BlogList from 'components/blog/BlogList'
import { getAllPosts } from 'utils/contentful/client'

export const metadata = {
    title: 'Blog | Garrett Kitchens',
    description: 'Learn more about our kitchens, our process, and our company.',
    openGraph: {
        title: 'Blog | Garrett Kitchens',
        description: 'Learn more about our kitchens, our process, and our company.',
    },
}

const breadcrumbs = [
    { id: 1, name: 'Home', href: '/' },
    { id: 2, name: 'Blog', href: '/blog' },
]

export default async function Page() {
    const posts = await getAllPosts()

    return (
        <>
            <PostStoreInitializer posts={posts} />
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <BlogList />
        </>
    )
}
