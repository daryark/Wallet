import { useDispatch } from 'react-redux';
import {
  deleteTransaction,
  editTransaction,
} from 'redux/transactions/trans-operations';
import transitions from './transitionsData.json';

export const TransactionsList = () => {
  const dispatch = useDispatch();

  const handleEditTransition = contactUser => {
    dispatch(editTransaction(contactUser));
    dispatch(isModalAddTransactionOpen());
  };
  const handleDeleteTransition = transitionId => {
    dispatch(deleteTransaction(transitionId));
  };
  return (
    <table>
      <tr>
        <th>Date</th>
        <th>Type</th>
        <th>Category</th>
        <th>Comment</th>
        <th>Sum</th>
      </tr>
      {transitions.map(
        ({ id, transactionDate, type, categoryId, comment, amount }) => (
          <tr key={id}>
            <td>{transactionDate}</td>
            <td>{type}</td>
            <td>{categoryId}</td>
            <td>{comment}</td>
            <td>{amount}</td>
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
              <button onClick={() => handleDeleteTransition(id)}>Delete</button>
            </td>
          </tr>
        )
      )}
    </table>
  );
};
