import { ButtonLink } from 'components/button/Button'
import Hero from 'components/hero/Hero'
import CTASection from 'components/cta/CTASection'
import Image from 'next/image'

export default function Page() {
    return (
        <>
            <Hero
                className=""
                subTitle=""
                title="Finance Options"
                image="/assets/home/hero/hero.png"
                description={`Our credit is offered via Novuna. Please check out how it works and the different options below.`}
                button={
                    <ButtonLink href="/request-a-free-brochure">
                        Start Your Journey <span aria-hidden="true">&rarr;</span>
                    </ButtonLink>
                }
            />

            <div className="bg-brand-greyBg">
                <div className="grid grid-cols-1 gap-4 px-4 mx-auto md:grid-cols-2 py-sm md:px-8 lg:py-lg md:gap-6 md:max-w-7xl">
                    <div className="p-6 border border-gray-500 bg-brand-primaryBg col-span-full">
                        <Image
                            src="/assets/logos/novuna-long.png"
                            alt="Novuna Logo"
                            width={500}
                            height={500}
                            className="mb-6"
                        />
                        <h3 className="mb-2 text-2xl font-bold text-white font-heading">
                            How It Works
                        </h3>
                        <hr className="w-[10%] border-b border-brand-primaryHover" />
                        <p className="mt-6 text-lg leading-8 text-white sm:max-w-md lg:max-w-none">
                            When you’re ready to place your order, we’ll take your 20% deposit
                            payment (£250 of which is to be paid on a credit card), the balance is
                            due via bank transfer. Then, your balance will be due 21 days before
                            your kitchen delivery date, or 42 days before if you’ve opted for a
                            bespoke colour/door size. The balance is to be paid via bank transfer.
                            The different finance options are available below.
                        </p>
                    </div>
                    <div className="p-6 bg-white border border-gray-500">
                        <h3 className="flex items-center justify-between mb-2 text-2xl font-bold text-gray-900 font-heading">
                            Interest Free Credit
                            <Image
                                src="/assets/logos/novuna.png"
                                alt="Novuna Logo"
                                width={90}
                                height={90}
                            />
                        </h3>
                        <hr className="w-1/5 border-b border-brand-primaryHover" />
                        <p className="mt-6 text-lg leading-8 text-gray-500 sm:max-w-md lg:max-w-none">
                            Our interest free credit is only available during certain promotional
                            periods. Ask one of the team whether IFC is available, and for which
                            ranges it might be available for.
                        </p>
                    </div>
                    <div className="p-6 bg-white border border-gray-500">
                        <h3 className="flex items-center justify-between mb-2 text-2xl font-bold text-gray-900 font-heading">
                            Interest Bearing Credit
                            <Image
                                src="/assets/logos/novuna.png"
                                alt="Novuna Logo"
                                width={90}
                                height={90}
                            />
                        </h3>
                        <hr className="w-1/5 border-b border-brand-primaryHover" />
                        <p className="mt-6 text-lg leading-8 text-gray-500 sm:max-w-md lg:max-w-none">
                            Our Interest bearing credit is always available - we offer 12.9% APR for
                            between 2-5 years for customers wanting to spread out the cost of their
                            new kitchen.
                        </p>
                    </div>
                    <div className="p-6 bg-white border border-gray-500">
                        <h3 className="flex items-center justify-between mb-2 text-2xl font-bold text-gray-900 font-heading">
                            Buy Now Pay Later
                            <Image
                                src="/assets/logos/novuna.png"
                                alt="Novuna Logo"
                                width={90}
                                height={90}
                            />
                        </h3>
                        <hr className="w-1/5 border-b border-brand-primaryHover" />
                        <p className="mt-6 text-lg leading-8 text-gray-500 sm:max-w-md lg:max-w-none">
                            Our Buy Now Pay Later offer is always available - we offer BNPL for 6
                            months on all ranges. We sometimes offer 12 months BNPL during
                            promotional periods.
                        </p>
                    </div>
                    <div className="p-6 bg-white border border-gray-500">
                        <h3 className="flex items-center justify-between mb-2 text-2xl font-bold text-gray-900 font-heading">
                            Pay Upfront
                            <Image
                                src="/assets/logos/novuna.png"
                                alt="Novuna Logo"
                                width={90}
                                height={90}
                            />
                        </h3>
                        <hr className="w-1/5 border-b border-brand-primaryHover" />
                        <p className="mt-6 text-lg leading-8 text-gray-500 sm:max-w-md lg:max-w-none">
                            If you&apos;d prefer not to take one of our finance options then simply
                            pay up front, or source your own finance.
                        </p>
                    </div>
                </div>
            </div>

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
