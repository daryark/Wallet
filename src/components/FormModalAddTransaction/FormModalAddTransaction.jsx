import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { Field } from 'formik';
import { date, object, string } from 'yup';
import { useMediaQuery } from 'react-responsive';

import DateComponent from './DateComponent';
import SelectComponent from './SelectComponent';

import { isModalAddTransactionOpen } from 'redux/global/globalSlice';
import { selectIsModalOpen } from 'redux/global/global-selectors';
import { selectCategories } from 'redux/transactions/trans-selectors';
import {
  addTransaction,
  getTransactionCategories,
} from 'redux/transactions/trans-operations';

import {
  CalendarIconStyled,
  FormModalAddTransactionStyled,
  MinusIconStyled,
  PlusIconStyled,
} from './FormModalAddTransaction.styled';

const defaultState = {
  type: 'EXPENSE',
  categoryId: '',
  amount: '',
  date: new Date(),
  comment: '',
};

function FormModalAddTransaction({ handleCloseModal }) {
  const [transactionState, setTransactionState] = useState(defaultState);
  const isModalOpen = useSelector(selectIsModalOpen);
  const categories = useSelector(selectCategories);

  const dispatch = useDispatch();

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

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

  const handleSelectChange = categoryId => {
    setTransactionState(prev => ({ ...prev, categoryId }));
  };

  const handleDateChange = selectedDate => {
    setTransactionState(prev => ({ ...prev, date: selectedDate._d }));
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
    date: date()
      .required('Required')
      .default(() => new Date()),
    type: string().required('Required'),
  });

  return (
    <Formik
      initialValues={transactionState}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <FormModalAddTransactionStyled className="modal-form">
        <div className="switcher" style={{ position: 'relative' }}>
          <span className="income">Income</span>
          {transactionState.type === 'INCOME' && <MinusIconStyled />}
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
          {transactionState.type === 'EXPENSE' && <PlusIconStyled />}
          <span className="expense">Expense</span>
        </div>

        <Field
          as="select"
          transactionType={transactionState.type}
          component={SelectComponent}
          className={
            transactionState.type === 'EXPENSE'
              ? 'category'
              : 'category isHidden'
          }
          name="category"
          placeholder="Select a category"
          options={(transactionState.type === 'EXPENSE'
            ? optionsExpense
            : optionsIncome
          ).map(option => ({ value: option.id, label: option.name }))}
          onChange={option => {
            handleSelectChange(option.value);
          }}
        />

        {/* <Select
          key={transactionState.type}
          styles={selectStyles(transactionState.type)}
          components={{ TfiAngleDown }}
          options={(transactionState.type === 'EXPENSE'
            ? optionsExpense
            : optionsIncome
          ).map(option => ({ value: option.id, label: option.name }))}
          placeholder="Select a category"
          onChange={option => {
            handleSelectChange(option.value);
          }}
          className={
            transactionState.type === 'EXPENSE'
              ? 'category'
              : 'category isHidden'
          }
        /> */}

        <div className="amount-date-wrapper">
          <Field
            type="number"
            placeholder="0.00"
            name="amount"
            className="amount"
            // value={Number(transactionState.amount).toFixed(2)}
          />

          <Field
            as="date"
            component={DateComponent}
            className="date"
            name="date"
            dateFormat="DD.MM.YYYY"
            timeFormat={false}
            value={transactionState.date}
            onChange={handleDateChange}
          />

          <CalendarIconStyled />
        </div>

        <Field
          as="textarea"
          rows={isMobile ? '5' : '1'}
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
