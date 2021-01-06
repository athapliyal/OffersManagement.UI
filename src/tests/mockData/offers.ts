import { OfferSearchResults } from "../../models/OfferSearchResultsModel";

export const GetOffersData: OfferSearchResults = {
    offers: [{
        id: "1",
        title: "Offer number 1",
        description: "This offer is for a restaurant",
        category: 1,
        startDate: new Date(2020, 11, 24, 10, 33, 30, 0),
        endDate: new Date(2020, 12, 25, 10, 33, 30, 0),
        status: 2
    },
    {
        id: "2",
        title: "Offer number 2",
        description: "This offer is for clothing",
        category: 2,
        startDate: new Date(2021, 10, 24, 10, 33, 30, 0),
        endDate: new Date(2021, 12, 25, 10, 33, 30, 0),
        status: 3
    },
    {
        id: "3",
        title: "Offer number 3",
        description: "This offer is for food",
        category: 2,
        startDate: new Date(2021, 1, 24, 10, 33, 30, 0),
        endDate: new Date(2021, 2, 25, 10, 33, 30, 0),
        status: 3
    }],
    offersCount: 3
}