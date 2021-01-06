import ReactPaginate from "react-paginate";

import "./pagination.scss";

interface PageChangeData {
  selected: number;
}

interface IPaginationProps {
  totalCount: number;
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
}

export const MAX_PAGE_SIZE = 5;

export const Pagination: React.FC<IPaginationProps> = ({ totalCount, currentPage, setCurrentPage }) => {

  const onPageChange = (data: PageChangeData) => {
    setCurrentPage(data.selected + 1);
  };

  return (
    <>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        forcePage ={currentPage - 1}
        pageCount={totalCount / MAX_PAGE_SIZE}
        onPageChange={onPageChange}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
        pageRangeDisplayed={5}
        marginPagesDisplayed={5}
      />
    </>
  );
};
