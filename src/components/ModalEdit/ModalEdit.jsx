import { useDispatch, useSelector } from 'react-redux';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';

// import { BsX } from 'react-icons/bs';

import { TextField } from 'components/FormikForm/TextField';
import { isModalAddTransactionOpen } from 'redux/global/globalSlice';
import { selectEditTransaction } from 'redux/transactions/trans-selectors';
import { editTransaction } from 'redux/transactions/trans-operations';
import { categories } from 'components/Statistics/StatisticsList/categories';
import { getDate } from 'helpers/getDate';
import { capitalizeFirstLetter } from 'helpers/capitalize';

export const ModalEdit = () => {
  const updateTransaction = useSelector(selectEditTransaction);
  const dispatch = useDispatch();
  const transactionDate = getDate(updateTransaction.transactionDate);
  const positNum = Math.abs(updateTransaction.amount);
  const sum = parseFloat(positNum).toFixed(2);

  const getCategory = categories?.find(
    c => c.id === updateTransaction.categoryId
  );
  const categoryName = getCategory?.name;
  const capitalizedComment = capitalizeFirstLetter(updateTransaction.comment);

  // console.log(updateTransaction);

  // нужно переписать config, validationSchema !!!!!!!!!!!!!!!!!!!!

  const config = [
    { label: 'Name', type: 'text', name: 'name' },
    { label: 'Number', type: 'tel', name: 'number' },
  ];
  const initialValues = {
    type: updateTransaction.type,
    categoryId: categoryName,
    amount: sum,
    date: transactionDate,
    comment: capitalizedComment,
  };
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Must be more than 7 characters')
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    number: Yup.string()
      .min(7, 'Must be more than 7 characters')
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
  });
  const onSubmit = (values, { resetForm }) => {
    const name = values.name;
    const number = values.number;
    const user = { name, number, id: updateTransaction.id };
    dispatch(editTransaction(user));
    dispatch(isModalAddTransactionOpen());

    resetForm();
  };

  return (
    <section>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          {config.map(({ label, type, name }) => (
            <TextField key={name} label={label} type={type} name={name} />
          ))}
          <button type="submit">Edit contact</button>
        </Form>
      </Formik>
    </section>
  );
};
