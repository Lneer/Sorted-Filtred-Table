import React from 'react';
import { Sorter } from '..';
import { SortType } from '../../types/types';
import './ColumnHeader.css';

interface ColumnHeaderProps {
  label: string;
  sortDirection?: SortType;
  onClick?: () => void;
}
const ColumnHeader: React.FC<ColumnHeaderProps> = ({
  label,
  sortDirection = null,
  onClick = () => {},
}) => {
  return (
    <th onClick={onClick}>
      <span className="titleWrapper">
        <span>{label}</span>
        <Sorter sortDirection={sortDirection} />
      </span>
    </th>
  );
};

export default ColumnHeader;
