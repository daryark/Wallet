import React from 'react';
import { Statistics } from '../../components/Statistics/Statistics';
import CategorySum from 'components/Statistics/StatisticsList/StatisticsList';
import WithAuthRedirect from 'HOC/WithAuthRedirect';

function StatisticsPage() {
  return (
    <div>
      RegisterPage
      <Statistics />
      <CategorySum />
    </div>
  );
}

export default WithAuthRedirect(StatisticsPage, '/login');
