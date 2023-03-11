import {
  Cube, SelectWrapper,
  StatisticsItem,
  StatisticsList,
  StatisticsListTitle,
  StatisticsListWrapper,
  StatisticsSumItem,
  StatisticsSumList,
  StatisticsWrapper,
  Sum,
} from './StatisticsList.styled';
import { useTheme } from 'styled-components';

import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { getTransactionSummary } from '../../../redux/transactions/trans-operations';
import { selectSummary } from '../../../redux/transactions/trans-selectors';
import { categories } from '../categories';

const monthData = [
  {value: 0, label: 'January'},
  {value: 1, label: 'February'},
  {value: 2, label: 'March'},
  {value: 3, label: 'April'},
  {value: 4, label: 'May'},
  {value: 5, label: 'June'},
  {value: 6, label: 'July'},
  {value: 7, label: 'August'},
  {value: 8, label: 'September'},
  {value: 9, label: 'October'},
  {value: 10, label: 'November'},
  {value: 11, label: 'December'},
];

const yearData = [
  {value: 2021, label: '2021'},
  {value: 2022, label: '2022'},
  {value: 2023, label: '2023'},
];


const customStyles = theme => ({
  control: provided => ({
    ...provided,
    height: '50px',
    borderRadius: '30px',
    border: 'solid 1px #000000',
    cursor: 'pointer',
    overflow: 'hidden',
    '&:hover': {
      borderColor: '#4A56E2',
    },
    '@media screen and (min-width: 768px)': {
      width: '160px',},
    '@media screen and (min-width: 1280px)': {
      width: '182px',},
    backgroundColor: theme.color.bg_white,
  }),

  option: (provided, state) => ({
    ...provided,
    paddingLeft:'15px',
    backgroundColor: state.isSelected ? '#FFFFFF' : theme.color.bg_white_select,
    color: state.isSelected ? '#FFFFFF' : theme.text_dark,
    width:'100%',
    '&:hover': {
      backgroundColor: '#FFFFFF',
      color: '#4A56E2',

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
      color: '#4A56E2',
    },

  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  menu: provided => ({
    ...provided,
    backgroundColor: theme.color.bg_white_select,
    backdropFilter: 'blur(25px)',
    borderRadius: '30px',
    overflow: 'hidden',
    '@media screen and (min-width: 768px)': {
      width: '160px',},
    '@media screen and (min-width: 1280px)': {
      width: '182px',}
  }),
placeholder: provided => ({
    ...provided,
  color: theme.text_dark,
  }),
});

const CategorySum = () => {
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const summary = useSelector(selectSummary);
  const dispatch = useDispatch();
  const theme = useTheme();
 const selectStyles = customStyles(theme)

  useEffect(() => {
    dispatch(getTransactionSummary({ month: month + 1, year }));
  }, [dispatch, month, year]);

  const handleMonthChange = ({ value }) => {
    setMonth(value);
  };
  const handleYearChange = ({ value }) => {
    setYear(value);
  };

  // const amount = parseFloat(positNum).toFixed(2);  ось так додати 2 цифри після крапки

  return (
    <StatisticsListWrapper>
      <SelectWrapper>
      <Select
        value={month}
        onChange={handleMonthChange}
        options={monthData}
        placeholder={monthData[month].label}
        styles={selectStyles}
      />
      <Select
        value={year}
        onChange={handleYearChange}
        options={yearData}
        placeholder={year}
        styles={selectStyles}
      />
      </SelectWrapper>
      <StatisticsListTitle>
        <p>Category</p>
        <p>Sum</p>
      </StatisticsListTitle>
      {summary && (
      <StatisticsList>
        {summary &&
          summary.categoriesSummary.map(({ name, type, total }) => {
            if (type === 'INCOME') return null;
            return (
              <StatisticsItem key={name}>
                <Cube color={categories[name]} />
                <StatisticsWrapper>
                  <p>{name}</p> <Sum>{parseFloat(Math.abs(total)).toFixed(2)}</Sum>
                </StatisticsWrapper>
              </StatisticsItem>
            );
          })}
      </StatisticsList>
        )}
      <StatisticsSumList>
        <StatisticsSumItem>
          <p>Expenses</p>
          <p style={{ color: theme.color.text_pink }}>
            {summary && parseFloat(Math.abs(summary.expenseSummary)).toFixed(2)}
          </p>
        </StatisticsSumItem>
        <StatisticsSumItem>
          <p>Income</p>
          <p style={{ color: theme.color.accent }}>
            {summary && parseFloat(summary.incomeSummary).toFixed(2)}
          </p>
        </StatisticsSumItem>
      </StatisticsSumList>
    </StatisticsListWrapper>
  );
};

export default CategorySum;
