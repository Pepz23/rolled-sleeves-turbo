import { notFound } from 'next/navigation'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'

import Breadcrumbs from 'components/breadcrumbs/Breadcrumbs'
import KitchenContent from 'components/kitchen-ranges/KitchenContent'
import KitchenStoreInitializer from 'components/util/KitchenStoreInitializer'
import { getAllKitchens, getKitchenBySlug } from 'utils/contentful/client'

export async function generateMetadata({ params }) {
    const kitchen = await getKitchenBySlug(params.slug)

    if (!kitchen) return

    return {
        title: `${kitchen.fields.name} | Garrett Kitchens`,
        description: documentToPlainTextString(kitchen.fields.shortDescription as any),
        openGraph: {
            title: `${kitchen.fields.name} | Garrett Kitchens`,
            description: documentToPlainTextString(kitchen.fields.shortDescription as any),
            images: [
                {
                    url: kitchen.fields.images?.[0]?.fields?.file?.url,
                    width: kitchen.fields.images?.[0]?.fields?.file?.details?.image?.width,
                    height: kitchen.fields.images?.[0]?.fields?.file?.details?.image?.height,
                    alt: kitchen.fields.images?.[0]?.fields?.description,
                },
            ],
        },
    }
}

const breadcrumbs = [
    { id: 1, name: 'Home', href: '/' },
    { id: 2, name: 'Kitchen Ranges', href: '/kitchen-ranges' },
    { id: 3, name: 'Modern Kitchens', href: '/kitchen-ranges/modern-kitchens' },
]

export default async function Page({ params }: { params: { slug: string } }) {
    const kitchen = await getKitchenBySlug(params.slug)
    const kitchens = await getAllKitchens()

    if (!kitchen) return notFound()

    return (
        <>
            <KitchenStoreInitializer kitchens={kitchens} kitchen={kitchen} />
            <Breadcrumbs
                breadcrumbs={[
                    ...breadcrumbs,
                    {
                        id: 4,
                        name: kitchen.fields.name,
                        href: `/kitchen-ranges/modern-kitchens/${kitchen.fields.slug}`,
                    },
                ]}
            />
            <KitchenContent type="Modern" />
        </>
    )
}
