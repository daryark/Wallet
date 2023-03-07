import { useDispatch } from 'react-redux';
import { isModalAddTransactionOpen } from 'redux/global/globalSlice';
import { RiEdit2Line } from 'react-icons/ri';

import { deleteTransaction } from 'redux/transactions/trans-operations';
import { setEditTransaction } from 'redux/transactions/transSlice';
import transitions from './transitionsData.json';

import { Container } from 'components/common/common.styled';
import {
  StyledList,
  StyledItem,
  StyledSpan,
  StyledDeleteBtn,
  StyledEditBtn,
  StyledSum,
} from './TransitionsList.styled';

export const TransactionsListMobile = () => {
  const dispatch = useDispatch();

  const handleEditTransition = contactUser => {
    dispatch(setEditTransaction(contactUser));
    dispatch(isModalAddTransactionOpen());
  };
  const handleDeleteTransition = transitionId => {
    dispatch(deleteTransaction(transitionId));
  };
  return (
    <Container>
      {transitions.map(
        ({ id, transactionDate, type, categoryId, comment, amount }) => (
          <StyledList key={id}>
            <StyledItem type={type}>
              <StyledSpan>Date</StyledSpan>
              {transactionDate}
            </StyledItem>
            <StyledItem type={type}>
              <StyledSpan>Type</StyledSpan>
              {type}
            </StyledItem>
            <StyledItem type={type}>
              <StyledSpan>Category</StyledSpan>
              {categoryId}
            </StyledItem>
            <StyledItem type={type}>
              <StyledSpan>Comment</StyledSpan>
              {comment}
            </StyledItem>
            <StyledItem type={type}>
              <StyledSpan>Sum</StyledSpan>
              <StyledSum type={type}>{parseFloat(amount).toFixed(2)}</StyledSum>
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
        )
      )}
    </Container>
  );
};
