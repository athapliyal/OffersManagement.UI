import axios from './axios';
import { NewOfferModel } from '../models/NewOfferModel';

export const getOffers = async (pageNumber: number, pageSize: number) => {
    const response = await axios.get(`/offers?PageNumber=${pageNumber}&PageSize=${pageSize}`, {
        withCredentials: true
    });

    return response.data;
}

export const getOffer = async (offerId: string) => {
    const response = await axios.get(`/offers/${offerId}`, {
        withCredentials: true
    });

    return response.data;
}

export const deleteOffer = async (id: string) => {
    const response = await axios.delete(`/offers?id=${id}`, {
        withCredentials: true
    });

    return response;
}

export const copyOffer = async (id: string) => {
    const response = await axios.get(`/offers/copyOffer?id=${id}`, {
        withCredentials: true
    });

    return response;
}

export const uploadOffer = async (offer: NewOfferModel) => {

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
        },
        withCredentials: true
    };

    const response = await axios.post('/offers', newOffer, axiosConfig)

    return response;
}
