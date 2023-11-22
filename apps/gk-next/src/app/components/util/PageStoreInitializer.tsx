'use client'

import { useRef } from 'react'

import { usePages } from 'stores/page'
import type { Page } from 'types/page'

type PageStoreInitializerProps = {
    pages?: Page[]
    page?: Page
}

export default function PageStoreInitializer(props: PageStoreInitializerProps) {
    const { pages = [], page = null } = props

    const initialized = useRef(false)

    if (!initialized.current) {
        usePages.setState({ pages, page })
        initialized.current = true
    }

    return null
}
