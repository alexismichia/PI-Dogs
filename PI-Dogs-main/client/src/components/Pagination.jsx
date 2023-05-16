import React, { useState } from "react";
import styles from "../Styles/Pagination.module.css"

const Pagination = ({ itemsPerPage, totalItems, initialPage, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    onPageChange(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers.map((number) => (
      <li key={number}>
        <a
          href="#"
          onClick={() => handlePageChange(number)}
          className={number === currentPage ? styles.active : null}
        >
          {number}
        </a>
      </li>
    ));
  };

  return (
    <div className={styles.pagination}>
      <ul>{renderPageNumbers()}</ul>
    </div>
  );
};

export default Pagination;



