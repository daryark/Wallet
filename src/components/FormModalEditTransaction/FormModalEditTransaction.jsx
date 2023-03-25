import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { Field } from 'formik';
import { object, string } from 'yup';
import { useTranslation } from 'react-i18next';

import {
  selectBalance,
  selectEditTransaction,
} from 'redux/transactions/trans-selectors';
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
  const { t } = useTranslation();
  const transactionData = useSelector(selectEditTransaction);
  const balance = useSelector(selectBalance);
  const [transactionState] = useState(
    transactionData
      ? {
          ...transactionData,
          amount: Math.abs(transactionData.amount),
        }
      : defaultState
  );

  let isChecked = false;
  if (transactionState.type === '-' || transactionState.type === 'EXPENSE') {
    isChecked = true;
  } else {
    isChecked = false;
  }

  const dispatch = useDispatch();
  let oldAmount = transactionData?.amount ?? 0;

  const handleSubmit = ({ id, amount, comment }) => {
    amount = Number(amount);
    let oldAmnt = Math.abs(oldAmount);

    if (transactionData.type === '-') {
      amount = -Number(amount);
      oldAmnt = -Number(oldAmnt);
    }
    if (transactionData.type === 'EXPENSE') {
      amount = -Number(amount);
      oldAmnt = -Number(oldAmnt);
    }

    dispatch(
      editTransaction({
        id,
        amount,
        comment,
        oldAmnt,
        balance,
      })
    );
    handleCloseModal();
  };

  let validationSchema = object({
    amount: string()
      .required('Required')
      .max(20, 'Must be 20 characters maximum'),
  });

  return (
    <Formik
      initialValues={transactionState}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <FormModalEditTransactionStyled className="modal-form">
        <div className="switcher">
          <span className="income">{t('modalEditTransactionIncomesType')}</span>
          <label className="switcher__box">
            <Field
              disabled
              type="checkbox"
              name="type"
              className="switcher__checkbox"
              checked={isChecked}
            />
            <span className="switcher__toggle"></span>
          </label>
          <span className="expense">
            {t('modalEditTransactionExpenseType')}
          </span>
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
        ></Field>

        <div className="amount-date-wrapper">
          <Field
            type="number"
            placeholder="0.00"
            name="amount"
            className="amount"
          />

          <Field disabled type="date" name="transactionDate" className="date" />
        </div>

        <Field
          type="text"
          placeholder={t('modalAddTransactionComment')}
          name="comment"
          className="comment"
        />

        <div className="btns-wrapper">
          <button type="submit" className="submit-btn">
            {t('transactionsTableEdit')}
          </button>

          <button
            type="button"
            className="cancel-btn"
            onClick={handleCloseModal}
          >
            {t('modalAddTransactionCancelBtn')}
          </button>
        </div>
      </FormModalEditTransactionStyled>
    </Formik>
  );
}

export default FormModalEditTransaction;
