import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { Field } from 'formik';
import { date, object, string } from 'yup';

import { isModalAddTransactionOpen } from 'redux/global/globalSlice';
import { selectIsModalOpen } from 'redux/global/global-selectors';
import { selectCategories } from 'redux/transactions/trans-selectors';
import {
  addTransaction,
  getTransactionCategories,
} from 'redux/transactions/trans-operations';

import { FormModalAddTransactionStyled } from './FormModalAddTransaction.styled';

const defaultState = {
  type: 'EXPENSE',
  categoryId: '',
  amount: '',
  // date: new Date(),
  date: '',
  comment: '',
};

function FormModalAddTransaction({ handleCloseModal, isEditForm = false }) {
  const [transactionState, setTransactionState] = useState(defaultState);
  const isModalOpen = useSelector(selectIsModalOpen);
  const categories = useSelector(selectCategories);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isModalOpen) return;
    if (!categories.length) {
      dispatch(getTransactionCategories());
    }
  }, [isModalOpen, categories, dispatch]);

  const optionsIncome = categories.filter(
    category => category.type === 'INCOME'
  );

  const optionsExpense = categories.filter(
    category => category.type === 'EXPENSE'
  );

  const handleCheckboxChange = event => {
    transactionState.type === 'EXPENSE'
      ? setTransactionState(prev => ({ ...prev, type: 'INCOME' }))
      : setTransactionState(prev => ({ ...prev, type: 'EXPENSE' }));
  };

  const handleSelectChange = event => {
    console.log('event.target.value ', event.target.value);
    setTransactionState(prev => ({ ...prev, categoryId: event.target.value }));
  };

  const handleSubmit = (values, actions) => {
    const { amount, comment, date } = values;

    const formData = {
      ...(transactionState.type === 'INCOME' && {
        categoryId: optionsIncome[0].id,
      }),
      ...(transactionState.type === 'EXPENSE' && {
        categoryId: transactionState.categoryId
          ? transactionState.categoryId
          : optionsExpense.find(option => option.name === 'Other expenses').id,
      }),

      type: transactionState.type,
      transactionDate: date,
      comment,
      amount:
        transactionState.type === 'INCOME' ? Number(amount) : -Number(amount),
    };
    // console.log('formData', formData);
    onSubmit(formData);
    setTransactionState(prev => ({ ...prev, type: 'EXPENSE' }));
    actions.resetForm();
    dispatch(isModalAddTransactionOpen());
  };

  const onSubmit = formData => {
    dispatch(addTransaction(formData));
  };

  let validationSchema = object({
    amount: string()
      .required('Required')
      .max(20, 'Must be 20 characters maximum'),
    date: date().default(() => new Date()),
    type: string().required('Required'),
  });

  return (
    <Formik
      initialValues={transactionState}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <FormModalAddTransactionStyled className="modal-form">
        <div className="switcher">
          <span className="income">Income</span>
          <label className="switcher__box">
            <Field
              type="checkbox"
              checked={transactionState.type === 'EXPENSE' ? true : false}
              name="type"
              onChange={handleCheckboxChange}
              className="switcher__checkbox"
            />
            <span className="switcher__toggle"></span>
          </label>
          <span className="expense">Expense</span>
        </div>

        <Field
          as="select"
          name="categoryId"
          className={
            transactionState.type === 'EXPENSE'
              ? 'category'
              : 'category isHidden' // from GlobalStyles
          }
          onClick={handleSelectChange}
        >
          {categories && transactionState.type === 'EXPENSE' && (
            <option hidden style={{ color: '#bdbdbd' }}>
              Select a category
            </option>
          )}

          {categories &&
            transactionState.type === 'EXPENSE' &&
            optionsExpense.map(category => {
              return (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              );
            })}

          {categories &&
            transactionState.type === 'INCOME' &&
            optionsIncome.map(category => {
              return (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              );
            })}

          {/* {categories &&
            categories.map(category => {
              if (
                transactionState.type === 'INCOME' &&
                category.name === 'Income'
              ) {
                return (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                );
              }

              if (
                transactionState.type === 'EXPENSE' &&
                category.name !== 'Income'
              ) {
                return (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                );
              }
            })} */}
        </Field>

        <div className="amount-date-wrapper">
          <Field
            type="number"
            placeholder="0.00"
            name="amount"
            className="amount"
          />

          <Field
            type="date"
            name="date"
            className="date"
            // value={
            //   transactionState.date ? transactionState.date : new Date()
            // }
          />

          {/* <Field
            component={ */}
          {/* <Datetime
            type="date"
            name="date"
            className="date"
            // onChange={val => setValue(val)}
            dateFormat="MM.DD.YYYY"
            timeFormat={false}
            // initialValue={transactionState.date}
          /> */}
          {/* }
          /> */}
        </div>

        <Field
          type="text"
          placeholder="Comment"
          name="comment"
          className="comment"
        />

        <div className="btns-wrapper">
          <button type="submit" className="submit-btn">
            ADD
          </button>

          <button
            type="button"
            className="cancel-btn"
            onClick={handleCloseModal}
          >
            CANCEL
          </button>
        </div>
      </FormModalAddTransactionStyled>
    </Formik>
  );
}

export default FormModalAddTransaction;
