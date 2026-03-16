import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import { notFound } from 'next/navigation'

import PageContent from 'components/page/PageContent'
import Breadcrumbs from 'components/breadcrumbs/Breadcrumbs'
import PageStoreInitializer from 'components/util/PageStoreInitializer'
import { getAllPages, getPageBySlug } from 'utils/contentful/client'

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const { slug } = await params
    
    // Temporary logging to identify failing slugs
    console.log('[v0] generateMetadata called with slug:', slug)
    
    const page = await getPageBySlug(slug)
    
    // Log the result of the fetch
    console.log('[v0] Page fetched for slug:', slug, '- Found:', !!page)
    
    // Handle missing page
    if (!page || !page.fields) {
        console.log('[v0] Page or page.fields is undefined for slug:', slug)
        return {
            title: 'Page Not Found | Garrett Kitchens',
            description: 'The requested page could not be found.',
        }
    }

    // Safely extract values with null checks
    const title = page.fields.title ?? 'Untitled'
    const shortText = page.fields.shortText
    const description = shortText ? documentToPlainTextString(shortText as any) : ''
    const shouldIndex = page.fields.shouldGoogleIndex ?? false
    const firstImage = page.fields.images?.[0]

    return {
        title: `${title} | Garrett Kitchens`,
        description,
        robots: {
            index: shouldIndex,
            follow: shouldIndex,
            googleBot: {
                index: shouldIndex,
                follow: shouldIndex,
            },
        },
        openGraph: {
            title: `${title} | Garrett Kitchens`,
            description,
            images: firstImage?.fields?.file?.url
                ? [
                      {
                          url: firstImage.fields.file.url,
                          width: firstImage.fields.file.details?.image?.width,
                          height: firstImage.fields.file.details?.image?.height,
                          alt: firstImage.fields.description ?? title,
                      },
                  ]
                : [],
        },
    }
}

const breadcrumbs = [{ id: 1, name: 'Home', href: '/' }]

export default async function Page({ params }: { params: { slug: string } }) {
    const { slug } = await params
    
    // Temporary logging to identify failing slugs
    console.log('[v0] Page component called with slug:', slug)
    
    const page = await getPageBySlug(slug)
    
    // Log the result of the fetch
    console.log('[v0] Page component - Page fetched for slug:', slug, '- Found:', !!page)
    console.log('[v0] Page fields:', page ? Object.keys(page.fields || {}) : 'N/A')
    
    // Handle missing page with notFound()
    if (!page || !page.fields) {
        console.log('[v0] Page component - Calling notFound() for slug:', slug)
        notFound()
    }

    const pages = await getAllPages()
    
    // Log all pages for debugging
    console.log('[v0] All pages count:', pages?.length ?? 0)

    // Safely extract values with null checks
    const pageTitle = page.fields.title ?? 'Untitled'
    const pageSlug = page.fields.slug ?? slug

    return (
        <>
            <PageStoreInitializer pages={pages ?? []} page={page} />
            <Breadcrumbs
                breadcrumbs={[
                    ...breadcrumbs,
                    {
                        id: 4,
                        name: pageTitle,
                        href: pageSlug,
                    },
                ]}
            />
            <PageContent />
        </>
    )
}
