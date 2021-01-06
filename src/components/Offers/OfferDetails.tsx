import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Card from "react-bootstrap/Card";

import { Preloader } from "../Preloader";
import { Offer, OfferCategory, OfferStatus } from "../../models/OfferModel";
import { getOffer } from "../../services/offers-service";

interface IOfferDetailsRouteParams {
  id: string;
}

interface IOfferDetailsCardProps {
  heading: string;
  details: string | Date;
}

export const OfferDetails: React.FC = () => {
  const [offerDetails, setOfferDetails] = useState<Offer>({} as Offer);
  const { id } = useParams<IOfferDetailsRouteParams>();

  useEffect(() => {
    getOffer(id)
      .then((res) => setOfferDetails(res))
      .catch((err) => {
        throw new Error(err);
      });
  }, [id]);

  return Object.keys(offerDetails).length === 0 ? (
    <Preloader />
  ) : (
    <>
      <div className="offer-details-wrapper">
        <div className="offer-details-header">
          <div className="offer-details-header-content">
            <h1>Offer details</h1>
          </div>
        </div>
        <div className="offer-details-form container">
          <div className="row">
            <OfferDetailsCard heading="Title" details={offerDetails?.title} />
            <OfferDetailsCard heading="Description" details={offerDetails?.description} />
            <OfferDetailsCard heading="Start Date" details={offerDetails?.startDate} />
            <OfferDetailsCard heading="End Date" details={offerDetails?.endDate} />
            <OfferDetailsCard heading="Category" details={OfferCategory[offerDetails.category]} />
            <OfferDetailsCard heading="Status" details={OfferStatus[offerDetails.status]} />
          </div>
        </div>
      </div>
    </>
  );
};

const OfferDetailsCard: React.FC<IOfferDetailsCardProps> = ({ heading, details }) => {
  return (
    <Card className="col-md-5 offer-details-card">
      <Card.Header className="heading">{heading}</Card.Header>
      <Card.Body>{details}</Card.Body>
    </Card>
  );
};
