import React, { useEffect, useState } from 'react';
import './App.css';
import { Filter, Pagination, Table } from './components';
import { FilterConfig, Tabledata } from './types/types';
import { getData } from './utils/getData';
import { getFilteredArray } from './utils/getFilteredArray';

function App() {
  const [table, setTable] = useState<Tabledata[]>([]);
  const [filtredData, setFiltredData] = useState<Tabledata[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filterConfig, SetFilterConfig] = useState<FilterConfig>({
    field: 'default',
    method: 'default',
    input: '',
  });

  useEffect(() => {
    getData('data', { page: currentPage, limit: 5 }).then((data) => setTable(data));
  }, [currentPage]);

  useEffect(() => {
    const filtedData = getFilteredArray(table, filterConfig);
    setFiltredData(filtedData);
  }, [filterConfig, table]);

  return (
    <div className="App">
      <Filter config={filterConfig} setCurrentConfig={(data) => SetFilterConfig(data)} />
      <Table tableData={filtredData} />
      <Pagination page={currentPage} limit={5} setPage={(page) => setCurrentPage(page)} />
    </div>
  );
}

export default App;
