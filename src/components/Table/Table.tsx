import React, { useEffect, useState } from 'react';
import { Tabledata, SortType, SortConfig, TabledataProp } from '../../types/types';
import { ColumnHeader } from '../../components';
import './table.css';
import { getSortedArray } from '../../utils/getSortedArray';

interface TableProps {
  tableData?: Tabledata[];
}
const Table: React.FC<TableProps> = ({ tableData }) => {
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: 'id',
    sortType: null,
  });

  const [data, setData] = useState<Tabledata[] | undefined>(tableData);

  useEffect(() => {
    const data = getSortedArray(tableData, sortConfig);
    setData(data);
  }, [tableData, sortConfig]);

  const ClickHandle = (key: TabledataProp) => {
    let sortType: SortType;

    if (sortConfig.key === key) {
      switch (sortConfig.sortType) {
        case null:
          sortType = 'up';
          break;
        case 'up':
          sortType = 'down';
          break;
        case 'down':
          sortType = null;
          break;
      }
    } else sortType = 'up';

    return setSortConfig({ key, sortType });
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Дата</th>
          <ColumnHeader
            label="Название"
            sortDirection={sortConfig.key === 'name' ? sortConfig.sortType : null}
            onClick={() => ClickHandle('name')}
          ></ColumnHeader>
          <ColumnHeader
            label="Количество"
            sortDirection={sortConfig.key === 'quantity' ? sortConfig.sortType : null}
            onClick={() => ClickHandle('quantity')}
          ></ColumnHeader>
          <ColumnHeader
            label="Расстояние"
            sortDirection={sortConfig.key === 'distance' ? sortConfig.sortType : null}
            onClick={() => ClickHandle('distance')}
          ></ColumnHeader>
        </tr>
      </thead>
      <tbody>
        {data?.map((data) => (
          <tr key={data.id}>
            <td>{data.date}</td>
            <td>{data.name}</td>
            <td>{data.quantity}</td>
            <td>{data.distance}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
