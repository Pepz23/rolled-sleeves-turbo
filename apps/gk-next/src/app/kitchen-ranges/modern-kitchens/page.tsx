import Breadcrumbs from 'components/breadcrumbs/Breadcrumbs'
import KitchenRangeContent from 'components/kitchen-ranges/KitchenRangeContent'
import KitchenStoreInitializer from 'components/util/KitchenStoreInitializer'
import type { KitchenRangeContentProps } from 'components/kitchen-ranges/KitchenRangeContent'
import { getAllKitchens } from 'utils/contentful/client'

export const metadata = {
    title: 'Modern Kitchens | Garrett Kitchens',
    description: `Our modern kitchen collection features a range of handleless kitchens, as
    well as handled kitchens for those who want beautiful handles to be seen.
    Whether you’re looking for an industrial aesthetic or more minimalist
    styling, our kitchen ranges combined with our experienced designers can
    bring your ideas to life.`,
    openGraph: {
        title: 'Modern Kitchens | Garrett Kitchens',
        description: `Our modern kitchen collection features a range of handleless kitchens, as
        well as handled kitchens for those who want beautiful handles to be seen.
        Whether you’re looking for an industrial aesthetic or more minimalist
        styling, our kitchen ranges combined with our experienced designers can
        bring your ideas to life.`,
    },
}

const breadcrumbs = [
    { id: 1, name: 'Home', href: '/' },
    { id: 2, name: 'Kitchen Ranges', href: '/kitchen-ranges' },
    { id: 3, name: 'Modern Kitchens', href: '/kitchen-ranges/modern-kitchens' },
]

const content: KitchenRangeContentProps = {
    type: 'Modern',
    title: 'Modern Kitchens',
    description: `Our modern kitchen collection features a range of handleless kitchens, as
    well as handled kitchens for those who want beautiful handles to be seen.
    Whether you’re looking for an industrial aesthetic or more minimalist
    styling, our kitchen ranges combined with our experienced designers can
    bring your ideas to life.`,
    filters: [
        {
            id: 'priceGroup',
            name: 'Price Group',
            options: [
                { value: '£', label: '£' },
                { value: '££', label: '££' },
                { value: '£££', label: '£££' },
                { value: '££££', label: '££££' },
                { value: '£££££', label: '£££££' },
            ],
        },
    ],
}

export default async function Page() {
    const kitchens = await getAllKitchens()

    return (
        <>
            <KitchenStoreInitializer kitchens={kitchens} />
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <KitchenRangeContent {...content} />
        </>
    )
}
