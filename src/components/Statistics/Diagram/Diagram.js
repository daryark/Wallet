import {ArcElement, Chart as ChartJS, Legend, Tooltip} from 'chart.js';
import {Doughnut} from 'react-chartjs-2';
import {DiagramWrapper} from './Diagram.styled';
import {useSelector} from "react-redux";
import {selectBalance, selectSummary} from "../../../redux/transactions/trans-selectors";
import {categories} from "../categories";
import {useEffect, useState} from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

export const Diagram = () => {
  const [data, setData] = useState([])
  const summary = useSelector(selectSummary)

  const balance = useSelector(selectBalance)
  const balanceText = `₴ ${balance.toFixed(2)}`;

  useEffect(() => {
    const doughnutData = () => {
      if (!summary) return []
      return [
        {
          data: summary.categoriesSummary.map(({type, total}) => {
            if (type === "INCOME") return null
            return Math.abs(total)
          }),
          backgroundColor: summary.categoriesSummary.map(({name, type}) => {
            if (type === "INCOME") return null
            return categories[name]
          }),
          borderColor: summary.categoriesSummary.map(({name, type}) => {
            if (type === "INCOME") return null
            return categories[name]
          }),
          borderWidth: 1,
        },
      ]
    }
    setData(doughnutData())
  }, [summary])


  const plugins = [
    {
      beforeDraw: function ({width, height, ctx}) {
        ctx.restore();
        ctx.font = 20 + 'px sans-serif';
        ctx.textBaseline = 'top';
        const text = balanceText,
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2;
        ctx.fillText(text, textX, textY);
        ctx.save();
      },
    },
  ];
  return (
    <DiagramWrapper>
      {data.length && <Doughnut data={{datasets: data}} plugins={plugins} type={'doughnut'}/>}
    </DiagramWrapper>
  );
};
