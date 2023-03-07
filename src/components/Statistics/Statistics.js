import React, { useState } from 'react';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import expenses from './expenses.json';
import Select from 'react-select';
import styled from 'styled-components';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  datasets: [
    {
      label: '# of Votes',
      data: expenses.map(expense => expense.percent),
      backgroundColor: expenses.map(expense => expense.color),
      borderColor: expenses.map(expense => expense.color),
      borderWidth: 1,
    },
  ],
};

const plugins = [
  {
    beforeDraw: function ({ width, height, ctx }) {
      ctx.restore();
      ctx.font = 20 + 'px sans-serif';
      ctx.textBaseline = 'top';
      const text = '₴ 24 000.00',
        textX = Math.round((width - ctx.measureText(text).width) / 2),
        textY = height / 2;
      ctx.fillText(text, textX, textY);
      ctx.save();
    },
  },
];

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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 380px;
  height: 380px;
`;
const Title = styled.h1`
  font-weight: 400;
  font-size: 30px;
  margin-bottom: 8px;
`;

const customStyles = {
  control: provided => ({
    ...provided,
    width: '230px',
    height: '40px',
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

export const Statistics = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = selectedOption => {
    setSelectedOption(selectedOption);
  };

  return (
    <>
      <Container>
        <Title>Statistics</Title>
        <Doughnut data={data} plugins={plugins} type={'doughnut'} />
      </Container>
      <Container>
        <Select
          value={selectedOption}
          onChange={handleChange}
          options={month}
          placeholder="Select a month"
          styles={customStyles}
        />
      </Container>
    </>
  );
};
