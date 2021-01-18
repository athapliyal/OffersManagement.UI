import { OfferSearchResults } from "../../models/OfferSearchResultsModel";

export const GetOffersData: OfferSearchResults = {
    offers: [{
        id: "1",
        title: "Offer number 1",
        description: "This offer is for a restaurant",
        category: 1,
        startDate: "2021-01-12T12:00:00",
        endDate: "2021-01-25T12:00:00",
        status: 2
    },
    {
        id: "2",
        title: "Offer number 2",
        description: "This offer is for clothing",
        category: 2,
        startDate: "2021-02-12T12:00:00",
        endDate: "2021-02-25T12:00:00",
        status: 3
    },
    {
        id: "3",
        title: "Offer number 3",
        description: "This offer is for food",
        category: 2,
        startDate: "2021-03-12T12:00:00",
        endDate: "2021-03-25T12:00:00",
        status: 3
    }],
    offersCount: 3
}