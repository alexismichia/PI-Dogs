import { useState } from "react";

export default function Pagination({ itemsPerPage, totalItems, initialPage, onPageChange }) {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <ul>
        {pageNumbers.map((number) => (
          <li key={number}>
            <a
              href="#"
              onClick={() => {
                setCurrentPage(number);
                onPageChange(number);
              }}
              className={number === currentPage ? "active" : null}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

