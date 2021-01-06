import React, { useEffect, useState, useRef, useCallback } from "react";

import { ToastContainer } from "react-toastify";

import { Preloader } from "../Preloader";
import { MAX_PAGE_SIZE, Pagination } from "../Pagination";
import { IGenericModalProps, GenericModal } from "../GenericModal";

import { OfferSearchResults } from "../../models/OfferSearchResultsModel";
import { OffersTableBody, OnCopyModalBody, OnDeleteModalBody } from "./OffersTableBody";

import { getOffers, deleteOffer, copyOffer } from "../../services/offers-service";
import {
  onDeleteToastSuccess,
  onDeleteToastFailure,
  onCopyToastSuccess,
  onCopyToastFailure,
} from "../../notifications/toast-config";

import "./offers.scss";

export const Offers: React.FC = () => {
  const [offerSearch, setOfferSearch] = useState<OfferSearchResults>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalProps, setModalProps] = useState<IGenericModalProps>({} as IGenericModalProps);
  const mountedRef = useRef(true);

  const retrieveOffers = useCallback(() => {
    getOffers(currentPage, MAX_PAGE_SIZE).then((offerSearch) => {

      // only set state if component is mounted
      if (mountedRef.current) {        
        setOfferSearch(offerSearch);
      }
      
    });
  }, [currentPage]);

  useEffect(() => {
    mountedRef.current = true;
    
    retrieveOffers();

    //component unmount
    return () => {
      mountedRef.current = false;
    };
  }, [retrieveOffers]);

  const onCopy = (offerId: string) => {
    setShowModal(true);

    setModalProps({
      title: "Copy offer",
      ModalBody: OnCopyModalBody,
      cancelText: "Cancel",
      submitText: "Copy offer",
      closeCallback: () => setShowModal(false),
      submitCallback: () => onCopySelected(offerId),
    });
  };

  const onDelete = (offerId: string) => {
    setShowModal(true);

    setModalProps({
      title: "Delete offer",
      ModalBody: OnDeleteModalBody,
      cancelText: "Cancel",
      submitText: "Delete offer",
      closeCallback: () => setShowModal(false),
      submitCallback: () => onDeleteSelected(offerId),
    });
  };

  const onCopySelected = (offerId: string) => {
    const res = copyOffer(offerId);
    setShowModal(false);

    res
      .then(() => {
        retrieveOffers();
        onCopyToastSuccess();
      })
      .catch((err) => {
        onCopyToastFailure();
      });
  };

  const onDeleteSelected = (offerId: string) => {
    const res = deleteOffer(offerId);
    setShowModal(false);

    res
      .then(() => {
        retrieveOffers();
        onDeleteToastSuccess();
      })
      .catch((err) => {
        onDeleteToastFailure();
      });
  };

  if (offerSearch?.offersCount) {
    return (
      <>
        <ToastContainer />
        {showModal && <GenericModal {...modalProps} />}
        <div className="offers-table-wrapper">
          <OffersTableBody offersList={offerSearch?.offers} onCopy={onCopy} onDelete={onDelete} />
        </div>
        <div className="pagination-wrapper">
          <Pagination
            totalCount={offerSearch?.offersCount || 0}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </>
    );
  }

  return <Preloader />;
};
