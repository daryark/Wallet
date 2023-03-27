import {
  Cube,
  SelectWrapper,
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

import { useTranslation } from 'react-i18next';
import { categoryCheck } from 'components/TransitionsList/categoryCheck';
import { selectLanguage } from 'redux/global/global-selectors';

const yearData = [
  { value: 2021, label: '2021' },
  { value: 2022, label: '2022' },
  { value: 2023, label: '2023' },
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
      width: '160px',
    },
    '@media screen and (min-width: 1280px)': {
      width: '182px',
    },
    backgroundColor: theme.color.bg_white,
  }),

  option: (provided, state) => ({
    ...provided,
    paddingLeft: '15px',
    backgroundColor: state.isSelected ? '#FFFFFF' : theme.color.bg_white_select,
    color: state.isSelected ? '#FFFFFF' : theme.text_dark,
    width: '100%',
    '&:hover': {
      backgroundColor: theme.color.bg_blur,
      color: theme.color.text_blue,
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
      color: theme.color.text_blue,
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
      width: '160px',
    },
    '@media screen and (min-width: 1280px)': {
      width: '182px',
    },
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
  const selectStyles = customStyles(theme);
  const { t } = useTranslation();
  const lan = useSelector(selectLanguage);

  useEffect(() => {
    dispatch(getTransactionSummary({ month: month + 1, year }));
  }, [dispatch, month, year]);

  const handleMonthChange = ({ value }) => {
    setMonth(value);
  };
  const handleYearChange = ({ value }) => {
    setYear(value);
  };

  const monthData = [
    { value: 0, label: t('statisticsJanuary') },
    { value: 1, label: t('statisticsFebruary') },
    { value: 2, label: t('statisticsMarch') },
    { value: 3, label: t('statisticsApril') },
    { value: 4, label: t('statisticsMay') },
    { value: 5, label: t('statisticsJune') },
    { value: 6, label: t('statisticsJuly') },
    { value: 7, label: t('statisticsAugust') },
    { value: 8, label: t('statisticsSeptember') },
    { value: 9, label: t('statisticsOctober') },
    { value: 10, label: t('statisticsNovember') },
    { value: 11, label: t('statisticsDecember') },
  ];

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
        <p>{t('statisticsCategory')}</p>
        <p>{t('statisticsAmounts')}</p>
      </StatisticsListTitle>
      {summary && (
        <StatisticsList>
          {summary &&
            summary.categoriesSummary.map(({ name, type, total }) => {
              if (type === 'INCOME') return null;

              let categoryName = '';
              if (lan === true) {
                categoryName = name;
              }
              if (lan === false) {
                categoryName = categoryCheck(name);
              }
              return (
                <StatisticsItem key={name}>
                  <Cube color={categories[name]} />
                  <StatisticsWrapper>
                    <p>{categoryName}</p>{' '}
                    <Sum>{parseFloat(Math.abs(total)).toFixed(2)}</Sum>
                  </StatisticsWrapper>
                </StatisticsItem>
              );
            })}
        </StatisticsList>
      )}
      <StatisticsSumList>
        <StatisticsSumItem>
          <p>{t('statisticsOutcomes')}</p>
          <p style={{ color: theme.color.text_pink }}>
            {summary && parseFloat(Math.abs(summary.expenseSummary)).toFixed(2)}
          </p>
        </StatisticsSumItem>
        <StatisticsSumItem>
          <p>{t('statisticsIncomes')}</p>
          <p style={{ color: theme.color.accent }}>
            {summary && parseFloat(summary.incomeSummary).toFixed(2)}
          </p>
        </StatisticsSumItem>
      </StatisticsSumList>
    </StatisticsListWrapper>
  );
};

export default CategorySum;
