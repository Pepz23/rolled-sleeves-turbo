import { create } from 'zustand'

import type { Page } from 'types/page'

type usePagesProps = {
    pages: Page[]
    page: Page
}

export const usePages = create<usePagesProps>(() => ({
    pages: [],
    page: null,
}))
