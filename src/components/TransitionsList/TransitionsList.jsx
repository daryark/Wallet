import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RiEdit2Line } from 'react-icons/ri';

import { Table } from 'antd';

import { isModalAddTransactionOpen } from 'redux/global/globalSlice';
import { setEditTransaction } from 'redux/transactions/transSlice';
import { selectTransactions } from 'redux/transactions/trans-selectors';
// import transitions from './transitionsData.json';

import {
  fetchTransactions,
  deleteTransaction,
} from 'redux/transactions/trans-operations';
import {
  StyledBox,
  BtnBox,
  StyledDeleteBtn,
  StyledEditBtn,
  StyledAmount,
} from './TransitionsList.styled';

export const TransactionsList = () => {
  const dispatch = useDispatch();
  const transactions = useSelector(selectTransactions);
  console.log(transactions);

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  const handleEditTransition = contactUser => {
    dispatch(setEditTransaction(contactUser));
    dispatch(isModalAddTransactionOpen());
  };
  const handleDeleteTransition = transitionId => {
    dispatch(deleteTransaction(transitionId));
  };

  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: (_, record) => <div>{record.transactionDate}</div>,
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      render: (_, record) => <div>{record.categoryId}</div>,
    },
    {
      title: 'Comment',
      dataIndex: 'comment',
      key: 'comment',
      render: (_, record) => <div>{record.comment}</div>,
    },
    {
      title: 'Sum',
      dataIndex: 'sum',
      key: 'sum',
      render: (_, record) => {
        const amount = parseFloat(record.amount).toFixed(2);
        return <StyledAmount type={record.type}>{amount}</StyledAmount>;
      },
    },
    {
      title: '',
      key: 'action',
      render: (_, record) => {
        return (
          <BtnBox>
            <StyledEditBtn onClick={() => handleEditTransition(record)}>
              <RiEdit2Line size={14} />
            </StyledEditBtn>
            <StyledDeleteBtn onClick={() => handleDeleteTransition(record.key)}>
              Delete
            </StyledDeleteBtn>
          </BtnBox>
        );
      },
    },
  ];
  const dataSource = transactions?.map(
    ({ id, transactionDate, type, categoryId, comment, amount }) => ({
      key: id,
      transactionDate,
      type: type === 'INCOME' ? '+' : '-',
      categoryId,
      comment,
      amount,
    })
  );

  return (
    <>
      {transactions.length > 0 ? (
        <StyledBox>
          <Table dataSource={dataSource} columns={columns}></Table>
        </StyledBox>
      ) : (
        <div>
          There aren't any transactions. Press the button and add your first
          one!
        </div>
      )}
    </>
  );
};
