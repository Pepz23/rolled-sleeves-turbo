import Breadcrumbs from 'components/breadcrumbs/Breadcrumbs'
import KitchenRangeContent from 'components/kitchen-ranges/KitchenRangeContent'
import KitchenStoreInitializer from 'components/util/KitchenStoreInitializer'
import type { KitchenRangeContentProps } from 'components/kitchen-ranges/KitchenRangeContent'
import { getAllKitchens } from 'utils/contentful/client'

export const metadata = {
    title: 'Kitchen Ranges | Garrett Kitchens',
}

const breadcrumbs = [
    { id: 1, name: 'Home', href: '/' },
    { id: 2, name: 'Kitchen Ranges', href: '/kitchen-ranges' },
]

const content: KitchenRangeContentProps = {
    type: 'All',
    title: 'Kitchen Ranges',
    description: `Browse our stunning collection of kitchen ranges for some inspiration for
    your new project. Whether you’re looking for a traditional shaker kitchen, a
    modern kitchen, or a handleless kitchen, we’ve got plenty of styles to suit
    your personality.`,
    showViewAllKitchens: false,
    showKitchenCategories: false,
    filters: [
        {
            id: 'type',
            name: 'Kitchen Type',
            options: [
                { value: 'Traditional', label: 'Traditional' },
                { value: 'Modern', label: 'Modern' },
                { value: 'Handleless', label: 'Handleless' },
                { value: 'In-Frame', label: 'In-Frame' },
            ],
        },
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
