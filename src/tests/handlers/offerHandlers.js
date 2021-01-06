import { rest } from "msw";

import { OFFERS_API_BASE_URL } from "../../services/service-constants";
import { GetOffersData } from "../mockData/offers";

export const offerHandler = [
  rest.get(OFFERS_API_BASE_URL, (req, res, ctx) => {
    return res(ctx.json({ ...GetOffersData }));
  }),
];
