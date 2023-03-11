import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RiEdit2Line } from 'react-icons/ri';

import { Table } from 'antd';

import { toggleEditModal } from 'redux/global/globalSlice';
import { setEditTransaction } from 'redux/transactions/transSlice';
import {
  selectBalance,
  selectCategories,
  selectIsDeleting,
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
  StyledNoTransactionDiv,
} from './TransitionsList.styled';
import { getDate } from 'helpers/getDate';
import { capitalizeFirstLetter } from 'helpers/capitalize';
import { LoaderDel } from './LoaderDelBtn';
import { useRef } from 'react';
import { ModalEditTransaction } from 'components/ModalEditTransaction/ModalEditTransaction';
import { selectIsEditModalOpen } from 'redux/global/global-selectors';

export const TransactionsList = () => {
  const dispatch = useDispatch();
  const balance = useSelector(selectBalance);
  const categories = useSelector(selectCategories);
  const transactions = useSelector(selectTransactions);
  const loading = useSelector(selectIsDeleting);
  const isEditModalOpen = useSelector(selectIsEditModalOpen);

  const delId = useRef(null);

  useEffect(() => {
    dispatch(fetchTransactions());
    dispatch(getTransactionCategories());
  }, [dispatch]);

  const handleEditTransition = contactUser => {
    dispatch(setEditTransaction(contactUser));
    dispatch(toggleEditModal());
  };
  const handleDeleteTransition = (transitionId, balance, delAmount) => {
    delId.current = transitionId;
    dispatch(deleteTransaction({ transitionId, balance, delAmount }));
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
              disabled={loading && record.key === delId.current}
              onClick={() =>
                handleDeleteTransition(record.key, balance, record.amount)
              }
            >
              {loading && record.key === delId.current ? (
                <LoaderDel />
              ) : (
                'Delete'
              )}
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
  const scroll = { scrollToFirstRowOnChange: true, y: 450 };
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
          {isEditModalOpen && <ModalEditTransaction />}
        </StyledBox>
      ) : (
        <StyledNoTransactionDiv>
          There aren't any transactions. Press the button and add your first
          one!
        </StyledNoTransactionDiv>
      )}
    </>
  );
};
