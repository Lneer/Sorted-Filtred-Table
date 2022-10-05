import React, { useState } from 'react';
import './pagination.css';

interface PaginationProps {
  page?: number;
  limit?: number;
}
const Pagination: React.FC<PaginationProps> = ({ page = 1, limit = 10 }) => {
  const [currentPage, setCurrentPage] = useState<number>(page);

  const increace = (): void => {
    setCurrentPage((prev) => prev + 1);
  };

  const decreace = (): void => {
    setCurrentPage((prev) => prev - 1);
  };

  const reset = () => {
    setCurrentPage(1);
  };

  const setLimit = () => {
    setCurrentPage(limit);
  };

  const isDisable = (limit: number) => {
    return currentPage === limit;
  };

  return (
    <div>
      <button onClick={reset} disabled={isDisable(1)}>
        &lt;&lt;
      </button>
      <button onClick={decreace} disabled={isDisable(1)}>
        &lt;
      </button>
      <span className="page-display">{currentPage}</span>
      <button onClick={increace} disabled={isDisable(limit)}>
        {' '}
        &gt;
      </button>
      <button onClick={setLimit} disabled={isDisable(limit)}>
        &gt;&gt;
      </button>
    </div>
  );
};

export default Pagination;
