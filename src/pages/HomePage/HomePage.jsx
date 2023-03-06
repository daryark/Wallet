import { TransactionsList } from 'components';
import React from 'react';

import { Media } from 'components/Media/Media';

export default function HomePage() {
  return (
    <>
      <div>HomePage is showing</div>
      {Media.isTablet && <TransactionsList />}
    </>
  );
}
