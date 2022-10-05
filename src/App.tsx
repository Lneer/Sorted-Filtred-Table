import React from 'react';
import './App.css';
import { Table } from './components';
import { Tabledata } from './types/types';

const sampleTable: Tabledata[] = [
  {
    id: 1,
    date: '02.03.2020',
    name: 'New-Yourk',
    quantity: 5,
    distance: 500,
  },
  {
    id: 2,
    date: '04.03.2020',
    name: 'Berlin',
    quantity: 15,
    distance: 200,
  },
  {
    id: 3,
    date: '02.03.2020',
    name: 'London',
    quantity: 2,
    distance: 300,
  },
  {
    id: 4,
    date: '02.04.2020',
    name: 'Praga',
    quantity: 10,
    distance: 250,
  },
];

function App() {
  return <Table tableData={sampleTable} />;
}

export default App;
