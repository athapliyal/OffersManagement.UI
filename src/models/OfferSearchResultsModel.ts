import { Offer } from './OfferModel';

export interface OfferSearchResults {
    offers: Offer[];
    offersCount: number;
}