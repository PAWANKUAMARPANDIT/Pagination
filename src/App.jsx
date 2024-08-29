import React, { useState } from 'react';
import ProductList from './components/ProductList/ProductList';
import Pagination from './components/Pagination/Pagination';
import useFetchProducts from './hooks/useFetchProducts';

function App() {
  const data = useFetchProducts('https://dummyjson.com/products?limit=100');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const itemOfLastPage = currentPage * itemsPerPage;
  const itemOfFirstPage = itemOfLastPage - itemsPerPage;
  const currentItems = data.slice(itemOfFirstPage, itemOfLastPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="p-4">
      <ProductList currentItems={currentItems} />
      <Pagination
        currentPage={currentPage}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        totalPages={totalPages}
      />
    </div>
  );
}

export default App;
