/* STEPS TO WRITE REACT COMPONENT

1. Import all necessary dependencies - similar to using statements on top of C# files
2. Declare a component which is just a JS function that will return your html and css later
3. useState is a function hook provided by React that keeps track of your state changes. E.g. loading state, list of offers etc. Whenever this state changes the component will re-render
5. useEffect is a function hook that takes two parameters - a function and an array. The first parameter function will run automatically whenever the dependencies in the array change
6. useEffect hook is generally used to make API calls or in other words handle side-effects
7. Write your html and css and that's it!
8. If you understand this InfiniteScroll component you just learnt 75% - 80% of React. Rest 25% are advanced concepts, performance hooks and routing stuff
*/

// Step 1: Import all the dependencies
import React, { useState, useEffect } from "react";
import useInfiniteScroll from "react-infinite-scroll-hook";
import { Table, Spinner } from "react-bootstrap";
import { getOffers, addMultipleOffersForInfiniteScroll } from "../../services/offers-service";
import { ScrollArrow } from '../ScrollArrow';
import { Offer, OfferCategory, OfferStatus } from "../../models/OfferModel";
import { OfferSearchResults } from "../../models/OfferSearchResultsModel";


// Step 2: Declare a function (this is JS ES6 syntax - new way of writing functions. Can be written in old way too). The React.FC part is for Typescript
export const InfiniteScroll: React.FC = () => {

  // Step 3: Create your state using useState. This returns the state and the function to update it. 
  // E.g. in below loading is a boolean with initial value of false. Whenever you have to update it just use setLoading function and pass in the new value
  const [loading, setLoading] = useState<boolean>(false);

  // Similarly for offers to keep track of list of offers
  const [offers, setOffers] = useState<Offer[]>([]);

  // And page number to support infinite scroll and make the API call with correct page number
  let [currentPage, setCurrentPage] = useState<number>(1);


  // Step 4: Use useEffect hook to manage side effects
  // Here we are firing a request to the backend to add 20000 offers so we have enough data to show Infinite Scroll
  // We had to do this for demo purposes as we didn't have a lot of offers to showcase Infinite scroll
  useEffect(() => {
    addMultipleOffersForInfiniteScroll();

    // This array object is empty so this useEffect will only run once - when component is first loaded. More like a constructor
  }, []);

  // Step 4: Use useEffect to fire another call to backend to get new list of offers
  // For this useEffect our dependency array has currentPage state. This means whenever currentPage changes we run this effect again and will fetch new offers
  // This WON'T run when first time the component is rendered and only runs on dependency change
  useEffect(() => {
    // As we are fetching new data we set loading state to true. Later this is used in html to render a spinner if loading is true
    setLoading(true);

    // Get offers and then use setOffers and setLoading to update the state. REMEMBER as soon as we change the state React will automatically re-render
    getOffers(currentPage, 100).then((offerSearch: OfferSearchResults) => {
      setOffers([...offers, ...offerSearch.offers]);
      setLoading(false);
    });
    // Dependency of currentPage state
  }, [currentPage]);



  // This function is used by our headless component below to increase currentPage. Once currentPage is changed the useEffect above is triggered
  const handleLoadMore = () => {
    setCurrentPage((prevCount) => prevCount + 1);
  };

  // This is our headless third party component that has all the fancy javascript to handle infinite scrolling for us
  const infiniteRef = useInfiniteScroll({
    loading,
    hasNextPage: true,
    onLoadMore: handleLoadMore,
    scrollContainer: "window",
  });


  // Step 7: Write html and css and attach infinite scroll third party hook on line 91. So the same can be done for any html and css not the one below specifically
  // Check line 107. That's how you conditionally render components based on value of state 
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
              <td>{offer.title}</td>
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

// A child component that is rendered on line 107. You can move this to a separate file or keep it here
const InfinitePreloader: React.FC = () => {
  return (
    <div className="infinite-scroll-preloader">
      <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="primary" />
    </div>
  );
};
