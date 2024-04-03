interface RatingsProps {
    rating: number;
    maxRating?: number;
}

interface FilterBoxProps {
    title: string,
    children: React.ReactNode,
}

interface CarrierCardProps {
    title: string,
}

interface KeyValueProps {
    title: string,
    value: string,
}

export type {
    RatingsProps,
    FilterBoxProps,
    CarrierCardProps,
    KeyValueProps,
}