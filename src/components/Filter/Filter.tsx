import React, { useCallback, useEffect, useState } from 'react';
import { FilterConfig, FilterField, FilterMethod } from '../../types/types';
import './filter.css';

interface FilterProps {
  config?: FilterConfig;
  setCurrentConfig?: (currentConfig: FilterConfig) => void;
}

const Filter: React.FC<FilterProps> = ({ config, setCurrentConfig = (currentConfig) => {} }) => {
  const [filterConfig, SetFilterConfig] = useState<FilterConfig>(
    config || {
      field: 'default',
      method: 'default',
      input: '',
    }
  );

  const memoizedOnSorted = useCallback(
    () => setCurrentConfig(filterConfig),
    [filterConfig, setCurrentConfig]
  );

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
          className="method-select"
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
