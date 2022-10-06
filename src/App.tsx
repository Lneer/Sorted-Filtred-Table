import React, { useEffect, useState } from 'react';
import './App.css';
import { Filter, Pagination, Table } from './components';
import { Tabledata } from './types/types';
import { getData } from './utils/getData';

function App() {
  const [table, setTable] = useState<Tabledata[]>([]);
  const [filtredData, setFiltredData] = useState<Tabledata[]>(table);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    getData('data', { page: currentPage, limit: 5 }).then((data) => setTable(data));
  }, [currentPage]);

  return (
    <>
      <Filter data={table} onSorted={(data) => setFiltredData(data)} />
      <Table tableData={filtredData} />
      <Pagination page={currentPage} limit={5} setPage={(page) => setCurrentPage(page)} />
    </>
  );
}

export default App;
