'use client'

import { useEffect } from 'react'

import { event } from 'utils/tracking/fpixel'

type ThankYouProps = {
    title: string
    content: React.ReactNode
    cta: React.ReactNode
}

export default function ThankYou(props: ThankYouProps) {
    const { title, content, cta } = props

    useEffect(() => {
        const timeout = setTimeout(() => {
            event('Lead')
        }, 1000)

        return () => {
            clearTimeout(timeout)
        }
    }, [])

    return (
        <section className="max-w-3xl px-4 mx-auto text-center py-sm lg:py-lg">
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                {title}
            </h1>
            <div className="mt-6 text-base leading-7 text-gray-600">{content}</div>
            <div className="flex items-center justify-center mt-10 gap-x-6">{cta}</div>
        </section>
    )
}
