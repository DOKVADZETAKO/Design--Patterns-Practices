export interface IBmw {
    model: BmwType;
    price: number;
    maxSpeed: number;
}

export type BmwType = 'X5' | 'X6';