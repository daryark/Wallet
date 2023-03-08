import {
  StatisticsListWrapper,
  StatisticsListTitle,
  StatisticsList,
  StatisticsItem,
  StatisticsSumList,
  StatisticsSumItem,
  Cube,
  Sum,
  StatisticsWrapper,
} from './StatisticsList.styled';
import { categories } from './categories';

import React, { useState } from 'react';
import Select from 'react-select';
import { useTheme } from 'styled-components';

const month = [
  { value: 'January', label: 'January' },
  { value: 'February', label: 'February' },
  { value: 'March', label: 'March' },
  { value: 'April', label: 'April' },
  { value: 'May', label: 'May' },
  { value: 'June', label: 'June' },
  { value: 'July', label: 'July' },
  { value: 'August', label: 'August' },
  { value: 'September', label: 'September' },
  { value: 'October', label: 'October' },
  { value: 'November', label: 'November' },
  { value: 'December', label: 'December' },
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
  const [selectedOption, setSelectedOption] = useState(null);
  const theme = useTheme();

  const handleChange = selectedOption => {
    setSelectedOption(selectedOption);
  };

  return (
    <StatisticsListWrapper>
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={month}
        placeholder="Select a month"
        styles={customStyles}
      />
      <StatisticsListTitle>
        <p>Category</p>
        <p>Sum</p>
      </StatisticsListTitle>
      <StatisticsList>
        {categories.map(({ title, color }) => (
          <StatisticsItem key={title}>
            <Cube color={color} />
            <StatisticsWrapper>
              <p>{title}</p> <Sum>800</Sum>
            </StatisticsWrapper>
          </StatisticsItem>
        ))}
      </StatisticsList>
      <StatisticsSumList>
        <StatisticsSumItem>
          <p>Expenses</p>
          <p style={{ color: theme.color.text_pink }}>22 549.24</p>
        </StatisticsSumItem>
        <StatisticsSumItem>
          <p>Income</p>
          <p style={{ color: theme.color.accent }}>27 350.00</p>
        </StatisticsSumItem>
      </StatisticsSumList>
    </StatisticsListWrapper>
  );
};

export default CategorySum;
