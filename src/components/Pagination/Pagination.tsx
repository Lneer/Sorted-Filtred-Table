import React, { useCallback, useEffect, useState } from 'react';
import './pagination.css';

interface PaginationProps {
  page?: number;
  limit?: number;
  setPage: (page: number) => void;
}
const Pagination: React.FC<PaginationProps> = ({ page = 1, limit = 5, setPage = (page) => {} }) => {
  const [currentPage, setCurrentPage] = useState<number>(page);

  const memoizedSetPage = useCallback(
    () => setPage(currentPage),
    [currentPage, setPage]
  );

  useEffect(() => {
    memoizedSetPage()
  },[currentPage,memoizedSetPage])

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
    <div className='Pagination'>
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
