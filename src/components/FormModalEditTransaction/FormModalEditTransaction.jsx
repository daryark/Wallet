import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { Field } from 'formik';
import { object, string } from 'yup';

import { selectEditTransaction } from 'redux/transactions/trans-selectors';
import { editTransaction } from 'redux/transactions/trans-operations';

import { FormModalEditTransactionStyled } from './FormModalEditTransaction.styled';

const defaultState = {
  type: '',
  categoryId: '',
  amount: '',
  transactionDate: '',
  key: '',
  comment: '',
};

function FormModalEditTransaction({ handleCloseModal }) {
  const transactionData = useSelector(selectEditTransaction);
  const [transactionState] = useState(
    transactionData
      ? {
          ...transactionData,
          amount: Math.abs(transactionData.amount),
        }
      : defaultState
  );

  const dispatch = useDispatch();

  const handleSubmit = ({ key, amount, comment }) => {
    dispatch(editTransaction({ id: key, amount, comment }));
    handleCloseModal();
  };

  //   const onSubmit = formData => {
  //     dispatch(addTransaction(formData));
  //   };

  let validationSchema = object({
    amount: string()
      .required('Required')
      .max(20, 'Must be 20 characters maximum'),
    // date: date().default(() => new Date()),
    // type: string().required('Required'),
  });

  return (
    <Formik
      initialValues={transactionState}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <FormModalEditTransactionStyled className="modal-form">
        <div className="switcher">
          <span className="income">Income</span>
          <label className="switcher__box">
            <Field
              disabled
              type="checkbox"
              name="type"
              //   onChange={handleCheckboxChange}
              className="switcher__checkbox"
              checked={transactionState.type === '-' ? true : false}
            />
            <span className="switcher__toggle"></span>
          </label>
          <span className="expense">Expense</span>
        </div>

        <Field
          disabled
          as="select"
          name="categoryId"
          className={
            transactionState.type === 'EXPENSE'
              ? 'category'
              : 'category isHidden' // from GlobalStyles
          }
          //   onClick={handleSelectChange}
        >
          {/* {categories && transactionState.type === 'EXPENSE' && (
            <option hidden style={{ color: '#bdbdbd' }}>
              Select a category
            </option>
          )} */}

          {/* {categories &&
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
            })} */}

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
            disabled
            type="date"
            name="transactionDate"
            className="date"
            // value={
            //   transactionState.transactionDate
            // ? transactionState.transactionDate
            // : new Date()
            // }
          />

          {/* <Field
            component={
              <Datetime
                type="date"
                name="date"
                className="date"
                // onChange={val => setValue(val)}
                dateFormat="MM.DD.YYYY"
                timeFormat={false}
                // initialValue={transactionState.date}
              />
            }
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
            EDIT
          </button>

          <button
            type="button"
            className="cancel-btn"
            onClick={handleCloseModal}
          >
            CANCEL
          </button>
        </div>
      </FormModalEditTransactionStyled>
    </Formik>
  );
}

export default FormModalEditTransaction;
