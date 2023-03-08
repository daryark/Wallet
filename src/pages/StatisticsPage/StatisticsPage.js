import React from 'react';
import { StatisticsCommonWrapper } from 'components/Statistics/StatisticsList/StatisticsList.styled';
import { Statistics } from '../../components/Statistics/Statistics';
import CategorySum from 'components/Statistics/StatisticsList/StatisticsList';

export default function StatisticsPage() {
  return (
    <StatisticsCommonWrapper>
      <Statistics />
      <CategorySum />
    </StatisticsCommonWrapper>
  );
}
