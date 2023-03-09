import {
  Cube,
  StatisticsItem,
  StatisticsList,
  StatisticsListTitle,
  StatisticsListWrapper,
  StatisticsSumItem,
  StatisticsSumList,
  StatisticsWrapper,
  Sum,
} from './StatisticsList.styled';

import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { getTransactionSummary } from '../../../redux/transactions/trans-operations';
import { selectSummary } from '../../../redux/transactions/trans-selectors';
import { categories } from '../categories';

const monthData = [
  { value: 0, label: 'January' },
  { value: 1, label: 'February' },
  { value: 2, label: 'March' },
  { value: 3, label: 'April' },
  { value: 4, label: 'May' },
  { value: 5, label: 'June' },
  { value: 6, label: 'July' },
  { value: 7, label: 'August' },
  { value: 8, label: 'September' },
  { value: 9, label: 'October' },
  { value: 10, label: 'November' },
  { value: 11, label: 'December' },
];

const yearData = [
  { value: 2021, label: '2022' },
  { value: 2022, label: '2022' },
  { value: 2023, label: '2023' },
];

const customStyles = {
  control: provided => ({
    ...provided,
    // width: '230px',
    // ширина регулируется общей оберткой для наших двух компонентов
    // height: '40px',
    height: '50px', // переписала согласно макету
    borderRadius: '30px',
    border: 'solid 1px #000000',
    cursor: 'pointer',
    '&:hover': {
      borderColor: '#D8093A',
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#dedede' : 'transparent',
    color: state.isSelected ? '#333333' : '#666666',

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: '2px 103px 2px 20px',
    gap: '10px', //
    '&:hover': {
      backgroundColor: '#dedede',
      color: '#333333',
    },
  }),
  singleValue: provided => ({
    ...provided,
    color: '#333333',
  }),
  dropdownIndicator: provided => ({
    ...provided,
    color: '#333333',
    '&:hover': {
      color: '#D8093A',
    },
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  menu: provided => ({
    ...provided,
    width: '230px',
    borderRadius: '30px',
    overflow: 'hidden',
  }),
};

const CategorySum = () => {
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const summary = useSelector(selectSummary);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTransactionSummary({ month: month + 1, year }));
  }, [dispatch, month, year]);

  const handleMonthChange = ({ value }) => {
    setMonth(value);
  };
  const handleYearChange = ({ value }) => {
    setYear(value);
  };

  return (
    <StatisticsListWrapper>
      <Select
        value={month}
        onChange={handleMonthChange}
        options={monthData}
        placeholder={monthData[month].label}
        styles={customStyles}
      />
      <Select
        value={year}
        onChange={handleYearChange}
        options={yearData}
        placeholder={year}
        styles={customStyles}
      />

      <StatisticsListTitle>
        <p>Category</p>
        <p>Sum</p>
      </StatisticsListTitle>
      <StatisticsList>
        {summary &&
          summary.categoriesSummary.map(({ name, type, total }) => {
            if (type === 'INCOME') return null;
            return (
              <StatisticsItem key={name}>
                <Cube color={categories[name]} />
                <StatisticsWrapper>
                  <p>{name}</p> <Sum>{Math.abs(total)}</Sum>
                </StatisticsWrapper>
              </StatisticsItem>
            );
          })}
      </StatisticsList>
      <StatisticsSumList>
        <StatisticsSumItem>
          <p>Expenses</p>
          <p
          // style={{ color: theme.color.text_pink }}
          >
            {summary && Math.abs(summary.expenseSummary)}
          </p>
        </StatisticsSumItem>
        <StatisticsSumItem>
          <p>Income</p>
          <p
          // style={{ color: theme.color.accent }}
          >
            {summary && summary.incomeSummary}
          </p>
        </StatisticsSumItem>
      </StatisticsSumList>
    </StatisticsListWrapper>
  );
};

export default CategorySum;
