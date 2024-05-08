export interface Movie extends MovieSummary{
    box_office: string
    cinematographers: string[]
    poster: string
    producers: string[]
    summary: string
}

export interface MovieSummary{
    id: string
    title: string
    duration: string
    budget: string
    release_date: string
}

export enum CurrencyType {
    BRL = 'BRL',
    EUR = 'EUR',
    JPY = 'JPY',
    MXN = 'MXN',
    RON = 'RON',
    SEK = 'SEK',
    USN = 'USN',
    GBP = 'GBP'
}

export interface Filters {
    title: string,
    year: string
}