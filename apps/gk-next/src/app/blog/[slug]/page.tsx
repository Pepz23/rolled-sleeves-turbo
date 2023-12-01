import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import BlogPost from 'components/blog/BlogPost'
import Breadcrumbs from 'components/breadcrumbs/Breadcrumbs'
import PostStoreInitializer from 'components/util/PostStoreInitializer'
import { getAllPosts, getPostBySlug } from 'utils/contentful/client'

export async function generateMetadata({ params }) {
    const post = await getPostBySlug(params.slug)

    return {
        title: `${post.fields.title} | Garrett Kitchens`,
        description: documentToPlainTextString(post.fields.shortText as any),
        openGraph: {
            title: `${post.fields.title} | Garrett Kitchens`,
            description: documentToPlainTextString(post.fields.shortText as any),
            images: [
                {
                    url: post.fields.images?.[0]?.fields?.file?.url,
                    width: post.fields.images?.[0]?.fields?.file?.details?.image?.width,
                    height: post.fields.images?.[0]?.fields?.file?.details?.image?.height,
                    alt: post.fields.images?.[0]?.fields?.description,
                },
            ],
        },
    }
}

const breadcrumbs = [
    { id: 1, name: 'Home', href: '/' },
    { id: 2, name: 'Blog', href: '/blog' },
]

export default async function Page({ params }: { params: { slug: string } }) {
    const post = await getPostBySlug(params.slug)
    const posts = await getAllPosts()

    return (
        <>
            <PostStoreInitializer posts={posts} post={post} />
            <Breadcrumbs
                breadcrumbs={[
                    ...breadcrumbs,
                    {
                        id: 4,
                        name: post.fields.title,
                        href: `/blog/${post.fields.slug}`,
                    },
                ]}
            />
            <BlogPost />
        </>
    )
}
