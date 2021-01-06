import React, { Suspense, lazy } from 'react';

import { Offers } from "../components/Offers";
import { OfferDetails } from '../components/Offers/OfferDetails';
import { NewOffer } from '../components/Offers/NewOffer';
import { BulkImportOffer } from "../components/BulkImportOffer";
import { LoginScreen } from "../components/LoginScreen";
import { Preloader } from '../components/Preloader';
import { NotFound } from '../components/NotFound';

const OfferCalendar = lazy(() => import('../components/OfferCalendar'));

interface IRoutes {
  path: string;
  exact: boolean;
  name: string;
  component: any;
  isPrivateRoute: boolean;
}

export const routes: IRoutes[] = [{
  path: "/",
  name: "Home",
  exact: true,
  component: () => <Offers />,
  isPrivateRoute: true,
},
{
  path: "/login",
  name: "Login",
  exact: false,
  component: () => <LoginScreen />,
  isPrivateRoute: false,
},
{
  path: "/offers",
  name: "Offers",
  exact: true,
  component: () => <Offers />,
  isPrivateRoute: true,
},
{
  path: "/offers/:id",
  name: "OfferDetails",
  exact: true,
  component: () => <OfferDetails />,
  isPrivateRoute: true,
},
{
  path: "/bulk-import",
  name: "Importer",
  exact: true,
  component: () => <BulkImportOffer />,
  isPrivateRoute: true,
},
{
  path: "/offer-calendar",
  name: "OfferCalendar",
  exact: true,
  component: () => <Suspense fallback={<Preloader />}><OfferCalendar /></Suspense>,
  isPrivateRoute: true,
},
{
  path: "/new-offer",
  name: "NewOffer",
  exact: true,
  component: () => <NewOffer />,
  isPrivateRoute: true,
},
{
  path: "",
  name: "NotFound",
  exact: false,
  component: () => <NotFound />,
  isPrivateRoute: false,
},
];
