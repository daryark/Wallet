import { TransactionsList } from 'components';
import ModalAddTransaction from 'components/ModalAddTransaction/ModalAddTransaction';
import React from 'react';

export default function HomePage() {
  return (
    <>
      <div>HomePage is showing</div>
      {/* //<TransactionsList /> */}
      <ModalAddTransaction />
    </>
  );
}
