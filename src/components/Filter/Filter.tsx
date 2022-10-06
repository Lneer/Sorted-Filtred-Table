import React, { useCallback, useEffect, useState } from 'react';
import { FilterConfig, FilterField, FilterMethod, Tabledata } from '../../types/types';
import { getFilteredArray } from '../../utils/getFilteredArray';
import './filter.css';

interface FilterProps {
  data?: Tabledata[];
  onSorted?: (sortedData: Tabledata[]) => void;
}

const Filter: React.FC<FilterProps> = ({ data, onSorted = (sortedData) => {} }) => {
  const [filterConfig, SetFilterConfig] = useState<FilterConfig>({
    field: 'default',
    method: 'default',
    input: '',
  });
  const [filtredData, setFiltredData] = useState(data);

  const memoizedOnSorted = useCallback(
    () => onSorted(filtredData as Tabledata[]),
    [filtredData, onSorted]
  );

  useEffect(() => {
    const filtredData = getFilteredArray(data, filterConfig);
    setFiltredData(filtredData);
  }, [filterConfig, data]);

  useEffect(() => {
    memoizedOnSorted();
  }, [memoizedOnSorted]);

  const changeField = (event: React.ChangeEvent<HTMLSelectElement>) => {
    SetFilterConfig({
      field: event.target.value as FilterField,
      method: filterConfig.method,
      input: filterConfig.input,
    });
  };

  const changeMethod = (event: React.ChangeEvent<HTMLSelectElement>) => {
    SetFilterConfig({
      field: filterConfig.field,
      method: event.target.value as FilterMethod,
      input: filterConfig.input,
    });
  };

  const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    SetFilterConfig({
      field: filterConfig.field,
      method: filterConfig.method,
      input: event.target.value,
    });
  };

  return (
    <form className="filter">
      <select
        name="column-select"
        className="column-select"
        onChange={(event) => changeField(event)}
      >
        <option value="default">---</option>
        <option value="name">Название</option>
        <option value="quantity">Количество</option>
        <option value="distance">Расстояние</option>
      </select>
      <label className="filter__options">
        <select
          name="column-select"
          className="column-select"
          onChange={(event) => changeMethod(event)}
        >
          <option value="default">---</option>
          <option value="equal">=</option>
          <option value="include">&#8715;</option>
          <option value="bigger">&gt;</option>
          <option value="lesser">&lt;</option>
        </select>

        <input type="search" onChange={(event) => changeInput(event)}></input>
      </label>
    </form>
  );
};

export default Filter;
