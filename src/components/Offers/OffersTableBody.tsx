import React, { useMemo } from "react";

import Table from "react-bootstrap/Table";

import { OfferTableHeader } from "./OfferTableHeader";
import { OfferTableRow } from "./OfferTableRow";

import { OFFER_TABLE_HEADERS } from "./offers-constants";
import { Offer } from "../../models";

interface IOffersTableBodyProps {
  offersList?: Offer[];
  onCopy: (offerId: string) => void;
  onDelete: (offerId: string) => void;
}

export const OffersTableBody: React.FC<IOffersTableBodyProps> = ({ offersList, onCopy, onDelete }) => {
  const headers = useMemo(() => OFFER_TABLE_HEADERS, []);

  return (
    <>
      <OfferTableHeader />
      <Table striped responsive hover bordered>
        <thead>
          <tr>
            {headers.map((header, index) => {
              return <th key={index}>{header}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {offersList?.map((offer) => {
            return (
              <OfferTableRow
                key={offer.id}
                offer={offer}
                onCopy={() => onCopy(offer.id)}
                onDelete={() => onDelete(offer.id)}
              />
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export const OnCopyModalBody: React.FC = () => {
  return <p>Do you want to copy this offer?</p>;
};

export const OnDeleteModalBody: React.FC = () => {
  return <p>Do you want to delete this offer?</p>;
};
