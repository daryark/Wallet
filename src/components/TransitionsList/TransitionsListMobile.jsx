import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { isModalAddTransactionOpen } from 'redux/global/globalSlice';
import { setEditTransaction } from 'redux/transactions/transSlice';
import {
  selectCategories,
  selectTransactions,
} from 'redux/transactions/trans-selectors';

import { RiEdit2Line } from 'react-icons/ri';

import {
  deleteTransaction,
  fetchTransactions,
  getTransactionCategories,
} from 'redux/transactions/trans-operations';

import { Container } from 'components/common/common.styled';
import {
  StyledList,
  StyledItem,
  StyledSpan,
  StyledDeleteBtn,
  StyledEditBtn,
  StyledSum,
} from './TransitionsList.styled';
import { getDate } from 'helpers/getDate';
import { capitalizeFirstLetter } from 'helpers/capitalize';

export const TransactionsListMobile = () => {
  const dispatch = useDispatch();
  const transactions = useSelector(selectTransactions);
  const categories = useSelector(selectCategories);

  useEffect(() => {
    dispatch(fetchTransactions());
    dispatch(getTransactionCategories());
  }, [dispatch]);

  const handleEditTransition = contactUser => {
    dispatch(setEditTransaction(contactUser));
    dispatch(isModalAddTransactionOpen());
  };
  const handleDeleteTransition = transitionId => {
    dispatch(deleteTransaction(transitionId));
  };
  return (
    <Container>
      {transactions.map(
        ({ id, transactionDate, type, categoryId, comment, amount }) => {
          const date = getDate(transactionDate);

          const positNum = Math.abs(amount);
          const sum = parseFloat(positNum).toFixed(2);

          const getCategory = categories?.find(c => c.id === categoryId);
          const categoryName = getCategory?.name;

          return (
            <StyledList key={id}>
              <StyledItem type={type}>
                <StyledSpan>Date</StyledSpan>
                {date}
              </StyledItem>
              <StyledItem type={type}>
                <StyledSpan>Type</StyledSpan>
                {type}
              </StyledItem>
              <StyledItem type={type}>
                <StyledSpan>Category</StyledSpan>
                {categoryName}
              </StyledItem>
              <StyledItem type={type}>
                <StyledSpan>Comment</StyledSpan>
                {capitalizeFirstLetter(comment)}
              </StyledItem>
              <StyledItem type={type}>
                <StyledSpan>Sum</StyledSpan>
                <StyledSum type={type}>{sum}</StyledSum>
              </StyledItem>
              <StyledItem type={type}>
                <StyledDeleteBtn onClick={() => handleDeleteTransition(id)}>
                  Delete
                </StyledDeleteBtn>
                <StyledEditBtn
                  onClick={() =>
                    handleEditTransition({
                      id,
                      transactionDate,
                      type,
                      categoryId,
                      comment,
                      amount,
                    })
                  }
                >
                  <RiEdit2Line size={14} />
                  Edit
                </StyledEditBtn>
              </StyledItem>
            </StyledList>
          );
        }
      )}
    </Container>
  );
};
