import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RiEdit2Line } from 'react-icons/ri';

import { Table } from 'antd';

import { toggleEditModal } from 'redux/global/globalSlice';
import { setEditTransaction } from 'redux/transactions/transSlice';
import {
  selectBalance,
  selectCategories,
  selectTransactions,
} from 'redux/transactions/trans-selectors';

import {
  fetchTransactions,
  deleteTransaction,
  getTransactionCategories,
} from 'redux/transactions/trans-operations';
import {
  StyledBox,
  BtnBox,
  StyledDeleteBtn,
  StyledEditBtn,
  StyledAmount,
} from './TransitionsList.styled';
import { getDate } from 'helpers/getDate';
import { capitalizeFirstLetter } from 'helpers/capitalize';

export const TransactionsList = () => {
  const dispatch = useDispatch();
  const balance = useSelector(selectBalance);
  const categories = useSelector(selectCategories);
  const transactions = useSelector(selectTransactions);

  useEffect(() => {
    dispatch(fetchTransactions());
    dispatch(getTransactionCategories());
  }, [dispatch]);

  const handleEditTransition = contactUser => {
    dispatch(setEditTransaction(contactUser));
    dispatch(toggleEditModal());
  };
  const handleDeleteTransition = transitionId => {
    dispatch(deleteTransaction(transitionId));
  };

  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      sorter: (a, b) => {
        const ams = new Date(a.transactionDate).getTime();
        const bms = new Date(b.transactionDate).getTime();
        return ams - bms;
      },
      render: (_, record) => {
        const date = getDate(record.transactionDate);
        return <div>{date}</div>;
      },
    },
    {
      title: 'Type',
      align: 'center',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      render: (_, record) => {
        if (!categories) return;
        const getCategory = categories.find(c => c.id === record.categoryId);
        const categoryName = getCategory?.name;

        return <div>{categoryName}</div>;
      },
    },
    {
      title: 'Comment',
      dataIndex: 'comment',
      key: 'comment',
      render: (_, record) => <div>{capitalizeFirstLetter(record.comment)}</div>,
    },
    {
      title: 'Sum',
      align: 'right',
      dataIndex: 'sum',
      key: 'sum',
      sorter: (a, b) => a.amount - b.amount,
      render: (_, record) => {
        const positNum = Math.abs(record.amount);
        const amount = parseFloat(positNum).toFixed(2);
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
            <StyledDeleteBtn
              onClick={() =>
                handleDeleteTransition(record.key, balance, record.amount)
              }
            >
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
  const scroll = { scrollToFirstRowOnChange: true, y: 500 };
  return (
    <>
      {transactions.length > 0 ? (
        <StyledBox>
          <Table
            dataSource={dataSource}
            columns={columns}
            scroll={scroll}
            pagination={false}
          ></Table>
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
