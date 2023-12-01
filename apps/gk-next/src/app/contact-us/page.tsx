import Image from 'next/image'
import { EnvelopeIcon, PhoneIcon, MapIcon } from '@heroicons/react/24/outline'

import ContactForm from 'components/form/ContactForm'

export const metadata = {
    title: 'Contact Us | Garrett Kitchens',
    description:
        'We are an independent kitchen studio who design, supply & install inspiring kitchens and other built in furniture. With a passion for quality, design, and craftsmanship, we are dedicated to helping you create a unique kitchen design that is perfect for your space.',
    openGraph: {
        title: 'Contact Us | Garrett Kitchens',
        description:
            'We are an independent kitchen studio who design, supply & install inspiring kitchens and other built in furniture. With a passion for quality, design, and craftsmanship, we are dedicated to helping you create a unique kitchen design that is perfect for your space.',
    },
}

export default function Page() {
    return (
        <section className="relative bg-white">
            <div className="relative h-64 sm:h-80 lg:h-auto lg:absolute lg:inset-0 lg:right-1/2">
                <Image
                    fill
                    className="object-cover"
                    src="/assets/contact/main-image.jpg"
                    alt="Contact Us"
                />
            </div>
            <div className="py-sm lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
                <div className="grid-cols-2 col-end-6 px-4 md:px-6 lg:px-8">
                    <div className="max-w-xl mx-auto lg:mx-0 md:max-w-lg lg:max-w-md xl:max-w-lg">
                        <h2 className="text-3xl tracking-tight text-gray-900">Contact Us</h2>
                        <p className="my-2 text-lg leading-8 text-gray-600">
                            Get in touch with one of our friendly kitchen designers about how we can
                            help.
                        </p>
                        <div className="flex flex-col items-start justify-between gap-4 mt-4 sm:flex-row sm:gap-0">
                            <div className="flex items-start gap-x-3">
                                <MapIcon className="w-5 mt-[5px] text-brand-primaryFocus"></MapIcon>
                                <ul className="text-lg leading-8 text-gray-600">
                                    <li>Unit 2 IO Trade Centre</li>
                                    <li>57A Croydon Road</li>
                                    <li>Croydon</li>
                                    <li>CR0 4WQ</li>
                                </ul>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex gap-x-3">
                                    <PhoneIcon className="w-5 text-brand-primaryFocus"></PhoneIcon>
                                    <a
                                        className="text-lg leading-8 text-gray-600 hover:text-brand-primaryFocus"
                                        href="tel:02086190004"
                                    >
                                        020 8619 0004
                                    </a>
                                </div>
                                <div className="flex gap-x-3">
                                    <EnvelopeIcon className="w-5 text-brand-primaryFocus"></EnvelopeIcon>
                                    <a
                                        className="text-lg leading-8 text-gray-600 hover:text-brand-primaryFocus"
                                        href="mailto:info@garrettkitchens.co.uk"
                                    >
                                        info@garrettkitchens.co.uk
                                    </a>{' '}
                                </div>
                            </div>
                        </div>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    )
}
