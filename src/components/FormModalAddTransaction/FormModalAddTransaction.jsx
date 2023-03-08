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
// import { SelectField } from 'components/Forms/SelectField/SelectField';
// import { CustomInputDate } from 'components/Forms/CustomInputDate/CustomInputDate';
// import { DateTimeField } from 'components/ModalAddTransaction/DateTimeField/DateTimeField';

import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

const defaultState = {
  type: 'EXPENSE',
  categoryId: '',
  amount: '',
  date: new Date(),
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
    if (transactionState.type === 'EXPENSE') {
      setTransactionState(prev => ({ ...prev, type: 'INCOME' }));
      event.target.removeAttribute('checked', 'true');
    } else {
      setTransactionState(prev => ({ ...prev, type: 'EXPENSE' }));
      event.target.setAttribute('checked', 'true');
    }
  };

  const handleSelectChange = event => {
    setTransactionState(prev => ({ ...prev, categoryId: event.target.value }));
  };

  const handleDateChange = event => {
    setTransactionState(prev => ({ ...prev, date: event._d }));
  };

  const handleSubmit = (values, actions) => {
    const { amount, comment } = values;

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
      transactionDate: transactionState.date,
      comment,
      amount:
        transactionState.type === 'INCOME' ? Number(amount) : -Number(amount),
    };
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
              name="type"
              onChange={handleCheckboxChange}
              className="switcher__checkbox"
              checked={transactionState.type === 'EXPENSE' ? true : false}
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
              : 'category isHidden'
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

        {/* <Field name="categoryId" component={SelectField} options={options} /> */}

        <div className="amount-date-wrapper">
          <Field
            type="number"
            placeholder="0.00"
            name="amount"
            className="amount"
            // value={Number(transactionState.amount).toFixed(2)}
          />

          <Datetime
            type="date"
            name="date"
            className="date"
            dateFormat="DD.MM.YYYY"
            timeFormat={false}
            value={transactionState.date}
            onChange={handleDateChange}
          />

          {/* <DateTime
            type="date"
            name="date"
            className="date"
            selected={
              transactionState.date ? transactionState.date : new Date()
            }
            // onChange={val => setValue(val)}
            dateFormat="MM.DD.YYYY"
            timeFormat={false}
            // selected={(field.value && new Date(field.value)) || null}
            // onChange={val => {
            //   setFieldValue(field.name, val);
            // }}
          /> */}

          {/* <Field
            name="date"
            as={DateTimeField}
            // placeholder="First Name"
          /> */}

          {/* <Field
            type="date"
            name="date"
            className="date"
            // value={
            //   transactionState.date ? transactionState.date : new Date()
            // }
          /> */}

          {/* <Field
            name="date"
            className="date"
            component={SelectField}
            options={options}
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
