import PageContent from 'components/page/PageContent'
import Breadcrumbs from 'components/breadcrumbs/Breadcrumbs'
import PageStoreInitializer from 'components/util/PageStoreInitializer'
import { getAllPages, getPageBySlug } from 'utils/contentful/client'

export async function generateMetadata({ params }) {
    const page = await getPageBySlug(params.slug)

    return {
        title: `${page.fields.title} | Garrett Kitchens`,
        description: page.fields.shortText,
        robots: {
            index: page.fields.shouldGoogleIndex,
            follow: page.fields.shouldGoogleIndex,
            googleBot: {
                index: page.fields.shouldGoogleIndex,
                follow: page.fields.shouldGoogleIndex,
            },
        },
    }
}

const breadcrumbs = [{ id: 1, name: 'Home', href: '/' }]

export default async function Page({ params }: { params: { slug: string } }) {
    const page = await getPageBySlug(params.slug)
    const pages = await getAllPages()

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
