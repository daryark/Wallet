import React, {useEffect, useState} from 'react';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import expenses from './expenses.json';
import Select from 'react-select';
import {Container, Title, customStyles} from './Statistics.styled.js'
import {useDispatch, useSelector} from "react-redux";
import {selectCurrency} from "../../redux/monobank/mono-selectors";
import {selectSummary} from "../../redux/transactions/trans-selectors";
import {getTransactionSummary} from "../../redux/transactions/trans-operations";


ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  datasets: [
    {
      label: '# of Votes',
      data: expenses.map(expense => expense.percent),
      backgroundColor: expenses.map(expense => expense.color),
      borderColor: expenses.map(expense => expense.color),
      borderWidth:1,
    },
  ],
};


const plugins = [{
  beforeDraw: function({width, height,ctx}) {
    ctx.restore();
    ctx.font = 20 + "px sans-serif";
    ctx.textBaseline = "top";
    const text = "₴ 24 000.00",
      textX = Math.round((width - ctx.measureText(text).width) / 2),
      textY = height / 2;
    ctx.fillText(text, textX, textY);
    ctx.save();
  }
}]

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
  { value: 2022, label: '2022' },
  { value: 2023, label: '2023' },
];



export const Statistics = () => {
  console.log((new Date).getMonth())
  console.log((new Date).getFullYear())
  // const { response, months } = useSelector(selectSummary);
  // console.log(response, months )
  //
  // const options = months.map(month => ({
  //   value: month,
  //   label: month
  // }));

  const [month, setMonth] = useState((new Date).getMonth());
  const [year, setYear] = useState((new Date).getFullYear());

  useEffect(()=>{

  }, [])

  const handleMonthChange = ({value}) => {
    setMonth(value);
  };
  const handleYearChange = ({value}) => {
    setYear(value);
  };

  return (
    <>
      <Container>
        <Title>Statistics</Title>
        <Doughnut data={data}  plugins={plugins} type={"doughnut"}/>
      </Container>
      <Container>
        <Select
          // defaultInputValue={monthData[month].label}
          value={month}
          onChange={handleMonthChange}
          options={monthData}
          placeholder="Select a month"
          styles={customStyles}
        />
        <Select
          // defaultInputValue={yearData[year].label}
          value={year}
          onChange={handleYearChange}
          options={yearData}
          placeholder="Select a year"
          styles={customStyles}
        />
      </Container>
    </>


  )
}
