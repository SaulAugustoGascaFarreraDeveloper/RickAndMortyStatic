export interface CharacterListResponse
{
    count: number;
    next?: string;
    prev?: null;
    results: Characters[];
}

export interface Characters
{
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    image:string;
}