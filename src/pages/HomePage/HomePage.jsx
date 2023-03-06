import { TransactionsList } from 'components';
import React from 'react';

import CategorySum from 'components/StatisticsList/StatisticsList';

export default function HomePage() {
  return (
    <>
      <div>HomePage is showing</div>
      <TransactionsList />
      <CategorySum />
    </>
  );
}
