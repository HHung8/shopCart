// CustomPagination.jsx
import React from "react";
import { Pagination } from "react-bootstrap";

const CustomPagination = ({ totalPages, currentPage, onPageChange }) => {
  const adjacentPageCount = 2; // Number of pages to show on each side of the current page
  const pages = [];

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  // Helper function to add pages to the list
  const addPages = (start, end) => {
    for (let i = start; i <= end; i++) {
      pages.push(
        <Pagination.Item
          key={i}
          active={i === currentPage}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </Pagination.Item>
      );
    }
  };

  // Render "..." if there are more pages on the left
  if (currentPage - adjacentPageCount > 1) {
    pages.push(<Pagination.Ellipsis key="left-ellipsis" />);
  }

  // Render pages on the left side of the current page
  addPages(
    Math.max(1, currentPage - adjacentPageCount),
    Math.min(currentPage - 1, totalPages)
  );

  // Render current page
  pages.push(
    <Pagination.Item key={currentPage} active>
      {currentPage}
    </Pagination.Item>
  );

  // Render pages on the right side of the current page
  addPages(
    Math.max(currentPage + 1, 1),
    Math.min(currentPage + adjacentPageCount, totalPages)
  );

  // Render "..." if there are more pages on the right
  if (currentPage + adjacentPageCount < totalPages) {
    pages.push(<Pagination.Ellipsis key="right-ellipsis" />);
  }

  return (
    <Pagination className="mt-4">
      <Pagination.Prev
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      />
      {pages}
      <Pagination.Next
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      />
    </Pagination>
  );
};

export default CustomPagination;
