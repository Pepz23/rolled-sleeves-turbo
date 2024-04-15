import { notFound } from 'next/navigation'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'

import PageContent from 'components/page/PageContent'
import Breadcrumbs from 'components/breadcrumbs/Breadcrumbs'
import PageStoreInitializer from 'components/util/PageStoreInitializer'
import { getAllPages, getPageBySlug } from 'utils/contentful/client'

export async function generateMetadata({ params }) {
    const page = await getPageBySlug(params.slug)

    if (!page) return

    return {
        title: `${page.fields.title} | Garrett Kitchens`,
        description: documentToPlainTextString(page.fields.shortText as any),
        robots: {
            index: page.fields.shouldGoogleIndex,
            follow: page.fields.shouldGoogleIndex,
            googleBot: {
                index: page.fields.shouldGoogleIndex,
                follow: page.fields.shouldGoogleIndex,
            },
        },
        openGraph: {
            title: `${page.fields.title} | Garrett Kitchens`,
            description: documentToPlainTextString(page.fields.shortText as any),
            images: [
                {
                    url: page.fields.images?.[0]?.fields?.file?.url,
                    width: page.fields.images?.[0]?.fields?.file?.details?.image?.width,
                    height: page.fields.images?.[0]?.fields?.file?.details?.image?.height,
                    alt: page.fields.images?.[0]?.fields?.description,
                },
            ],
        },
    }
}

const breadcrumbs = [{ id: 1, name: 'Home', href: '/' }]

export default async function Page({ params }: { params: { slug: string } }) {
    const page = await getPageBySlug(params.slug)
    const pages = await getAllPages()

    if (!page) notFound()

    return (
        <>
            <PageStoreInitializer pages={pages} page={page} />
            <Breadcrumbs
                breadcrumbs={[
                    ...breadcrumbs,
                    {
                        id: 4,
                        name: page.fields.title,
                        href: page.fields.slug,
                    },
                ]}
            />
            <PageContent />
        </>
    )
}
