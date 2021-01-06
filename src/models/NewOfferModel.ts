export type NewOfferModel = {
    title: string;
    description: string;
    startDate: Date | null;
    endDate: Date | null;
    category: number;
    status: number;
  };