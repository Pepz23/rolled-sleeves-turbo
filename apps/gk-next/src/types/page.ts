import type { Asset, Entry, EntryFields } from 'contentful'

export interface PageFields {
    shouldGoogleIndex: EntryFields.Boolean
    title: EntryFields.Symbol
    slug: EntryFields.Symbol
    shortText: EntryFields.RichText
    text: EntryFields.RichText
    images: Asset[]
    showKitchenRangesBelowContent: EntryFields.Boolean
}

export type Page = Entry<PageFields>
