export interface Offer {
    id: string,
    title: string,
    description: string,
    startDate: Date,
    endDate: Date,
    category: OfferCategory,
    status: OfferStatus
}

export enum OfferCategory { Clothing = 0, Food = 1, Sports = 2 };
export enum OfferStatus { Published = 0, Draft = 1, Pending = 2 };