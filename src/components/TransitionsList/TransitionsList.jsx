import { useDispatch } from 'react-redux';
import { isModalAddTransactionOpen } from 'redux/global/globalSlice';
import { deleteTransaction } from 'redux/transactions/trans-operations';
import { setEditTransaction } from 'redux/transactions/transSlice';
import transitions from './transitionsData.json';
import {
  StyledRow,
  StyledTable,
  StyledTbody,
  StyledThead,
} from './TransitionsList.styled';

export const TransactionsList = () => {
  const dispatch = useDispatch();

  const handleEditTransition = contactUser => {
    dispatch(setEditTransaction(contactUser));
    dispatch(isModalAddTransactionOpen());
  };
  const handleDeleteTransition = transitionId => {
    dispatch(deleteTransaction(transitionId));
  };
  return (
    <StyledTable>
      <StyledThead>
        <tr>
          <th>Date</th>
          <th>Type</th>
          <th>Category</th>
          <th>Comment</th>
          <th>Sum</th>
        </tr>
      </StyledThead>
      <StyledTbody>
        {transitions.map(
          ({ id, transactionDate, type, categoryId, comment, amount }) => (
            <StyledRow key={id}>
              <td>{transactionDate}</td>
              <td>{type}</td>
              <td>{categoryId}</td>
              <td>{comment}</td>
              <td>{parseFloat(amount).toFixed(2)}</td>
              <td>
                <button
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
                  Edit
                </button>
              </td>
              <td>
                <button onClick={() => handleDeleteTransition(id)}>
                  Delete
                </button>
              </td>
            </StyledRow>
          )
        )}
      </StyledTbody>
    </StyledTable>
  );
};
