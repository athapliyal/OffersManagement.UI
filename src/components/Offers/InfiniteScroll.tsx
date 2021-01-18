import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import useInfiniteScroll from "react-infinite-scroll-hook";
import { Table, Spinner } from "react-bootstrap";
import { getOffers, addMultipleOffersForInfiniteScroll } from "../../services/offers-service";
import { ScrollArrow } from '../ScrollArrow';
import { Offer, OfferCategory, OfferStatus } from "../../models/OfferModel";
import { OfferSearchResults } from "../../models/OfferSearchResultsModel";

export const InfiniteScroll: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [offers, setOffers] = useState<Offer[]>([]);
  let [currentPage, setCurrentPage] = useState<number>(1);

  const history = useHistory();

  // Add 20000 offers in the backend so we have enough data to show Infinite Scroll
  // only for first load
  useEffect(() => {
    addMultipleOffersForInfiniteScroll();
  }, []);

  useEffect(() => {
    setLoading(true);

    getOffers(currentPage, 100).then((offerSearch: OfferSearchResults) => {
      setOffers([...offers, ...offerSearch.offers]);
      setLoading(false);
    });
  }, [currentPage]);

  const handleLoadMore = () => {
    setCurrentPage((prevCount) => prevCount + 1);
  };

  const infiniteRef = useInfiniteScroll({
    loading,
    hasNextPage: true,
    onLoadMore: handleLoadMore,
    scrollContainer: "window",
  });

  return (
    <div className="infinite-scroll-wrapper">
      <div className="infinite-scroll-header">
        <div className="infinite-scroll-header-content">
          <h1>Offers with infinite scroll</h1>
        </div>
      </div>
      <Table
        className="infinite-scroll-table"
        striped
        responsive
        hover
        bordered
        ref={infiniteRef as React.RefObject<HTMLTableElement>}
      >
        <tbody>
          {offers.map((offer) => (
            <tr key={offer.id}>
              <td onClick={() => history.push(`/offers/${offer.id}`)}>{offer.title}</td>
              <td>{OfferCategory[offer.category] || "-"}</td>
              <td>{offer.description}</td>
              <td>{offer.startDate}</td>
              <td>{offer.endDate}</td>
              <td>{OfferStatus[offer.status] || "-"}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {loading && <InfinitePreloader />}
      <ScrollArrow />
    </div>
  );
};

const InfinitePreloader: React.FC = () => {
  return (
    <div className="infinite-scroll-preloader">
      <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="primary" />
    </div>
  );
};
