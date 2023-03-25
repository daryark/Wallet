import { StyledBackdrop, ModalWrapper } from './ModalEditTransaction.styled';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toggleEditModal } from 'redux/global/globalSlice';
import MediaQuery from 'react-responsive';
import FormModalEditTransaction from 'components/FormModalEditTransaction/FormModalEditTransaction';
import { useWindowSize } from 'hooks/useWindowSize';
import { ModalCloseBtn } from 'reusable';

export const ModalEditTransaction = () => {
  const { isMobile } = useWindowSize();
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

      if (isMobile) {
        document.body.style.overflow = 'auto';
      }
    };
  }, [dispatch, isMobile]);
  const closeModal = e => {
    if (e.target !== e.currentTarget) return;
    dispatch(toggleEditModal());
  };
  return (
    <StyledBackdrop onClick={closeModal}>
      <ModalWrapper>
        <MediaQuery minWidth={768}>
          <ModalCloseBtn isRandomModalOpen={toggleEditModal} />
        </MediaQuery>
        <FormModalEditTransaction
          handleCloseModal={() => {
            dispatch(toggleEditModal());
          }}
        />
      </ModalWrapper>
    </StyledBackdrop>
  );
};
