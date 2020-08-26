import React from "react";
import "./pagination.styles.css";
import { getPageNumbers } from "../../utils";

interface Props {
  currentPage: number;
  handlePageChange: (page: number) => void;
  items: any[];
  pageLength: number;
}

const Pagination: React.FC<Props> = ({
  handlePageChange,
  currentPage,
  items,
  pageLength,
}) => {
  const renderPageLinks = (page: number, index: number): JSX.Element => {
    return (
      <li
        key={index}
        onClick={() => handlePageChange(page)}
        className={currentPage === page ? "active" : ""}
      >
        {page}
      </li>
    );
  };

  const pageNumbers = getPageNumbers(items, pageLength);

  return (
    <ul id="page-numbers">
      {pageNumbers.map((page, index) => renderPageLinks(page, index))}
    </ul>
  );
};

export default Pagination;
