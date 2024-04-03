interface RatingsProps {
    rating: number,
    maxRating?: number,
    setRating: (rating: number) => void,
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

interface Carrier {
    id: number,
    rating: number,
    onTimeDeliveryPercentage: number,
    cost: number,
    specialRequirements: string[],
    availability: boolean,
}

interface APIGetCarriers {
    carriers: Carrier[],
}

export type {
    Carrier,
    RatingsProps,
    FilterBoxProps,
    CarrierCardProps,
    KeyValueProps,
    APIGetCarriers,
}
