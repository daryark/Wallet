import { StyledBackdrop, ModalWrapper } from './ModalEditTransaction.styled';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toggleEditModal } from 'redux/global/globalSlice';
import FormModalEditTransaction from 'components/FormModalEditTransaction/FormModalEditTransaction';

export const ModalEditTransaction = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleEscape = e => {
      if (e.code === 'Escape') {
        dispatch(toggleEditModal());
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);
  const closeModal = e => {
    if (e.target !== e.currentTarget) return;
    dispatch(toggleEditModal());
  };
  return (
    <StyledBackdrop onClick={closeModal}>
      <ModalWrapper>
        <FormModalEditTransaction
          handleCloseModal={() => {
            dispatch(toggleEditModal());
          }}
        />
      </ModalWrapper>
    </StyledBackdrop>
  );
};
