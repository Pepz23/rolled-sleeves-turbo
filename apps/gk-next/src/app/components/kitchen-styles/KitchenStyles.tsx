import Link from 'next/link'
import Image from 'next/image'

import { ButtonLink } from 'components/button/Button'

const kitchens = [
    {
        name: 'Modern Kitchens',
        href: '/kitchen-ranges/modern-kitchens',
        imageSrc: '/assets/home/Modern.jpg',
        imageAlt: 'Brown leather key ring with brass metal loops and rivets on wood table.',
    },
    {
        name: 'Traditional Kitchens',
        href: '/kitchen-ranges/traditional-kitchens',
        imageSrc: '/assets/home/Traditional-Kitchens.jpg',
        imageAlt: 'Natural leather mouse pad on white desk next to porcelain mug and keyboard.',
    },
    {
        name: 'Handleless Kitchens',
        href: '/kitchen-ranges/handleless-kitchens',
        imageSrc: '/assets/home/Handleless.jpg',
        imageAlt:
            'Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.',
    },
    {
        name: 'In-Frame Kitchens',
        href: '/kitchen-ranges/in-frame-kitchens',
        imageSrc: '/assets/home/In-frame.jpg',
        imageAlt:
            'Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.',
    },
]

export default function KitchenStyles() {
    return (
        <section className="w-full bg-gray-100 py-sm lg:py-lg">
            <div
                aria-labelledby="collection-heading"
                className="max-w-4xl px-4 mx-auto md:px-6 lg:max-w-7xl lg:px-8"
            >
                <div className="flex flex-col justify-between md:items-end md:flex-row">
                    <div className="md:w-3/5">
                        <h4 className="text-sm font-semibold tracking-widest uppercase text-brand-secondary">
                            Our Kitchen Styles
                        </h4>

                        <p className="mt-2 text-base text-gray-500">
                            Choose between our modern, traditional, handeless or in-frame kitchens
                            to find a style that perfectly suits your aesthetic.
                        </p>
                    </div>
                </div>

                <div className="mt-4 space-y-4 lg:mt-10 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-2 lg:gap-3 sm:space-y-0">
                    {kitchens.map((kitchen) => (
                        <Link
                            key={kitchen.name}
                            href={kitchen.href}
                            className="relative block text-center border border-gray-400 group"
                        >
                            <div className="absolute z-10 w-full h-full bg-black opacity-40"></div>

                            <div
                                aria-hidden="true"
                                className="relative flex items-center justify-center overflow-hidden h-96"
                            >
                                <Image
                                    fill
                                    src={kitchen.imageSrc}
                                    alt={kitchen.imageAlt}
                                    className="object-cover object-center"
                                />

                                <h2 className="absolute z-40 px-6 mx-auto text-3xl text-white hover:text-white">
                                    {kitchen.name}
                                </h2>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="flex justify-center mt-8">
                    <ButtonLink href="/kitchen-ranges" className="w-fit">
                        View All Kitchens <span aria-hidden="true">&rarr;</span>
                    </ButtonLink>
                </div>
            </div>
        </section>
    )
}
