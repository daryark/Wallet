import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field } from 'formik';
import { date, object, string } from 'yup';
import { useMediaQuery } from 'react-responsive';

import { selectIsModalOpen } from 'redux/global/global-selectors';
import { selectCategories } from 'redux/transactions/trans-selectors';
import { isModalAddTransactionOpen } from 'redux/global/globalSlice';
import {
  addTransaction,
  getTransactionCategories,
} from 'redux/transactions/trans-operations';

import DateComponent from './DateComponent/DateComponent';
import SelectComponent from './SelectComponent/SelectComponent';

import {
  ErrorMessageStyled,
  FormModalAddTransactionStyled,
} from './FormModalAddTransaction.styled';
import ButtonSubmit from './ButtonsModalAddTransaction/ButtonSubmit';
import ButtonCancel from './ButtonsModalAddTransaction/ButtonCancel';

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
      .max(16, 'Must be 16 characters maximum'),
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
      onChange={({ nextValues }) => {
        setTransactionState(prev => ({ ...prev, nextValues }));
      }}
    >
      <FormModalAddTransactionStyled className="modal-form">
        <div className="switcher" style={{ position: 'relative' }}>
          <span className={transactionState.type === 'INCOME' ? 'income' : ''}>
            Income
          </span>
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
          <span
            className={transactionState.type === 'EXPENSE' ? 'expense' : ''}
          >
            Expense
          </span>
        </div>
        <div
          className={
            transactionState.type === 'EXPENSE'
              ? 'category-wrapper'
              : 'category-wrapper isHidden'
          }
        >
          <label>
            <Field
              as="select"
              name="category"
              placeholder="Select a category"
              component={SelectComponent}
              options={(transactionState.type === 'EXPENSE'
                ? optionsExpense
                : optionsIncome
              ).map(option => ({ value: option.id, label: option.name }))}
              onChange={option => {
                handleSelectChange(option.value);
              }}
            />
          </label>
        </div>

        <div className="amount-date-wrapper">
          <div className="amount-wrapper">
            <label>
              <Field
                type="number"
                placeholder="0.00"
                name="amount"
                className="amount"
              />
            </label>
            <ErrorMessageStyled name="amount" component="div" />
          </div>

          <div className="date-wrapper">
            <label>
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
            </label>
            <ErrorMessageStyled name="date" component="div" />
          </div>
        </div>

        <Field
          as="textarea"
          rows={isMobile ? '5' : '1'}
          type="text"
          placeholder="Comment"
          name="comment"
        />
        <div className="btns-wrapper">
          <ButtonSubmit className="submit-btn" text="ADD" />
          <ButtonCancel handleCloseModal={handleCloseModal} text={'CANCEL'} />
        </div>
      </FormModalAddTransactionStyled>
    </Formik>
  );
}

export default FormModalAddTransaction;
