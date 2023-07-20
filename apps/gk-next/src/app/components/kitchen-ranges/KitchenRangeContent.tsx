'use client'

import { Fragment, useMemo, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Dialog, Disclosure, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, PlusIcon } from '@heroicons/react/20/solid'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import { classNames } from 'utils/tailwind/classNames'
import { useKitchens } from 'stores/kitchen'
import { Button, ButtonLink } from 'components/button/Button'
import { removeDuplicates } from 'utils/general/removeDuplicates'

export type KitchenRangeContentProps = {
    type: 'Modern' | 'Traditional' | 'Handleless' | 'In-Frame' | 'All'
    title: string
    description: string
    showViewAllKitchens?: boolean
    showKitchenCategories?: boolean
    filters: {
        id: string
        name: string
        options: {
            value: string
            label: string
        }[]
    }[]
}

export default function KitchenRangeContent(props: KitchenRangeContentProps) {
    const {
        type,
        title,
        description,
        showKitchenCategories = true,
        showViewAllKitchens = true,
        filters,
    } = props

    const [currentRefinements, setCurrentRefinements] = useState({
        type: [],
        priceGroup: [],
    })

    const pathname = usePathname()
    const { getFilteredKitchens, getKitchensByType } = useKitchens()
    const kitchens = getFilteredKitchens(type, currentRefinements)
    const allKitchens = getKitchensByType(type)
    const types = useMemo(() => {
        return removeDuplicates(allKitchens.map((kitchen) => kitchen.fields.type).flat())
    }, [allKitchens])
    const priceGroups = useMemo(() => {
        return removeDuplicates(allKitchens.map((kitchen) => kitchen.fields.priceGroup))
    }, [allKitchens])

    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
    const [kitchensToShowCount, setKitchensToShowCount] = useState(6)

    const allKitchensShown = kitchensToShowCount >= kitchens.length
    const kitchensToShow = kitchens.slice(0, kitchensToShowCount)

    return (
        <div className="bg-white">
            <div>
                {/* Mobile filter dialog */}
                <Transition.Root show={mobileFiltersOpen} as={Fragment}>
                    <Dialog
                        as="div"
                        className="relative z-40 lg:hidden"
                        onClose={setMobileFiltersOpen}
                    >
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black bg-opacity-25" />
                        </Transition.Child>
                        <div className="fixed inset-0 z-40 flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="relative flex flex-col w-full h-full max-w-xs py-4 pb-6 ml-auto overflow-y-auto bg-white shadow-xl">
                                    <div className="flex items-center justify-between px-4">
                                        <h2 className="text-lg text-gray-900">Filters</h2>
                                        <button
                                            type="button"
                                            className="flex items-center justify-center w-10 h-10 p-2 -mr-2 text-gray-400 hover:text-gray-500"
                                            onClick={() => setMobileFiltersOpen(false)}
                                        >
                                            <span className="sr-only">Close menu</span>
                                            <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                                        </button>
                                    </div>
                                    {/* Filters */}
                                    <form className="mt-4">
                                        {filters.map((section) => (
                                            <Disclosure
                                                as="div"
                                                key={section.name}
                                                className="pt-4 pb-4 border-t border-gray-200"
                                            >
                                                {({ open }) => (
                                                    <fieldset>
                                                        <legend className="w-full px-2">
                                                            <Disclosure.Button className="flex items-center justify-between w-full p-2 text-gray-400 hover:text-gray-500">
                                                                <span className="text-sm font-medium text-gray-900">
                                                                    {section.name}
                                                                </span>
                                                                <span className="flex items-center ml-6 h-7">
                                                                    <ChevronDownIcon
                                                                        className={classNames(
                                                                            open
                                                                                ? '-rotate-180'
                                                                                : 'rotate-0',
                                                                            'h-5 w-5 transform',
                                                                        )}
                                                                        aria-hidden="true"
                                                                    />
                                                                </span>
                                                            </Disclosure.Button>
                                                        </legend>
                                                        <Disclosure.Panel className="px-4 pt-4 pb-2">
                                                            <div className="space-y-6">
                                                                {section.options.map(
                                                                    (option, optionIdx) =>
                                                                        (types?.includes(
                                                                            option.value,
                                                                        ) ||
                                                                            priceGroups?.includes(
                                                                                option.value,
                                                                            )) && (
                                                                            <div
                                                                                key={option.value}
                                                                                className="flex items-center"
                                                                            >
                                                                                <input
                                                                                    id={`${section.id}-${optionIdx}-mobile`}
                                                                                    name={
                                                                                        section.id
                                                                                    }
                                                                                    defaultValue={
                                                                                        option.value
                                                                                    }
                                                                                    type="checkbox"
                                                                                    className="w-4 h-4 border-gray-300 rounded text-brand-primary focus:ring-brand-primary"
                                                                                    checked={currentRefinements[
                                                                                        section.id
                                                                                    ]?.includes(
                                                                                        option.value,
                                                                                    )}
                                                                                    onChange={(
                                                                                        e,
                                                                                    ) => {
                                                                                        if (
                                                                                            e.target
                                                                                                .checked
                                                                                        ) {
                                                                                            setCurrentRefinements(
                                                                                                (
                                                                                                    prev,
                                                                                                ) => {
                                                                                                    return {
                                                                                                        ...prev,
                                                                                                        [section.id]:
                                                                                                            [
                                                                                                                ...prev[
                                                                                                                    section
                                                                                                                        .id
                                                                                                                ],
                                                                                                                e
                                                                                                                    .target
                                                                                                                    .value,
                                                                                                            ],
                                                                                                    }
                                                                                                },
                                                                                            )
                                                                                        } else {
                                                                                            setCurrentRefinements(
                                                                                                (
                                                                                                    prev,
                                                                                                ) => {
                                                                                                    return {
                                                                                                        ...prev,
                                                                                                        [section.id]:
                                                                                                            prev[
                                                                                                                section
                                                                                                                    .id
                                                                                                            ].filter(
                                                                                                                (
                                                                                                                    item,
                                                                                                                ) =>
                                                                                                                    item !==
                                                                                                                    e
                                                                                                                        .target
                                                                                                                        .value,
                                                                                                            ),
                                                                                                    }
                                                                                                },
                                                                                            )
                                                                                        }
                                                                                    }}
                                                                                />
                                                                                <label
                                                                                    htmlFor={`${section.id}-${optionIdx}-mobile`}
                                                                                    className="ml-3 text-sm text-gray-500"
                                                                                >
                                                                                    {option.label}
                                                                                </label>
                                                                            </div>
                                                                        ),
                                                                )}
                                                            </div>
                                                        </Disclosure.Panel>
                                                    </fieldset>
                                                )}
                                            </Disclosure>
                                        ))}
                                    </form>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>
                <div className="px-4 mx-auto md:px-6 lg:max-w-7xl lg:px-8">
                    <div className="pb-10 border-b border-gray-200 pt-lg">
                        <h1 className="text-4xl tracking-tight text-gray-900">{title}</h1>
                        <p className="mt-4 text-base text-gray-500">{description}</p>
                        {showViewAllKitchens && (
                            <ButtonLink href="/kitchen-ranges" className="mt-4">
                                View All Kitchens
                            </ButtonLink>
                        )}
                    </div>
                    <div className="pt-sm pb-sm lg:pb-lg lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
                        <aside>
                            <h2 className="sr-only">Filters</h2>
                            <button
                                type="button"
                                className="inline-flex items-center lg:hidden"
                                onClick={() => setMobileFiltersOpen(true)}
                            >
                                <span className="text-sm font-medium text-gray-700">Filters</span>
                                <PlusIcon
                                    className="flex-shrink-0 w-5 h-5 ml-1 text-gray-400"
                                    aria-hidden="true"
                                />
                            </button>
                            <div className="hidden lg:block">
                                <form className="space-y-10 divide-y divide-gray-200">
                                    {showKitchenCategories && (
                                        <ul className="space-y-2 text-sm">
                                            {!pathname.includes('modern') && (
                                                <li>
                                                    <a
                                                        href="/kitchen-ranges/modern-kitchens"
                                                        className="font-bold text-brand-primary hover:underline"
                                                    >
                                                        Modern Kitchens
                                                    </a>
                                                </li>
                                            )}
                                            {!pathname.includes('traditional') && (
                                                <li>
                                                    <a
                                                        href="/kitchen-ranges/traditional-kitchens"
                                                        className="font-bold text-brand-primary hover:underline"
                                                    >
                                                        Traditional Kitchens
                                                    </a>
                                                </li>
                                            )}
                                            {!pathname.includes('handleless') && (
                                                <li>
                                                    <a
                                                        href="/kitchen-ranges/handleless-kitchens"
                                                        className="font-bold text-brand-primary hover:underline"
                                                    >
                                                        Handleless Kitchens
                                                    </a>
                                                </li>
                                            )}
                                            {!pathname.includes('in-frame') && (
                                                <li>
                                                    <a
                                                        href="/kitchen-ranges/in-frame-kitchens"
                                                        className="font-bold text-brand-primary hover:underline"
                                                    >
                                                        In-Frame Kitchens
                                                    </a>
                                                </li>
                                            )}
                                        </ul>
                                    )}
                                    {filters.map((section, sectionIdx) => (
                                        <div
                                            key={section.name}
                                            className={
                                                sectionIdx === 0 && !showKitchenCategories
                                                    ? null
                                                    : 'pt-10'
                                            }
                                        >
                                            <fieldset>
                                                <legend className="block text-sm font-medium text-gray-900">
                                                    {section.name}
                                                </legend>
                                                <div className="pt-6 space-y-3">
                                                    {section.options.map(
                                                        (option, optionIdx) =>
                                                            (types?.includes(option.value) ||
                                                                priceGroups?.includes(
                                                                    option.value,
                                                                )) && (
                                                                <div
                                                                    key={option.value}
                                                                    className="flex items-center"
                                                                >
                                                                    <input
                                                                        id={`${section.id}-${optionIdx}`}
                                                                        name={section.id}
                                                                        defaultValue={option.value}
                                                                        type="checkbox"
                                                                        className="w-4 h-4 border-gray-300 rounded text-brand-primary focus:ring-brand-primary"
                                                                        checked={currentRefinements[
                                                                            section.id
                                                                        ]?.includes(option.value)}
                                                                        onChange={(e) => {
                                                                            if (e.target.checked) {
                                                                                setCurrentRefinements(
                                                                                    (prev) => {
                                                                                        return {
                                                                                            ...prev,
                                                                                            [section.id]:
                                                                                                [
                                                                                                    ...prev[
                                                                                                        section
                                                                                                            .id
                                                                                                    ],
                                                                                                    e
                                                                                                        .target
                                                                                                        .value,
                                                                                                ],
                                                                                        }
                                                                                    },
                                                                                )
                                                                            } else {
                                                                                setCurrentRefinements(
                                                                                    (prev) => {
                                                                                        return {
                                                                                            ...prev,
                                                                                            [section.id]:
                                                                                                prev[
                                                                                                    section
                                                                                                        .id
                                                                                                ].filter(
                                                                                                    (
                                                                                                        item,
                                                                                                    ) =>
                                                                                                        item !==
                                                                                                        e
                                                                                                            .target
                                                                                                            .value,
                                                                                                ),
                                                                                        }
                                                                                    },
                                                                                )
                                                                            }
                                                                        }}
                                                                    />
                                                                    <label
                                                                        htmlFor={`${section.id}-${optionIdx}`}
                                                                        className="ml-3 text-sm text-gray-600"
                                                                    >
                                                                        {option.label}
                                                                    </label>
                                                                </div>
                                                            ),
                                                    )}
                                                </div>
                                            </fieldset>
                                        </div>
                                    ))}
                                </form>
                            </div>
                        </aside>
                        <section
                            aria-labelledby="product-heading"
                            className="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3"
                        >
                            <h2 id="product-heading" className="sr-only">
                                Kitchens
                            </h2>
                            <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
                                {kitchensToShow.map((kitchen, index) => {
                                    const kitchenType = kitchen.fields.type.includes('Traditional')
                                        ? 'traditional'
                                        : 'modern'

                                    return (
                                        <div
                                            key={index}
                                            className="relative flex flex-col overflow-hidden bg-white border border-gray-200 group"
                                        >
                                            <div className="relative bg-gray-200 group-hover:opacity-75 h-96">
                                                <Image
                                                    fill
                                                    src={`https:${kitchen.fields.images[0].fields.file.url}`}
                                                    alt={kitchen.fields.images[0].fields.title}
                                                    className="object-cover object-center w-full h-full sm:h-full sm:w-full"
                                                />
                                            </div>
                                            <div className="flex flex-col flex-1 p-4 space-y-2">
                                                <h3 className="text-sm text-gray-900">
                                                    <Link
                                                        href={`/kitchen-ranges/${kitchenType}-kitchens/${kitchen.fields.slug}`}
                                                    >
                                                        <span
                                                            aria-hidden="true"
                                                            className="absolute inset-0"
                                                        />
                                                        {kitchen.fields.name}
                                                    </Link>
                                                </h3>
                                                <p className="space-y-3 text-sm text-gray-500">
                                                    {documentToReactComponents(
                                                        kitchen.fields.shortDescription as any,
                                                    )}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            {!allKitchensShown && (
                                <div className="flex justify-center mt-8">
                                    <Button
                                        onClick={() => setKitchensToShowCount((count) => count + 6)}
                                    >
                                        Load More
                                    </Button>
                                </div>
                            )}
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}
