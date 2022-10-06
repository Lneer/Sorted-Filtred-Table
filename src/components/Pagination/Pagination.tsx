import React, { useState } from 'react';
import './pagination.css';

interface PaginationProps {
  page?: number;
  limit?: number;
  setPage: (page: number) => void;
}
const Pagination: React.FC<PaginationProps> = ({ page = 1, limit = 5, setPage = (page) => {} }) => {
  const [currentPage, setCurrentPage] = useState<number>(page);

  const increace = (): void => {
    setCurrentPage((prev) => {
      setPage(prev + 1);
      return prev + 1;
    });
  };

  const decreace = (): void => {
    setCurrentPage((prev) => {
      setPage(prev - 1);
      return prev - 1;
    });
  };

  const reset = () => {
    setCurrentPage(() => {
      setPage(1);
      return 1;
    });
  };

  const setLimit = () => {
    setCurrentPage(() => {
      setPage(limit);
      return limit;
    });
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
