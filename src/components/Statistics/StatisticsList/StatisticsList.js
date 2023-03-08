import {
  StatisticsListTitle,
  StatisticsList,
  StatisticsItem,
  StatisticsSumList,
  StatisticsSumItem,
  Cube,
  StatisticsWrapper,
} from './StatisticsList.styled';
import { categories } from './categories';
import { useTheme } from 'styled-components';

const CategorySum = () => {
  const theme = useTheme();
  // console.log(theme);

  return (
    <>
      <StatisticsListTitle>
        <p>Category</p>
        <p>Sum</p>
      </StatisticsListTitle>

      <StatisticsList>
        {categories.map(({ title, color }) => (
          <StatisticsItem key={title}>
            <Cube color={color} />
            <StatisticsWrapper>
              <p>{title}</p> <p>800</p>
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
    </>
  );
};

export default CategorySum;
