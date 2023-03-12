import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';

import { toggleEditModal } from 'redux/global/globalSlice';
import { setEditTransaction } from 'redux/transactions/transSlice';
import {
  selectBalance,
  selectCategories,
  selectIsDeleting,
  selectTransactions,
} from 'redux/transactions/trans-selectors';

import { RiEdit2Line } from 'react-icons/ri';

import {
  deleteTransaction,
  fetchTransactions,
  getTransactionCategories,
} from 'redux/transactions/trans-operations';

import { selectLanguage } from 'redux/global/global-selectors';

import { useTranslation } from 'react-i18next';
import { categoryCheck, typeCheck } from './categoryCheck';

import {
  StyledList,
  StyledItem,
  StyledSpan,
  StyledDeleteBtn,
  StyledEditBtn,
  StyledSum,
  StyledNoTransactionDiv,
} from './TransitionsList.styled';
import { getDate } from 'helpers/getDate';
import { capitalizeFirstLetter } from 'helpers/capitalize';
import { LoaderDel } from './LoaderDelBtn';

export const TransactionsListMobile = () => {
  const dispatch = useDispatch();
  const balance = useSelector(selectBalance);
  const transactions = useSelector(selectTransactions);
  const categories = useSelector(selectCategories);
  const loading = useSelector(selectIsDeleting);

  const { t } = useTranslation();
  const delId = useRef(null);
  const lan = useSelector(selectLanguage);

  useEffect(() => {
    dispatch(fetchTransactions());
    dispatch(getTransactionCategories());
  }, [dispatch]);

  const handleEditTransition = contactUser => {
    dispatch(setEditTransaction(contactUser));
    dispatch(toggleEditModal());
  };
  const handleDeleteTransition = (transitionId, balance, delAmount) => {
    delId.current = transitionId;
    dispatch(deleteTransaction({ transitionId, balance, delAmount }));
  };
  return (
    <>
      {transactions.length > 0 ? (
        transactions.map(
          ({ id, transactionDate, type, categoryId, comment, amount }) => {
            const date = getDate(transactionDate);

            const positNum = Math.abs(amount);
            const sum = parseFloat(positNum).toFixed(2);

            const getCategory = categories?.find(c => c.id === categoryId);
            const catN = getCategory?.name;
            let categoryName = '';
            if (lan === true) {
              categoryName = catN;
            }
            if (lan === false) {
              categoryName = categoryCheck(catN);
            }
            // потрібно замінити умову, щоб lan === 'ru'

            let transType = '';
            if (lan === true) {
              transType = type;
            }
            if (lan === false) {
              transType = typeCheck(type);
            }

            return (
              <StyledList key={id}>
                <StyledItem type={type}>
                  <StyledSpan>{t('transactionsTableDate')}</StyledSpan>
                  {date}
                </StyledItem>
                <StyledItem type={type}>
                  <StyledSpan>{t('transactionsTableType')}</StyledSpan>
                  {transType}
                </StyledItem>
                <StyledItem type={type}>
                  <StyledSpan>{t('transactionsTableCategory')}</StyledSpan>
                  {categoryName}
                </StyledItem>
                <StyledItem type={type}>
                  <StyledSpan>{t('transactionsTableComment')}</StyledSpan>
                  {capitalizeFirstLetter(comment)}
                </StyledItem>
                <StyledItem type={type}>
                  <StyledSpan>{t('transactionsTableAmount')}</StyledSpan>
                  <StyledSum type={type}>{sum}</StyledSum>
                </StyledItem>
                <StyledItem type={type}>
                  <StyledDeleteBtn
                    disabled={loading && id === delId.current}
                    onClick={() => handleDeleteTransition(id, balance, amount)}
                  >
                    {loading && id === delId.current ? (
                      <LoaderDel />
                    ) : (
                      t('transactionsTableDelete')
                    )}
                  </StyledDeleteBtn>
                  <StyledEditBtn
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
                    <RiEdit2Line size={14} />
                    {t('transactionsTableEdit')}
                  </StyledEditBtn>
                </StyledItem>
              </StyledList>
            );
          }
        )
      ) : (
        <StyledNoTransactionDiv>
          <div>{t('transactionsTableNoTransactions')}</div>
        </StyledNoTransactionDiv>
      )}
    </>
  );
};
