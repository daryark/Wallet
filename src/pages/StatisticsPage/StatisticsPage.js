import React from 'react';
import { StatisticsCommonWrapper } from 'components/Statistics/StatisticsList/StatisticsList.styled';
import { Statistics } from '../../components/Statistics/Statistics';
import CategorySum from 'components/Statistics/StatisticsList/StatisticsList';
import WithAuthRedirect from 'HOC/WithAuthRedirect';

function StatisticsPage() {
  return (
    <StatisticsCommonWrapper>
      <Statistics />
      <CategorySum />
    </StatisticsCommonWrapper>
  );
}

export default WithAuthRedirect(StatisticsPage, '/login');
