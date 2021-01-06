import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import FullCalendar, { EventClickArg, EventInput } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import { Preloader } from '../Preloader';

import { MapOffersToModel } from "./event-utils";
import { getOffers } from "../../services/offers-service";

import "./calendar.scss";

const OfferCalendar: React.FC = () => {
  const [offers, setOffers] = useState<EventInput[]>([]);
  const [loadingOffers, setLoadingOffers] = useState<boolean>(true);
  const history = useHistory();

  useEffect(() => {
    getOffers(1, 100).then((offerSearch) => {
      setOffers(MapOffersToModel(offerSearch.offers));
      setLoadingOffers(false);
    })
    .catch((err) => {
      throw new Error(err);
    })
  }, []);

  const handleEventClick = (clickInfo: EventClickArg) => {
    const offerId = clickInfo.event._def.publicId;
    history.push(`/offers/${offerId}`);
  };

  return loadingOffers ? <Preloader /> : (
    <div className="offer-calendar__wrapper">
      <div className="offer-calendar__body">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          initialView="dayGridMonth"
          initialEvents={offers}
          eventClick={handleEventClick}          
        />
      </div>
    </div>
  );
};

export default OfferCalendar;