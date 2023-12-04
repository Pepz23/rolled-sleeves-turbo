'use client'

import { Fragment, useEffect, useState } from 'react'
import Image from 'next/image'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import { useScroll } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { PhoneIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

import { classNames } from 'utils/tailwind/classNames'
import { ButtonLink } from 'components/button/Button'

const kitchens = [
    {
        name: 'All Kitchens',
        href: '/kitchen-ranges',
        bold: true,
    },
    {
        name: 'Modern Kitchens',
        href: '/kitchen-ranges/modern-kitchens',
    },
    {
        name: 'Traditional Kitchens',
        href: '/kitchen-ranges/traditional-kitchens',
    },
    {
        name: 'Handleless Kitchens',
        href: '/kitchen-ranges/handleless-kitchens',
    },
    {
        name: 'In-Frame Kitchens',
        href: '/kitchen-ranges/in-frame-kitchens',
    },
]

const about = [
    // {
    //     name: 'Why Us',
    //     href: '/why-us',
    // },
    // {
    //     name: 'Our Process',
    //     href: '/our-process',
    // },
    {
        name: 'Our Showroom',
        href: '/visit-showroom',
    },
    {
        name: 'Our Brochure',
        href: '/request-a-free-brochure',
    },
    {
        name: 'Our Blog',
        href: '/blog',
    },
    // {
    //     name: 'Appliances',
    //     href: '/appliances',
    // },
    // {
    //     name: 'Worktops',
    //     href: '/worktops',
    // },
    {
        name: 'Contact Us',
        href: '/contact-us',
    },
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const { scrollY } = useScroll()
    const [distanceScrolled, setDistanceScrolled] = useState(0)
    const hasScrolled = distanceScrolled > 32

    useEffect(() => {
        return scrollY.on('change', (latest) => {
            setDistanceScrolled(latest)
        })
    }, [])

    return (
        <header
            id="header"
            className={`fixed top-0 z-50 w-full border-b border-gray-200 transition-all duration-500 ease-in-out ${
                hasScrolled ? 'bg-white/90 backdrop-blur shadow-sm' : 'bg-white'
            }`}
        >
            <nav
                className="flex items-center justify-between p-4 mx-auto md:p-6 max-w-7xl lg:px-8"
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Garrett Kitchens</span>
                        <Image
                            width="150"
                            height="50"
                            src="/assets/logos/logo-new.png"
                            alt="Logo"
                        />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="w-6 h-6" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    <Popover className="relative">
                        <Popover.Button className="flex items-center text-sm font-semibold leading-6 tracking-widest text-gray-900 gap-x-1">
                            Kitchens
                            <ChevronDownIcon
                                className="flex-none w-5 h-5 text-gray-400"
                                aria-hidden="true"
                            />
                        </Popover.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute z-10 w-screen max-w-sm mt-3 overflow-hidden bg-white shadow-lg -left-8 top-full rounded-3xl ring-1 ring-gray-900/5">
                                <div className="p-4">
                                    {kitchens.map((item) => (
                                        <div
                                            key={item.name}
                                            className="relative flex items-center p-4 text-sm leading-6 rounded-lg group gap-x-6 hover:bg-gray-50"
                                        >
                                            <div className="flex-auto">
                                                <a
                                                    href={item.href}
                                                    className={`block tracking-widest text-gray-900 ${
                                                        item?.bold ? 'font-bold' : ''
                                                    }`}
                                                >
                                                    {item.name}
                                                    <span className="absolute inset-0" />
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>
                    <Popover className="relative">
                        <Popover.Button className="flex items-center text-sm font-semibold leading-6 tracking-widest text-gray-900 gap-x-1">
                            About
                            <ChevronDownIcon
                                className="flex-none w-5 h-5 text-gray-400"
                                aria-hidden="true"
                            />
                        </Popover.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute z-10 w-screen max-w-sm mt-3 overflow-hidden bg-white shadow-lg -left-8 top-full rounded-3xl ring-1 ring-gray-900/5">
                                <div className="p-4">
                                    {about.map((item) => (
                                        <div
                                            key={item.name}
                                            className="relative flex items-center p-4 text-sm leading-6 rounded-lg group gap-x-6 hover:bg-gray-50"
                                        >
                                            <div className="flex-auto">
                                                <a
                                                    href={item.href}
                                                    className="block tracking-widest text-gray-900"
                                                >
                                                    {item.name}
                                                    <span className="absolute inset-0" />
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>
                    <a
                        href="/our-work"
                        className="text-sm font-semibold leading-6 tracking-widest text-gray-900"
                    >
                        Our Work
                    </a>
                </Popover.Group>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-x-4">
                    <ButtonLink href="/book-a-free-survey">
                        Book a Free Survey<span aria-hidden="true"> &rarr;</span>
                    </ButtonLink>
                    <ButtonLink href="tel:02086190004" className="flex items-center justify-center">
                        <PhoneIcon className="block w-4 h-4 text-white" />
                    </ButtonLink>
                </div>
            </nav>
            <Dialog
                as="div"
                className="lg:hidden"
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
            >
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full p-4 overflow-y-auto bg-white md:p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Garrett Kitchens</span>
                            <Image
                                width="150"
                                height="50"
                                src="/assets/logos/logo-new.png"
                                alt="Logo"
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="flow-root mt-6">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="py-6 space-y-2">
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50 tracking-widest">
                                                Kitchens
                                                <ChevronDownIcon
                                                    className={classNames(
                                                        open ? 'rotate-180' : '',
                                                        'h-5 w-5 flex-none',
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {[...kitchens].map((item) => (
                                                    <Disclosure.Button
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block py-2 pl-6 pr-3 text-sm leading-7 tracking-widest text-gray-900 rounded-lg hover:bg-gray-50"
                                                    >
                                                        {item.name}
                                                    </Disclosure.Button>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50 tracking-widest">
                                                About
                                                <ChevronDownIcon
                                                    className={classNames(
                                                        open ? 'rotate-180' : '',
                                                        'h-5 w-5 flex-none',
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {[...about].map((item) => (
                                                    <Disclosure.Button
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block py-2 pl-6 pr-3 tracking-widest text-gray-900 rounded-lg text-smleading-7 hover:bg-gray-50"
                                                    >
                                                        {item.name}
                                                    </Disclosure.Button>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                                <a
                                    href="/our-work"
                                    className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 tracking-widest text-gray-900 rounded-lg hover:bg-gray-50"
                                >
                                    Our Work
                                </a>
                            </div>
                            <div className="flex items-center py-6 gap-x-4">
                                <ButtonLink href="/book-a-free-survey">
                                    Book a Free Survey <span aria-hidden="true">&rarr;</span>
                                </ButtonLink>
                                <ButtonLink
                                    href="tel:02086190004"
                                    className="flex items-center justify-center"
                                >
                                    <PhoneIcon className="block w-4 h-4 text-white" />
                                </ButtonLink>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
