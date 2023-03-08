import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import expenses from './expenses.json';
import { DiagramWrapper } from './Diagram.styled';

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

export const Diagram = () => {
  return (
    <DiagramWrapper>
      <Doughnut data={data} plugins={plugins} type={'doughnut'} />
    </DiagramWrapper>
  );
};
