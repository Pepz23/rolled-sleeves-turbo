import { HTMLAttributes } from 'react'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

type TextImgSectionProps = HTMLAttributes<HTMLDivElement> & {
    title: string
    subTitle: string
    description: string
    image: string
    alt: string
    button: React.ReactNode
    flipped?: boolean
    whiteBg?: boolean
}

export default function TextImgSection(props: TextImgSectionProps) {
    const {
        title,
        subTitle,
        image,
        description,
        alt,
        button,
        flipped = false,
        whiteBg = false,
        className = '',
    } = props

    return (
        <section className={twMerge('', className, whiteBg ? 'bg-white' : 'bg-gray-100')}>
            <div className="px-4 mx-auto overflow-hidden py-sm md:max-w-7xl md:px-8 lg:py-lg">
                <div
                    className={`flex flex-col justify-between h-[30rem] md:h-[25rem] lg:h-[30rem] gap-4 md:gap-6 lg:gap-x-12 w-full ${
                        flipped ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                >
                    <div className="relative w-full h-full md:w-1/2">
                        <Image
                            fill
                            src={image}
                            alt={alt}
                            className="object-cover object-center w-full h-full"
                        />
                    </div>

                    <div className="relative flex flex-col justify-center w-full md:w-1/2">
                        {subTitle && (
                            <h4 className="text-sm font-semibold tracking-widest uppercase text-brand-secondary">
                                Inspired Designs
                            </h4>
                        )}

                        <h1 className="text-2xl tracking-tight text-gray-900 lg:text-3xl">
                            {title}
                        </h1>

                        <p className="mt-4 text-gray-500 text-md">{description}</p>
                    </div>
                </div>

                {button && <div className="flex justify-center mt-8">{button}</div>}
            </div>
        </section>
    )
}
