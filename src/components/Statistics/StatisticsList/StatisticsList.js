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

const customStyles = {
  control: provided => ({
    ...provided,
    height: '50px',
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
  const theme = useTheme();
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
          styles={customStyles}
          className="statisticsSelect"
        />
        <Select
          value={year}
          onChange={handleYearChange}
          options={yearData}
          placeholder={year}
          styles={customStyles}
          className="statisticsSelect"
        />
      </SelectWrapper>

      <StatisticsListTitle>
        <p>{t('statisticsCategory')}</p>
        <p>{t('statisticsAmounts')}</p>
      </StatisticsListTitle>
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
            // потрібно замінити умову, щоб lan === 'ru'

            return (
              <StatisticsItem key={name}>
                <Cube color={categories[name]} />
                <StatisticsWrapper>
                  <p>{categoryName}</p> <Sum>{Math.abs(total)}</Sum>
                </StatisticsWrapper>
              </StatisticsItem>
            );
          })}
      </StatisticsList>
      <StatisticsSumList>
        <StatisticsSumItem>
          <p>{t('statisticsOutcomes')}</p>
          <p style={{ color: theme.color.text_pink }}>
            {summary && Math.abs(summary.expenseSummary)}
          </p>
        </StatisticsSumItem>
        <StatisticsSumItem>
          <p>{t('statisticsIncomes')}</p>
          <p style={{ color: theme.color.accent }}>
            {summary && summary.incomeSummary}
          </p>
        </StatisticsSumItem>
      </StatisticsSumList>
    </StatisticsListWrapper>
  );
};

export default CategorySum;
