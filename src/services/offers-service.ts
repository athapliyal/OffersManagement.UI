import axios from 'axios';
import { Offer } from '../models/OfferModel';
import { OfferSearchResults } from '../models/OfferSearchResultsModel';
import { NewOfferModel } from '../models/NewOfferModel';

import { OFFERS_API_BASE_URL } from './service-constants';

export const getOffers = async (pageNumber: number, pageSize: number) => {
    const response = await fetch(`${OFFERS_API_BASE_URL}?PageNumber=${pageNumber}&PageSize=${pageSize}`);
    const data: OfferSearchResults = await response.json();
    
    return data;
}

export const getOffer = async (offerId: string) => {
    const response = await fetch(`${OFFERS_API_BASE_URL}/${offerId}`);
    const data: Offer = await response.json();

    return data;
}

export const deleteOffer = async (id: string) => {
    const res = await axios.delete(`${OFFERS_API_BASE_URL}?id=${id}`);
    return res;
}

export const copyOffer = async (id: string) => {
    const res = await axios.get(`${OFFERS_API_BASE_URL}/copyOffer?id=${id}`);
    return res;
}

export const uploadOffer = async (offer: NewOfferModel) => {
    console.log(offer);

    const newOffer: NewOfferModel = {
        title: offer.title,
        description: offer.description,
        startDate: offer.startDate,
        endDate: offer.endDate,
        category: Number(offer.category),
        status: Number(offer.status)
    }

    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        }
    };

    const res = await axios.post(OFFERS_API_BASE_URL, newOffer, axiosConfig)

    return res;
}
