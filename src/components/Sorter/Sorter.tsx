import React from 'react';
import './sorter.css';
import arrowUp from '../../assets/arrow-up.svg';
import arrowDown from '../../assets/arrow-down.svg';

interface SorterProps {
  label?: string;
  sortDirection?: 'up' | 'down' | null;
}
const Sorter: React.FC<SorterProps> = ({ label = '', sortDirection = null }) => {
  return (
    <span className="sorter">
      <img
        src={arrowUp}
        alt="arrow-up"
        className={`sorter-img ${sortDirection === 'up' ? 'checked' : ''}`}
      />
      <img
        src={arrowDown}
        alt="arrow-down"
        className={`sorter-img ${sortDirection === 'down' ? 'checked' : ''}`}
      />
    </span>
  );
};

export default Sorter;
