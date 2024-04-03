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
    name: string,
    rating: number,
    onTimeDeliveryPercentage: number,
    cost: number,
    specialRequirements: string[],
    availability: boolean,
    isSelected: boolean,
    onClick: (carrier: Carrier) => void,
    carrier: Carrier,
}

interface KeyValueProps {
    title: string,
    value: string,
}

interface Carrier {
    id: number,
    name: string,
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
