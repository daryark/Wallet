import { useDispatch } from 'react-redux';
import { isModalAddTransactionOpen } from 'redux/global/globalSlice';
import { deleteTransaction } from 'redux/transactions/trans-operations';
import { setEditTransaction } from 'redux/transactions/transSlice';
import transitions from './transitionsData.json';

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
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Type</th>
          <th>Category</th>
          <th>Comment</th>
          <th>Sum</th>
        </tr>
      </thead>
      <tbody>
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
                <button onClick={() => handleDeleteTransition(id)}>
                  Delete
                </button>
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};
