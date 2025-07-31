import React from "react";

const Pagination = ({ currentPage, total, itemsPerPage, onPageChange }) => {
  const totalPages = Math.ceil(total / itemsPerPage);
  if (totalPages <= 1) return null;
  return (
    <div className="pagination">
      {[...Array(totalPages)].map((_, i) => (/*Creates an array with totalPages empty elements and maps over them to generate buttons*/
        <button
          key={i}
          className={`page-button ${currentPage === i + 1 ? "active" : ""}`}
          onClick={() => onPageChange(i + 1)}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;