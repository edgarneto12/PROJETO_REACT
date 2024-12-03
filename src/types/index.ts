export interface LocationType {
    name: string
}

export interface Character {
    name: string,
    status: string, 
    species: string,
    location: LocationType,
    image: string,
    id: number
}