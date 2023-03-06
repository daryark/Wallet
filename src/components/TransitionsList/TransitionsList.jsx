import transitions from './transitionsData.json';

export const TransactionsList = () => {
  const handleEditTransition = transitionId => {};
  const handleDeleteTransition = transitionId => {};
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
              <button onClick={() => handleEditTransition(id)}>Edit</button>
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
