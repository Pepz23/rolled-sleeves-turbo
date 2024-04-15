import Image from 'next/image'

import { ButtonLink } from 'components/button/Button'
import FourStep from 'components/four-step/FourStep'
import CTASection from 'components/cta/CTASection'

export const metadata = {
    title: 'About Us | Garrett Kitchens',
}

export default function Page() {
    return (
        <>
            <div className="relative isolate -z-10">
                <div className="overflow-hidden">
                    <div className="px-6 mx-auto max-w-7xl py-sm pt-lg lg:px-8 lg:py-lg">
                        <div className="max-w-2xl mx-auto gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                            <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                    We&apos;re changing the kitchen-buying experience.
                                </h1>
                                <p className="relative mt-6 text-lg leading-8 text-gray-500 sm:max-w-md lg:max-w-none">
                                    We see too many boring and uninspiring kitchen designs and
                                    we&apos;re on a mission to change that. Too many trade counter
                                    sales staff are calling themselves &apos;designers&apos; and
                                    we&apos;ve had enough. Our experienced design team have at least
                                    5 years working in the industry as a kitchen designer.
                                </p>
                                <p className="relative mt-6 text-lg leading-8 text-gray-500 sm:max-w-md lg:max-w-none">
                                    We&apos;ll create inspiring designs that work;{' '}
                                    <strong>remember functional shouldn&apos;t be boring.</strong>{' '}
                                    Whether you have a £15,000 budget, or a £150,000 budget, our
                                    experienced team will create some unique that you&apos;ll love
                                    for years to come. Using quality components we care about every
                                    detail that goes into manufacturing your kitchen.
                                </p>
                                <div className="mt-6">
                                    <h3 className="text-2xl font-bold text-gray-900 font-heading">
                                        Our Cabinets
                                    </h3>
                                    <p className="mt-2 text-lg leading-8 text-gray-500 sm:max-w-md lg:max-w-none">
                                        Our cabinets are always glue & dowelled not cam & dowelled
                                        for a cleaner aesthetic and stronger build quality. We only
                                        use the best hardware for your furniture; Blum BLUMOTION
                                        soft close hinges and drawers to ensure that your beautiful
                                        cabinets can withstand the test of time.
                                    </p>
                                </div>
                                <div className="mt-6">
                                    <h3 className="text-2xl font-bold text-gray-900 font-heading">
                                        Our Door Ranges
                                    </h3>
                                    <p className="mt-2 text-lg leading-8 text-gray-500 sm:max-w-md lg:max-w-none">
                                        Our customers have different budgets and needs; our kitchens
                                        start from around £15,000 and for those kitchens we use
                                        Italian manufactured doors and panels that we buy in. On the
                                        other end of the spectrum for clients who want a totally
                                        bespoke frontal or door style we can make something truly
                                        bespoke for you.
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-end gap-8 mt-14 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                                <div className="flex-none pt-32 ml-auto space-y-8 w-44 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                                    <div className="relative">
                                        <div className="relative aspect-[2/3] w-full bg-gray-900/5 shadow-lg">
                                            <Image
                                                src="/assets/why-us/Page_WhyUs-Image01-v1.jpg"
                                                alt=""
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-gray-900/10" />
                                    </div>
                                </div>
                                <div className="flex-none mr-auto space-y-8 w-44 sm:mr-0 sm:pt-52 lg:pt-36">
                                    <div className="relative">
                                        <div className="relative aspect-[2/3] w-full bg-gray-900/5 shadow-lg">
                                            <Image
                                                src="/assets/why-us/Page_WhyUs-Image02-v1.jpg"
                                                alt=""
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-gray-900/10" />
                                    </div>
                                    <div className="relative">
                                        <div className="relative aspect-[2/3] w-full bg-gray-900/5 shadow-lg">
                                            <Image
                                                src="/assets/why-us/Page_WhyUs-Image03-v1.jpg"
                                                alt=""
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-gray-900/10" />
                                    </div>
                                </div>
                                <div className="flex-none pt-32 space-y-8 w-44 sm:pt-0">
                                    <div className="relative">
                                        <div className="relative aspect-[2/3] w-full bg-gray-900/5 shadow-lg">
                                            <Image
                                                src="/assets/why-us/Page_WhyUs-Image04-v1.jpg"
                                                alt=""
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-gray-900/10" />
                                    </div>
                                    <div className="relative">
                                        <div className="relative aspect-[2/3] w-full bg-gray-900/5 shadow-lg">
                                            <Image
                                                src="/assets/why-us/Page_WhyUs-Image05-v1.jpg"
                                                alt=""
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-gray-900/10" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FourStep />

            <CTASection
                className="pt-[6.5rem] md:pt-[6.5rem] md:py-sm lg:py-32"
                title="Need some design inspiration?"
                image="/assets/home/brochureImg.jpg"
                description={`With a wide variety of styles, colours, and features, our Kitchen Brochure is
                sure to inspire you with ideas for your next, unique kitchen.`}
                whiteBg
                button={<ButtonLink href="/request-a-free-brochure">Request a Brochure</ButtonLink>}
            />
        </>
    )
}
