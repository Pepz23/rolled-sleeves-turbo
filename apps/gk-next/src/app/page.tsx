import Image from 'next/image'
import Link from 'next/link'

import { ButtonLink } from 'components/button/Button'
import { TestimonialCarousel } from 'components/carousel/TestimonialCarousel'

import CTASection from 'components/cta/CTASection'
import USPBar from 'components/usp-bar/USPBar'
import HeroCarousel from 'components/carousel/HeroCarousel'

const testimonials = [
    {
        name: 'Lucy, Ashtead',
        text: `If you’re looking for a truly customised kitchen
        experience then Garrett’s is the right choice! From start to finish, their
        attention to detail and commitment to creating a unique kitchen
        space was evident. We couldn’t be happier with our new kitchen!`,
        image: '/assets/home/Testimonial.jpg',
    },
    {
        name: 'Mark, Little Canfield',
        text: `Mike & Becky were extremely patient with us,
        making sure our vision was brought to life. The personalised
        approach, along with their extensive range of high quality products
        made the entire process seamless and enjoyable. Would
        recommend.`,
        image: '/assets/home/Testimonial2.jpg',
    },
    {
        name: 'Aaron, Walton-On-The-Hill',
        text: `Our experience with Garrett Kitchens
        was fantastic and we would highly recommend them to anyone
        looking for a new kitchen. Becky was a pleasure to work with, keeping
        us informed throughout the process and always willing to help, and
        with great attention to detail!`,
        image: '/assets/home/Testimonial3.jpg',
    },
]

const collections = [
    {
        number: 1,
        name: 'Book a Survey',
        href: '/book-a-free-survey',
        imageSrc: '/assets/home/Finalise.jpg',
        imageAlt: 'Paper and kitchen design plan',
        description: 'We’ll take accurate measurements & an initial brief.',
    },
    {
        number: 2,
        name: 'Showroom Visit',
        href: '/book-a-free-survey',
        imageSrc: '/assets/home/Showroom-Visit.jpg',
        imageAlt: 'Kitchen showroom.',
        description:
            'We’ll show you our initial design concept & guide you in selecting materials, colours & finishes.',
    },
    {
        number: 3,
        name: 'Finalise & Order',
        href: '/book-a-free-survey',
        imageSrc: '/assets/home/SurveyFin.jpg',
        imageAlt: 'Design on a wall',
        description:
            'We’ll go over your final design & quote in detail, take a deposit & place your order.',
    },
    {
        number: 4,
        name: 'Delivery & Installation',
        href: '/book-a-free-survey',
        imageSrc: '/assets/home/Place-Order.png',
        imageAlt:
            'Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.',
        description: 'We’ll deliver and install your new kitchen on the agreed date.',
    },
]

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

export default function Page() {
    return (
        <>
            <HeroCarousel />

            <section
                id="scroll-to"
                aria-labelledby="comfort-heading"
                className="px-4 mx-auto py-lg max-w-7xl md:px-6 lg:px-8"
            >
                <div className="relative px-6 lg:px-16">
                    <div className="relative flex flex-col items-center max-w-4xl mx-auto text-center">
                        <h4 className="text-sm font-semibold tracking-widest uppercase text-brand-secondary">
                            Inspired Designs
                        </h4>

                        <h2
                            id="comfort-heading"
                            className="mb-6 text-2xl tracking-tight text-gray-900 sm:text-4xl"
                        >
                            We design kitchens you won&apos;t find anywhere else, because we bring
                            the kitchen in your mind to life.
                        </h2>

                        <p className="mb-8 text-lg text-gray-500">
                            Functional shouldn&apos;t be boring. Create something unique with us;
                            something inspirational, create your space. A space like no other.
                        </p>
                        <ButtonLink href="/book-a-free-survey" className="w-fit">
                            Start Your Journey <span aria-hidden="true">&rarr;</span>
                        </ButtonLink>
                    </div>
                </div>
            </section>

            <section className="w-full bg-gray-100 py-sm lg:py-lg">
                <div
                    aria-labelledby="collection-heading"
                    className="max-w-4xl px-4 mx-auto md:px-6 lg:max-w-7xl lg:px-8"
                >
                    <div className="flex flex-col justify-between md:items-end md:flex-row">
                        <div className="md:w-3/5">
                            <h4 className="text-sm font-semibold tracking-widest uppercase text-brand-secondary">
                                A Seamless Experience
                            </h4>

                            <p className="mt-2 text-base text-gray-500">
                                Our simple 4 step process offers our customers a stress-free journey
                                in achieving their dream kitchen, unique to their desires.
                            </p>
                        </div>

                        <ButtonLink
                            href="/contact-us"
                            className="inline-block px-6 py-3 mt-4 text-xs tracking-widest text-gray-900 uppercase transition-colors bg-white border border-gray-500 hover:text-white hover:bg-brand-primaryFocus focus:bg-brand-primaryHover"
                        >
                            Learn More
                        </ButtonLink>
                    </div>

                    <div className="mt-16 space-y-12 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-3 sm:space-y-0">
                        {collections.map((collection) => (
                            <Link
                                key={collection.name}
                                href={collection.href}
                                className="relative block text-center border border-gray-400 group"
                            >
                                <div className="absolute left-0 right-0 z-40 flex items-center justify-center mx-auto text-2xl font-medium text-gray-900 bg-white border border-gray-500 rounded-full -top-7 font-body w-14 h-14">
                                    {collection.number}
                                </div>

                                <div
                                    aria-hidden="true"
                                    className="relative overflow-hidden aspect-h-2 aspect-w-3 lg:aspect-h-6 lg:aspect-w-7 group-hover:opacity-75"
                                >
                                    <Image
                                        fill
                                        src={collection.imageSrc}
                                        alt={collection.imageAlt}
                                        className="object-cover object-center"
                                    />
                                </div>

                                <div className="h-40 border-t border-gray-400">
                                    <h3 className="pt-4 mb-2 text-lg font-medium text-gray-900">
                                        {collection.name}
                                    </h3>

                                    <hr className="w-1/5 mx-auto border-b border-brand-primaryHover" />

                                    <p className="px-8 mt-3 text-gray-500 xl:px-6 sm:text-sm">
                                        {collection.description}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="flex justify-center mt-8">
                        <ButtonLink href="/book-a-free-survey" className="w-fit">
                            Start Your Journey <span aria-hidden="true">&rarr;</span>
                        </ButtonLink>
                    </div>
                </div>
            </section>

            <USPBar
                items={[
                    {
                        image: '/assets/home/icons/Bespoke-Design.png',
                        text: 'Bespoke Design',
                    },
                    {
                        image: '/assets/home/icons/UK-v2.png',
                        text: 'UK-Manufactured',
                    },
                    {
                        image: '/assets/home/icons/EV-v2.png',
                        text: 'Exceptional Value',
                    },
                ]}
            />

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
                                Choose between our modern, traditional, handeless or in-frame
                                kitchens to find a style that perfectly suits your aesthetic.
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

            <section className="bg-brand-primaryBg py-sm lg:py-10">
                <div className="px-6 mx-auto max-w-7xl lg:px-8">
                    <h2 className="text-xl leading-8 text-center text-white lg:text-lg">
                        We work with these trusted brands
                    </h2>

                    <div className="grid items-center max-w-xl grid-cols-3 mx-auto mt-4 justify-items-center gap-x-10 gap-y-6 sm:max-w-2xl md:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-6">
                        <Image
                            width="52"
                            height="36"
                            src="/assets/home/brand-logos/AEG-logo.png"
                            alt="AEG"
                        />
                        <Image
                            width="96"
                            height="36"
                            src="/assets/home/brand-logos/asko_allwhite.png"
                            alt="Asko"
                        />
                        <Image
                            width="96"
                            height="36"
                            src="/assets/home/brand-logos/Blum-v2.png"
                            alt="Blum"
                        />
                        <Image
                            width="96"
                            height="36"
                            src="/assets/home/brand-logos/Bora-v2.png"
                            alt="BORA"
                        />
                        <Image
                            width="96"
                            height="36"
                            src="/assets/home/brand-logos/NEFF-v2.png"
                            alt="Neff"
                        />
                        <Image
                            width="96"
                            height="36"
                            src="/assets/home/brand-logos/Quooker-v2.png"
                            alt="Quooker"
                        />
                    </div>
                </div>
            </section>

            <section className="w-full bg-gray-100">
                <div className="w-full max-w-4xl px-4 mx-auto py-sm lg:py-lg md:px-6 lg:max-w-7xl lg:px-8">
                    <div className="flex flex-col">
                        <h4 className="text-sm font-semibold tracking-widest uppercase text-brand-secondary">
                            An exceptional reputation
                        </h4>

                        <h2
                            id="collection-heading"
                            className="text-2xl tracking-tight text-gray-900 lg:text-3xl"
                        >
                            Testimonials
                        </h2>

                        <TestimonialCarousel testimonials={testimonials} />

                        <ButtonLink href="/book-a-free-survey" className="self-center mt-8 w-fit">
                            Start Your Journey <span aria-hidden="true">&rarr;</span>
                        </ButtonLink>
                    </div>
                </div>
            </section>

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
