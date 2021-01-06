import { Offer } from '../../models'

export const MapOffersToModel = (offers: Offer[]) => {
  return offers.map(offer => ({
    id:offer.id,
    title: offer.title,
    start: offer.startDate
  }))
} 