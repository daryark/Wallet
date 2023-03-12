import { useDispatch, useSelector } from 'react-redux';
import MediaQuery from 'react-responsive';
import { useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { selectError, selectIsModalOpen } from 'redux/global/global-selectors';
import { isModalAddTransactionOpen } from 'redux/global/globalSlice';
import { ModalCloseBtn } from 'reusable';
import { useWindowSize } from 'hooks/useWindowSize';

import FormModalAddTransaction from '../FormModalAddTransaction/FormModalAddTransaction';
import ModalBackdrop from 'components/ModalBackdrop/ModalBackdrop';

import { ModalAddTransactionStyled } from './ModalAddTransaction.styled';

function ModalAddTransaction() {
  const { isMobile } = useWindowSize();
  const isModalOpen = useSelector(selectIsModalOpen);
  const { t } = useTranslation();

  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    toast.error(error);
  }, [error]);

  useEffect(() => {
    function handleEscapeClick(event) {
      if (event.key === 'Escape') {
        dispatch(isModalAddTransactionOpen());
      }
    }

    if (isModalOpen && isMobile) {
      document.body.style.overflow = 'hidden';
      document.querySelector('.modal-add-transaction').style.overflow = 'auto';
    }

    if (isModalOpen) window.addEventListener('keydown', handleEscapeClick);

    return () => {
      window.removeEventListener('keydown', handleEscapeClick);

      if (isMobile) {
        document.body.style.overflow = 'auto';
      }
    };
  }, [dispatch, isMobile, isModalOpen]);

  const handleCloseModal = event => {
    if (event.target === event.currentTarget) {
      dispatch(isModalAddTransactionOpen());
    }
  };

  return (
    <>
      {isModalOpen && (
        <ModalBackdrop randomModalClose={isModalAddTransactionOpen}>
          <ModalAddTransactionStyled className="modal-add-transaction">
            <MediaQuery minWidth={768}>
              <ModalCloseBtn isRandomModalOpen={isModalAddTransactionOpen} />
            </MediaQuery>
            <h2 className="modal__title">{t('modalAddTransactionTitle')}</h2>
            <FormModalAddTransaction handleCloseModal={handleCloseModal} />
          </ModalAddTransactionStyled>
        </ModalBackdrop>
      )}
      <ToastContainer
        position="top-right"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default ModalAddTransaction;
