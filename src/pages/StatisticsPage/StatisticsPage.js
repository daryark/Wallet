import React from 'react';
import { StatisticsCommonWrapper } from 'components/Statistics/StatisticsList/StatisticsList.styled';
import { Statistics } from '../../components/Statistics/Statistics';
import CategorySum from 'components/Statistics/StatisticsList/StatisticsList';
import { Container } from 'components/common/common.styled';

export default function StatisticsPage() {
  return (
    <Container>
      <StatisticsCommonWrapper>
        <Statistics />
        <CategorySum />
      </StatisticsCommonWrapper>
    </Container>
  );
}
