import React from 'react';

const Pagination = ({ currentPage, handleNextPage, handlePreviousPage, totalPages }) => {
  return (
    <div className="flex justify-center items-center mt-4">
      <button
        className={`bg-blue-400 hover:bg-red-700 py-4 px-3 rounded ${currentPage === 1 && 'opacity-50 cursor-not-allowed'}`}
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span className="mx-4"/>
      <button
        className={`bg-blue-500 hover:bg-red-700 px-4 py-4 rounded ${currentPage === totalPages && 'opacity-50 cursor-not-allowed'}`}
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
