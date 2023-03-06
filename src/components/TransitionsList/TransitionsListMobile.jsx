import { useDispatch } from 'react-redux';
import { isModalAddTransactionOpen } from 'redux/global/globalSlice';
import { deleteTransaction } from 'redux/transactions/trans-operations';
import { setEditTransaction } from 'redux/transactions/transSlice';
import transitions from './transitionsData.json';

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
    <section>
      {transitions.map(
        ({ id, transactionDate, type, categoryId, comment, amount }) => (
          <ul key={id}>
            <li>Date: {transactionDate}</li>
            <li>Type: {type}</li>
            <li>Category: {categoryId}</li>
            <li>Comment: {comment}</li>
            <li>Sum: {amount}</li>
            <li>
              <button onClick={() => handleDeleteTransition(id)}>Delete</button>
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
            </li>
          </ul>
        )
      )}
    </section>
    // <table>
    //   <tr>
    //     <th>Date</th>
    //     <th>Type</th>
    //     <th>Category</th>
    //     <th>Comment</th>
    //     <th>Sum</th>
    //   </tr>
    //
    // </table>
  );
};
