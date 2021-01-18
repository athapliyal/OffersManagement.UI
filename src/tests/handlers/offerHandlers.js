import { rest } from "msw";

import { BASE_CCC_API_URL } from "../../services/axios";
import { GetOffersData } from "../mockData/offers";

export const offerHandler = [
  rest.get(`${BASE_CCC_API_URL}/offers`, (req, res, ctx) => {
    return res(ctx.json({ ...GetOffersData }));
  }),
];
