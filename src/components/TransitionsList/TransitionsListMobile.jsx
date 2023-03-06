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
            <StyledItem>
              <StyledSpan>Date</StyledSpan>
              {transactionDate}
            </StyledItem>
            <StyledItem>
              <StyledSpan>Type</StyledSpan>
              {type}
            </StyledItem>
            <StyledItem>
              <StyledSpan>Category</StyledSpan>
              {categoryId}
            </StyledItem>
            <StyledItem>
              <StyledSpan>Comment</StyledSpan>
              {comment}
            </StyledItem>
            <StyledItem>
              <StyledSpan>Sum</StyledSpan>
              <StyledSum>{parseFloat(amount).toFixed(2)}</StyledSum>
            </StyledItem>
            <StyledItem>
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
